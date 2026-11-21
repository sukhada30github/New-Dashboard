#!/usr/bin/env python3
"""LinkedIn import — official export only.

Reads data/linkedin_template.csv (the format of an official LinkedIn
analytics export copied into that template) and writes
data/linkedin_summary.json. No LinkedIn data is invented: if the file
is missing or contains no data rows, this script exits with a clear
error and no summary is produced.

Usage:
    python linkedin_import.py
    python linkedin_import.py --input data/linkedin_template.csv
"""
import argparse
import csv
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", default=str(ROOT / "data" / "linkedin_template.csv"))
    parser.add_argument("--output", default=str(ROOT / "data" / "linkedin_summary.json"))
    args = parser.parse_args()
    path = Path(args.input)
    if not path.exists():
        print(f"ERROR: LinkedIn export not found: {path}")
        print("Export your official LinkedIn analytics, copy it into "
              "data/linkedin_template.csv, then re-run this script.")
        sys.exit(1)

    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader((line for line in f if not line.startswith("#")))
        for row in reader:
            if not row.get("date") or not row.get("post_title"):
                continue
            rows.append(row)

    if not rows:
        print("No LinkedIn data rows found. Status: No data — awaiting official LinkedIn export.")
        print("No summary was written. Fill in data/linkedin_template.csv from an official export and re-run.")
        sys.exit(2)

    def num(row, key):
        try:
            return float(row.get(key) or 0)
        except ValueError:
            return 0.0

    by_category = defaultdict(lambda: {"posts": 0, "impressions": 0, "reactions": 0, "comments": 0, "reposts": 0})
    for row in rows:
        cat = row.get("category") or "Uncategorised"
        by_category[cat]["posts"] += 1
        for key in ("impressions", "reactions", "comments", "reposts"):
            by_category[cat][key] += num(row, key)

    summary = {
        "status": "data present — from official LinkedIn export supplied by the user",
        "total_posts": len(rows),
        "total_impressions": sum(num(r, "impressions") for r in rows),
        "total_reactions": sum(num(r, "reactions") for r in rows),
        "total_comments": sum(num(r, "comments") for r in rows),
        "total_reposts": sum(num(r, "reposts") for r in rows),
        "by_category": dict(by_category),
        "posts_by_month": dict(sorted(Counter(r["date"][:7] for r in rows).items())),
    }
    Path(args.output).write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(f"Wrote {args.output} for {len(rows)} LinkedIn posts.")

if __name__ == "__main__":
    main()
