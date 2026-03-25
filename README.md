# Community HelpBoard

Hackathon PRD — Product Requirements Document  
Team: Ibrahima · Jay · Daniel · Christian  
Time Limit: 2 Hours

## 1. Project Overview
Community HelpBoard is a simple, single-page web app where people can post help requests or offers for their local community. Anyone can submit a post (name, category, message) and it shows up on the board instantly.

**Tech Stack:**
- HTML — page structure
- CSS — visual styling
- JavaScript — form logic + localStorage (no backend needed)
- GitHub Pages or Vercel — free deployment in minutes

## 2. Goal & Theme
**Theme:** Community

The app shows how simple technology can connect neighbors. Someone who needs help with groceries, tutoring, or coding can post a request — and someone nearby can see it and respond.

**Why localStorage instead of Firebase?**
- No account setup, no config keys, no errors from unfamiliar tools
- Works entirely in the browser — zero backend
- For a demo on one screen, it works perfectly

## 3. Team Roles & Responsibilities

| Person | Role | What They Do |
| --- | --- | --- |
| Ibrahima | JS Lead | Write the JavaScript: form submit logic, save to localStorage, display posts on the page |
| Jay | HTML Lead | Build the page structure: header, form (name/category/message fields), and the post feed section |
| Daniel | CSS Lead | Style everything: colors, fonts, card layout, make it look clean and mobile-friendly |
| Christian | Deploy + Demo | Set up GitHub repo, push the final file, deploy to Vercel or GitHub Pages, prep the 2-min pitch |

## 4. Detailed Task Breakdown

**Jay — HTML Structure**
- File to work in: `index.html`
- Your job is to write the bones of the page. Think of HTML as the skeleton — no styling yet, just structure.

You need to create:
- A `<header>` with the app title and a short subtitle
- A `<form>` with 3 inputs: Name (text input), Category (dropdown: Help Needed / Offering Help / Other), Message (textarea)
- A `<button>` inside the form that says "Post to Board"
- A `<div>` below the form with `id="post-feed"` — this is where Ibrahima's JS will inject posts

IDE tip: Open VS Code, create `index.html`, type `!` and press Tab for a starter template. Write your content inside `<body>`.

**Daniel — CSS Styling**
- File to work in: `style.css`
- Your job is to make the app look clean and modern. No fancy animations — just readable and organized.

Focus on:
- Body: light gray background (`#f4f4f4`), Arial font
- Header: centered, bold title, blue accent color (`#1A73E8`)
- Form: white background, padding, rounded corners, soft shadow
- Post cards: white box, padding, rounded corners, a left colored border
- Button: blue background, white text, rounded corners, cursor: pointer

IDE tip: In VS Code, press Ctrl+Space inside a CSS rule to get property suggestions. Save with Ctrl+S and refresh the browser to see your changes.

**Ibrahima — JavaScript Logic**
- File to work in: `script.js`
- Your job is the brain of the app. When the form is submitted, the post should save and appear on screen without reloading the page.

You need to build:
- Listen for the form's submit event using `addEventListener`
- Read the 3 input values (name, category, message) from the form
- Save posts to localStorage as a JSON array
- A `renderPosts()` function that reads localStorage and builds post cards inside `#post-feed`
- Call `renderPosts()` on page load so posts persist after refresh

IDE tip: Use `console.log()` to check your values. Right-click the page in your browser, click Inspect, then go to the Console tab to see your logs.

**Christian — Deployment & Demo**
You don't write code — you own the live link and the pitch.

Deployment steps:
1. Go to github.com — create a free account or log in
2. Create a new Public repository named `community-helpboard`
3. Upload the 3 files (`index.html`, `style.css`, `script.js`) via the GitHub website
4. Go to vercel.com, sign in with GitHub, click New Project, select the repo, hit Deploy
5. Copy the live URL Vercel gives you and share it with the team

Your demo script:
"Community HelpBoard connects neighbors who need help with those who can offer it. We built it in under 2 hours with HTML, CSS, and JavaScript. Anyone can post a request or offer — no login, no friction, just community."

## 5. Build Timeline

| Time | What Happens |
| --- | --- |
| 0–10 min | Everyone sets up VS Code and creates the 3 files. Ibrahima creates the GitHub repo now so it's ready. |
| 10–30 min | Jay builds HTML skeleton. Daniel sets up basic CSS (body, header, form). Ibrahima writes JS skeleton. |
| 30–60 min | Core build sprint — each person works in their own file. Christian drafts the pitch script. |
| 60–80 min | Integration — Ibrahima connects JS to Jay's HTML element IDs. Daniel styles the post cards. |
| 80–100 min | Christian uploads files to GitHub and deploys to Vercel. Everyone tests the live link. |
| 100–120 min | Fix any bugs, rehearse the 2-min demo, ready to present. |

## 6. File Structure
Your project needs exactly 3 files in one folder:

- `index.html` — the main page (Jay owns this)
- `style.css` — all visual styling (Daniel owns this)
- `script.js` — all JavaScript logic (Ibrahima owns this)

Important: Inside `index.html`, Jay must add these two lines inside the `<head>` tag:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## 7. What Counts as Done (MVP)
Before you deploy, confirm all 4 of these work:

- Form works: User can fill in name, category, and message and click Post
- Posts appear: After submitting, the post card shows up in the feed immediately
- Refresh test: Refreshing the page still shows old posts (localStorage is working)
- Live URL: The app is deployed and accessible via a Vercel or GitHub Pages link
