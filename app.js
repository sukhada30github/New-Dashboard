// GitHub & LinkedIn Professional Growth Dashboard — sukhada30github
// Data: public GitHub API, collected 2026-11-21. No invented values.
// Commits / branches / releases / closed issues / topics / README = "unavailable", not zero.
const REPOS = [
  {name:"MySecondGit",created:"2023-07-14",language:"Java",category:"Learning & Practice Projects",desc:"",url:"https://github.com/sukhada30github/MySecondGit",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"NewGit",created:"2023-07-31",language:"Java",category:"Learning & Practice Projects",desc:"",url:"https://github.com/sukhada30github/NewGit",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"QuizApplication",created:"2023-08-06",language:"Java",category:"Learning & Practice Projects",desc:"",url:"https://github.com/sukhada30github/QuizApplication",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"micro-service",created:"2023-09-14",language:"Not listed",category:"Learning & Practice Projects",desc:"",url:"https://github.com/sukhada30github/micro-service",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"AWS-BY-SN",created:"2026-08-02",language:"Not listed",category:"AWS & Cloud Computing",desc:"Complete AWS Notes, Documentation, Projects and Roadmap",url:"https://github.com/sukhada30github/AWS-BY-SN",fork:true,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Sukhada-Portfolio",created:"2026-10-15",language:"HTML",category:"Personal Projects",desc:"",url:"https://github.com/sukhada30github/Sukhada-Portfolio",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"AWS-Projects",created:"2026-10-16",language:"Not listed",category:"AWS & Cloud Computing",desc:"AWS Projects",url:"https://github.com/sukhada30github/AWS-Projects",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Jenkins-Project",created:"2026-10-17",language:"HTML",category:"Jenkins & CI/CD",desc:"Netflix website using CICD and Jenkins",url:"https://github.com/sukhada30github/Jenkins-Project",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Jenkins-Netflix-Project",created:"2026-10-18",language:"HTML",category:"Jenkins & CI/CD",desc:"",url:"https://github.com/sukhada30github/Jenkins-Netflix-Project",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"apache-server-visual",created:"2026-10-21",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/apache-server-visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Application-load-balancer-visual",created:"2026-10-21",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/Application-load-balancer-visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Bastion-Host-Visual",created:"2026-10-21",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/Bastion-Host-Visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Nginx-server-visual",created:"2026-10-21",language:"Not listed",category:"Linux & Shell Scripting",desc:"",url:"https://github.com/sukhada30github/Nginx-server-visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Nginx-Netflix-Page",created:"2026-10-24",language:"HTML",category:"HTML, CSS & JavaScript",desc:"",url:"https://github.com/sukhada30github/Nginx-Netflix-Page",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Production-Outage-Question-Book",created:"2026-10-24",language:"Not listed",category:"DevOps Engineering",desc:"",url:"https://github.com/sukhada30github/Production-Outage-Question-Book",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"saas-landing-page",created:"2026-10-25",language:"Not listed",category:"HTML, CSS & JavaScript",desc:"Build and deploy a SaaS landing page with modern UI using React.js and Tailwind CSS.",url:"https://github.com/sukhada30github/saas-landing-page",fork:true,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"AWS-BY-Sukhada",created:"2026-10-27",language:"Not listed",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/AWS-BY-Sukhada",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"3-Tier-Web-Application-Project-by-Sukhada",created:"2026-10-28",language:"Not listed",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/3-Tier-Web-Application-Project-by-Sukhada",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"3-Tier-Web-Project-by---SW",created:"2026-10-28",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/3-Tier-Web-Project-by---SW",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"sukhada30github",created:"2026-10-28",language:"Not listed",category:"Personal Projects",desc:"Profile README repo",url:"https://github.com/sukhada30github/sukhada30github",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Nginx-Verse-Project",created:"2026-10-31",language:"HTML",category:"HTML, CSS & JavaScript",desc:"",url:"https://github.com/sukhada30github/Nginx-Verse-Project",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Jenkins-Demo-App-Project",created:"2026-11-01",language:"Java",category:"Jenkins & CI/CD",desc:"",url:"https://github.com/sukhada30github/Jenkins-Demo-App-Project",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"3-Tier-Visual",created:"2026-11-01",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/3-Tier-Visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"Nginx-Visual",created:"2026-11-01",language:"JavaScript",category:"HTML, CSS & JavaScript",desc:"",url:"https://github.com/sukhada30github/Nginx-Visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0},
  {name:"TCO-CapEx-OpEx-Visual",created:"2026-11-01",language:"JavaScript",category:"AWS & Cloud Computing",desc:"",url:"https://github.com/sukhada30github/TCO-CapEx-OpEx-Visual",fork:false,stars:0,forks:0,watchers:0,open_issues:0}
];

const $ = id => document.getElementById(id);
const lang = r => r.language || "Not listed";

function filtered(){
  const y = $("fYear").value, l = $("fLang").value, c = $("fCat").value, q = ($("fSearch").value||"").toLowerCase();
  return REPOS.filter(r =>
    (!y || r.created.startsWith(y)) &&
    (!l || lang(r)===l) &&
    (!c || r.category===c) &&
    (!q || r.name.toLowerCase().includes(q) || (r.desc||"").toLowerCase().includes(q))
  );
}
function countBy(list, fn){
  const m = {};
  list.forEach(r => { const k = fn(r); m[k]=(m[k]||0)+1; });
  return m;
}
let charts = {};
function drawCharts(list){
  const palette = ["#2563eb","#14b8a6","#f59e0b","#7c3aed","#64748b","#0ea5e9","#16a34a"];
  // Timeline: cumulative repos by month
  const months = ["2023-07","2023-08","2023-09","2026-08","2026-10","2026-11"];
  const perMonth = countBy(REPOS, r => r.created.slice(0,7));
  let cum = 0; const cumData = months.map(m => cum += (perMonth[m]||0));
  // Language donut
  const langs = countBy(list, r => lang(r));
  // Category bar
  const cats = countBy(list, r => r.category);
  Object.values(charts).forEach(c => c.destroy()); charts = {};
  charts.timeline = new Chart($("chTimeline"), {type:"line", data:{labels:months, datasets:[{label:"Cumulative repositories", data:cumData, borderColor:"#2563eb", backgroundColor:"rgba(37,99,235,.15)", fill:true, tension:.3}]}, options:{responsive:true, plugins:{legend:{display:true}}}});
  charts.lang = new Chart($("chLang"), {type:"doughnut", data:{labels:Object.keys(langs), datasets:[{data:Object.values(langs), backgroundColor:palette}]}, options:{responsive:true, plugins:{legend:{position:"bottom"}}}});
  charts.cat = new Chart($("chCat"), {type:"bar", data:{labels:Object.keys(cats), datasets:[{label:"Repositories", data:Object.values(cats), backgroundColor:"#3b82f6"}]}, options:{indexAxis:"y", responsive:true, plugins:{legend:{display:false}}}});
  // Activity: repos per month in the filtered set
  const act = countBy(list, r => r.created.slice(0,7));
  charts.act = new Chart($("chActivity"), {type:"bar", data:{labels:Object.keys(act), datasets:[{label:"Repositories created", data:Object.values(act), backgroundColor:"#14b8a6"}]}, options:{responsive:true, plugins:{legend:{display:false}}}});
}
function renderTable(list){
  $("repoCount").textContent = list.length + " of 25 repositories shown";
  $("repoBody").innerHTML = list.map(r => `<tr>
    <td><a href="${r.url}" target="_blank" rel="noopener">${r.name}</a>${r.fork ? ' <span class="pill fork">fork</span>' : ''}</td>
    <td>${r.desc || "—"}</td><td>${r.created}</td><td>${lang(r)}</td><td>${r.category}</td>
    <td>${r.stars}</td><td>${r.forks}</td><td>unavailable</td>
  </tr>`).join("");
}
function render(){
  const list = filtered();
  renderTable(list);
  drawCharts(list);
}
function exportCSV(){
  const head = "name,description,created,language,category,url,fork,stars,forks,watchers,open_issues\n";
  const body = filtered().map(r => [r.name, '"'+(r.desc||"").replace(/"/g,'""')+'"', r.created, lang(r), '"'+r.category+'"', r.url, r.fork, r.stars, r.forks, r.watchers, r.open_issues].join(",")).join("\n");
  const blob = new Blob([head+body], {type:"text/csv"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "sukhada30github-repos.csv"; a.click();
}
document.addEventListener("DOMContentLoaded", () => {
  ["fYear","fLang","fCat"].forEach(id => $(id).addEventListener("change", render));
  $("fSearch").addEventListener("input", render);
  $("btnCsv").addEventListener("click", exportCSV);
  $("btnReset").addEventListener("click", () => { $("fYear").value=""; $("fLang").value=""; $("fCat").value=""; $("fSearch").value=""; render(); });
  render();
});
