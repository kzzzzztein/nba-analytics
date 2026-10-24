"""Collect ESPN public NBA scoreboard and latest news as best-effort cached snapshots."""
import json, urllib.request, datetime, pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]/'public'/'data'
ROOT.mkdir(parents=True,exist_ok=True)
HEADERS={'User-Agent':'Mozilla/5.0 (compatible; CourtVision/1.0)'}
def get(url):
    req=urllib.request.Request(url,headers=HEADERS)
    with urllib.request.urlopen(req,timeout=20) as r:return json.load(r)
def save(name,payload):
    (ROOT/name).write_text(json.dumps({'updatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'data':payload},separators=(',',':')),encoding='utf-8')
for name,url in [('scoreboard.json','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?limit=100'),('news.json','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=25'),('teams.json','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=40')]:
    try:
        data=get(url);save(name,data);print('Updated',name)
    except Exception as e:print('Failed',name,repr(e))
