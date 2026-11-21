# GitHub & LinkedIn Professional Growth Dashboard — sukhada30github

A Power BI-style, interactive dashboard for the GitHub profile
**sukhada30github**, with a LinkedIn section that is import-ready —
no LinkedIn numbers are invented.

## What is verified in this package

- **Source:** Public GitHub REST API, collected **2026-11-21**
  - `https://api.github.com/users/sukhada30github/repos?per_page=100&sort=created`
- **Profile:** created 2023-07-11, followers 1, following 0, public repos 25, public gists 0
- **Repositories:** 25 public, all not archived. Stars 0, forks received 0,
  watchers 0, open issues 0 — those are real API values, not missing data.
- **Languages:** JavaScript 7, HTML 5, Java 4, no primary language listed 9
- **By year:** 2023: 4, 2026: 21 (no new repos in 2024–2025 in this dataset)
- **Oldest:** MySecondGit, 2023-07-14. **Newest:** TCO-CapEx-OpEx-Visual, 2026-11-01
- **Forks:** 2 repos are forks — AWS-BY-SN and saas-landing-page. All others are original.
- **Unavailable, not zero:** commits, branches, releases, closed issues,
  topics and README availability. Do not treat them as 0.
- **LinkedIn:** No data — awaiting official LinkedIn export. See below.

Note: the GitHub MCP search returned 23 repos; the public API returned
25. The 2 extra are the forks listed above. This package uses the 25.

## Project structure

```
github-linkedin-dashboard/
├── index.html                 # Standalone dashboard (open directly)
├── styles.css                 # All dashboard styling
├── app.js                     # Charts (Chart.js), filters, table, CSV export
├── data/
│   ├── repos.csv              # All 25 repos, one row each
│   ├── repos.json             # Same data as JSON, with KPIs and notes
│   └── linkedin_template.csv  # Empty LinkedIn import template (no data yet)
├── github_collector.py        # GitHub REST API collector, paginated
├── linkedin_import.py         # LinkedIn official-export importer
├── analytics.py               # Pandas KPI calculations from repos.csv
├── config.yaml                # Username, categories, dashboard settings
├── requirements.txt
└── README.md
```

## Run locally on Windows

```powershell
# 1. From this folder:
python -m venv .venv
.venv\Scripts\activate

# 2. Install dependencies:
pip install -r requirements.txt

# 3. (Optional, raises the GitHub rate limit) Set a token — never hardcode it:
#    PowerShell:
$env:GITHUB_TOKEN="ghp_your_token_here"
#    Command Prompt:
#    set GITHUB_TOKEN=ghp_your_token_here

# 4. Refresh the GitHub data:
python github_collector.py
python analytics.py

# 5. Open the dashboard — either:
#    - double-click index.html, or
python -m http.server 8000
#    then open http://localhost:8000/
```

## Refresh mechanism

Re-run `python github_collector.py`. It rewrites `data/repos.json` and
`data/repos.csv` from the live public API with pagination, then re-open
`index.html`. The embedded data in `app.js` is a snapshot from
2026-11-21 — after a refresh, update `app.js` from `data/repos.json`
or regenerate the dashboard from the new CSV.

## How to add LinkedIn data

1. Export your official LinkedIn analytics (do not share login credentials,
   and do not scrape private account data).
2. Copy the values into `data/linkedin_template.csv`, one row per post.
   Columns: `date, post_title, category, impressions, reactions, comments,
   reposts, followers, profile_views, search_appearances`.
   Categories: AWS, DevOps, Docker, Kubernetes, Jenkins, Linux, Python,
   Cloud Projects, Learning Journey, Career Development.
3. Run:
   ```powershell
   python linkedin_import.py
   ```
   It writes `data/linkedin_summary.json`. If the file is missing or has
   no data rows, it exits with an error and writes nothing — by design.

## Data quality & limitations

- Validate before visualising: no duplicate repos; missing values are
  kept as `unavailable`, not filled with 0.
- Lifetime metrics (stars/forks/watchers) are current totals.
- `updated_at` is not a commit count.
- Commit/branch/release counts need per-repo API calls; they are not in
  this snapshot. `github_collector.py` leaves them as `unavailable`
  rather than inventing them.
- LinkedIn analytics require an official export supplied by the user.
  No LinkedIn follower, view or engagement numbers are in this package.

## Future enhancements

- Per-repo commit/branch/release enrichment in `github_collector.py`.
- A Streamlit / Plotly version of the dashboard using the same CSV.
- Automatic monthly refresh (scheduled task) that re-runs the collector.
- LinkedIn charts once `data/linkedin_summary.json` exists.
- Docker, Kubernetes and Terraform projects to close the skill gaps
  identified in the dashboard insights section.
