# GoCode Zone Website

A simple static multi-page website for the GoCode Zone community.

## Pages
- `index.html` — homepage and contact form
- `about.html` — project/community overview
- `course.html` — course details
- `join.html` — Discord join + enrollment form
- `owners-login.html` — shared owner/student portal demo
- `privacy.html` — privacy policy
- `vip.html` — VIP page

## Tech Stack
- Plain HTML, CSS, and vanilla JavaScript
- No external framework dependencies

## Run Locally
Because this is a static site, you can open files directly in a browser, or serve with a local HTTP server:

```bash
python3 -m http.server 8000
```

Then visit:
- `http://127.0.0.1:8000/index.html`

## Notes
- Forms currently use front-end/demo behavior and static-host friendly patterns.
- For production authentication and data persistence, connect to a backend service.
