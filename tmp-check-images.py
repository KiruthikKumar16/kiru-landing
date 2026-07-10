import os, re, urllib.request
from pathlib import Path

root = Path('src')
pattern = re.compile(r'https://images\.unsplash\.com/[^"\'\s)]+')
files = []
for dirpath, _, filenames in os.walk(root):
    for fn in filenames:
        if fn.endswith(('.tsx', '.ts', '.jsx', '.js', '.md', '.html', '.json')):
            files.append(Path(dirpath) / fn)

urls = []
seen = set()
for f in files:
    text = f.read_text(encoding='utf-8', errors='ignore')
    for m in pattern.finditer(text):
        u = m.group(0)
        if u not in seen:
            seen.add(u)
            urls.append(u)

print('count', len(urls))
for u in urls:
    req = urllib.request.Request(u, method='HEAD')
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.getcode()
            if 200 <= code < 400:
                continue
            print('HEAD', code, u)
    except Exception:
        try:
            req = urllib.request.Request(u, method='GET')
            with urllib.request.urlopen(req, timeout=20) as r:
                code = r.getcode()
                print('GET', code, u)
        except Exception as e:
            print('ERR', str(e), u)
