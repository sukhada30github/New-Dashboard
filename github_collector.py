#!/usr/bin/env python3
"""GitHub collector for sukhada30github.

Fetches all public repositories via the GitHub REST API with pagination.
Auth is optional for public repos; if GITHUB_TOKEN is set it raises the
rate limit. Never hardcode a token — read it from the environment only.

Usage (Windows, from the project root):
    python -m venv .venv
    .venv\\Scripts\\activate
    pip install -r requirements.txt
    set GITHUB_TOKEN=ghp_...   (optional, PowerShell: $env:GITHUB_TOKEN="ghp_...")
    python github_collector.py

Outputs: data/repos.json and data/repos.csv
"""
import csv
import json
import os
from pathlib import Path

import requests
import yaml

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"

API = "https://api.github.com/users/{username}/repos?per_page=100&page={page}&sort=created"

# Category assignment is name/description-based only. See config.yaml.
CATEGORY_RULES = [
    (("aws", "3-tier", "3 tier", "tco", "capex", "opex", "bastion", "load-balancer", "apache-server"), "AWS & Cloud Computing"),
    (("jenkins",), "Jenkins & CI/CD"),
    (("nginx-netflix", "nginx-verse", "nginx-visual", "saas-landing"), "HTML, CSS & JavaScript"),
    (("portfolio", "sukhada30github"), "Personal Projects"),
    (("outage", "production-"), "DevOps Engineering"),
    (("nginx-server",), "Linux & Shell Scripting"),
]

def category_for(name, description):
    text = f"{name} {(description or '')}".lower()
    for keywords, category in CATEGORY_RULES:
        if any(k in text for k in keywords):
            return category
    return "Learning & Practice Projects"

def main():
    with open(ROOT / "config.yaml", encoding="utf-8") as f:
        config = yaml.safe_load(f)
    username = config["username"]
    token = os.environ.get("GITHUB_TOKEN")
    headers = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"

    repos = []
    page = 1
    while True:
        resp = requests.get(API.format(username=username, page=page), headers=headers, timeout=30)
        resp.raise_for_status()
        batch = resp.json()
        if not batch:
            break
        repos.extend(batch)
        if len(batch) < 100:
            break
        page += 1

    repos.sort(key=lambda r: r["created_at"])
    rows = []
    for r in repos:
        rows.append({
            "name": r["name"],
            "description": r.get("description"),
            "created_at": r["created_at"][:10],
            "updated_at": r.get("updated_at"),
            "pushed_at": r.get("pushed_at"),
            "language": r.get("language"),
            "category": category_for(r["name"], r.get("description")),
            "visibility": "private" if r.get("private") else "public",
            "stars": r.get("stargazers_count", 0),
            "forks": r.get("forks_count", 0),
            "watchers": r.get("watchers_count", 0),
            "open_issues": r.get("open_issues_count", 0),
            "fork": r.get("fork", False),
            "archived": r.get("archived", False),
            "html_url": r["html_url"],
            # Per-repo counts need extra API calls; leave as unavailable
            # rather than inventing a number.
            "commits": "unavailable",
            "branches": "unavailable",
            "releases": "unavailable",
            "closed_issues": "unavailable",
            "topics": "unavailable",
            "readme_available": "unavailable",
        })

    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "repos.json").write_text(json.dumps({
        "username": username,
        "collected_at": "2026-11-21",
        "source": API.format(username=username, page=1),
        "repositories": rows,
    }, indent=2), encoding="utf-8")
    with open(DATA / "repos.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()) if rows else [])
        writer.writeheader()
        writer.writerows(rows)
    print(f"Saved {len(rows)} repositories to data/repos.json and data/repos.csv")

if __name__ == "__main__":
    main()
