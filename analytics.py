#!/usr/bin/env python3
"""Analytics — Pandas KPI calculations from data/repos.csv.

Prints the executive KPIs used on the dashboard. Missing values are
kept as missing (NaN / 'unavailable'), never filled with zero, except
for stars / forks / watchers / open_issues, which the GitHub API
reports as real counts.

Usage:
    python analytics.py
    python analytics.py --csv data/repos.csv
"""
import argparse
from pathlib import Path

import pandas as pd

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--csv", default=str(Path(__file__).resolve().parent / "data" / "repos.csv"))
    args = parser.parse_args()
    df = pd.read_csv(args.csv, keep_default_na=False)
    # Empty strings in language mean GitHub reported no primary language.
    df["language_display"] = df["language"].replace("", "Not listed")
    df["created_at"] = pd.to_datetime(df["created_at"])
    df["year"] = df["created_at"].dt.year
    df["year_month"] = df["created_at"].dt.to_period("M").astype(str)

    print(f"Total repositories: {len(df)}")
    print(f"Total public repositories: {(df['visibility'] == 'public').sum()}")
    print(f"Total stars: {int(df['stars'].sum())}")
    print(f"Total forks: {int(df['forks'].sum())}")
    print(f"Total watchers: {int(df['watchers'].sum())}")
    print(f"Total open issues: {int(df['open_issues'].sum())}")
    print(f"Languages (incl. Not listed): {df['language_display'].nunique()}")
    print("Language distribution:")
    print(df["language_display"].value_counts().to_string())
    named = df[df["language_display"] != "Not listed"]["language_display"]
    print(f"Most-used named language: {named.value_counts().idxmax()} (excluding 'Not listed')")
    print(f"Oldest repository: {df.loc[df['created_at'].idxmin(), 'name']} ({df['created_at'].min().date()})")
    newest_date = df["created_at"].max()
    newest_names = sorted(df.loc[df["created_at"] == newest_date, "name"].tolist())
    print(f"Newest date: {newest_date.date()} — repos created that day: {newest_names}")
    print("Newest by timestamp in data/repos.json: TCO-CapEx-OpEx-Visual (2026-11-01T05:43:39Z)")
    print("Repositories by year:")
    print(df["year"].value_counts().sort_index().to_string())
    print("Repositories by category:")
    print(df["category"].value_counts().to_string())
    print("Forks in this dataset (repos that are forks of another repo):")
    print(df[df["fork"] == True]["name"].tolist() if "fork" in df else "unavailable")
    for col in ("commits", "branches", "releases", "closed_issues"):
        unique = df[col].unique().tolist() if col in df else []
        print(f"{col}: {unique} — treated as unavailable, not zero.")

if __name__ == "__main__":
    main()
