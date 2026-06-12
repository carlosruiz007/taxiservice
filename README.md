# Ride With Carlos

Marketing website for a taxi and airport transfer business. Built as a static React app and deployed on Netlify with built-in form handling for ride bookings.

## Tech Stack

- **React 19** — UI
- **Vite 7** — dev server and production build
- **Tailwind CSS 3** — styling (used on the legacy `/old-home` page)
- **React Router 7** — client-side routing
- **Netlify Forms** — booking form submissions (no backend required)

## Current Features

- Responsive homepage at `/` with services, vehicles, testimonials, and contact CTAs
- **Book Your Ride** form that saves submissions to Netlify Forms
- Phone call-to-action buttons across the page
- Legacy alternate layout at `/old-home`
- `netlify.toml` configured for build, publish, and SPA routing

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:5173/`.

### Build for production

```bash
npm run build
```

Output is written to `dist/`.

### Preview production build

```bash
npm run preview
```

## Customize Business Details

Update contact info and branding in one place:

```
src/config/site.js
```

Also update these files when handing off to a new owner:

| File | What to change |
|------|----------------|
| `src/config/site.js` | Business name, phone, email, location |
| `index.html` | Page title and meta description |
| `public/logo.png` | Site logo |

Phone numbers in `src/pages/Home.jsx` are loaded from `src/config/site.js`.

## Booking Form (Netlify Forms)

The **Book Your Ride** form posts to [Netlify Forms](https://docs.netlify.com/manage/forms/setup/). Submissions are stored in the Netlify dashboard so the owner can review details and follow up by phone.

### Form fields

- Pickup location
- Drop-off location
- Date
- Time
- Phone number

### How it works

1. A hidden HTML form in `index.html` lets Netlify detect the form at build time.
2. The React form in `src/pages/Home.jsx` submits via `fetch` to Netlify in production.
3. Submissions appear under **Netlify dashboard → Forms → booking**.

### Local development note

Form submissions only work on the deployed Netlify site, not in `npm run dev`.

## Deploy to Netlify

1. Transfer or push this repo to the new owner's GitHub account.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Connect the GitHub repo. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy the site.
5. In **Forms → booking → Settings**, enable email notifications for new submissions.

## Repo Ownership Transfer Checklist

The repository will be owned by **carlosruiz007** on GitHub. Transfer it once local changes are finalized.

### On GitHub

1. Transfer the repo to `carlosruiz007`: **Settings → General → Danger Zone → Transfer ownership**
2. Confirm Carlos accepts the transfer.

### For Carlos (`carlosruiz007`)

1. Clone or update the local repo remote:

```bash
git remote set-url origin https://github.com/carlosruiz007/taxiservice.git
```

2. Update business details in `src/config/site.js`, `index.html`, and `public/logo.png`.
3. Connect the repo to a Netlify site under the Carlos account.
4. Point the domain DNS to Netlify.
5. Turn on Netlify form notification emails.
6. Submit a test booking on the live site and confirm it appears in **Forms**.

### For existing collaborators

After the transfer, run:

```bash
git fetch origin
git remote -v
```

Verify `origin` points to `https://github.com/carlosruiz007/taxiservice.git`.

## Project Structure

```
taxiservice/
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable components (legacy home page)
│   ├── config/
│   │   └── site.js      # Business name, phone, email, location
│   ├── pages/
│   │   ├── Home.jsx     # Main homepage + booking form
│   │   └── OldHome.jsx  # Legacy layout
│   ├── App.jsx          # Routes
│   └── main.jsx         # Entry point
├── index.html           # HTML shell + hidden Netlify form
├── netlify.toml         # Netlify build and SPA redirect config
└── package.json
```

## Routes

| Path | Page |
|------|------|
| `/` | Main homepage |
| `/old-home` | Legacy homepage layout |

## Repository

Target GitHub owner: **carlosruiz007**

`https://github.com/carlosruiz007/taxiservice`

The repo is still under the current owner until the GitHub transfer is completed.
