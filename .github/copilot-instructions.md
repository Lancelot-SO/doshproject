## Purpose

This file gives concise, repo-specific instructions for AI coding agents (Copilot-like) to be immediately productive in this Create React App project.

## Quick facts

- Project: React app bootstrapped with Create React App (`react-scripts` v5).
- Dev server: `npm start` → localhost:3000. Build: `npm run build`. Tests: `npm test`.
- Key dirs: [src/components](src/components), [src/pages](src/pages), [src/services](src/services), [src/utils](src/utils).

## Architecture & data flow (short)

- UI is standard SPA: pages under [src/pages](src/pages) assemble components from [src/components](src/components).
- Form-heavy areas: [src/components/forms](src/components/forms) — many forms map directly to API payload shapes.
- API layer: central axios instance in [src/services/api.js](src/services/api.js). Higher-level calls live in [src/services/doshApi.js](src/services/doshApi.js).
- Typical flow: page → component/form → `doshApi` call → server. `doshApi.signup()` first fetches a CSRF token (`/csrf-token`) then posts to `/transactions/signup` with `x-csrf-token` and a required `Origin` header.

## Important integration points & environment

- Base URL comes from `process.env.REACT_APP_DOSH_API_URL` (see [src/services/api.js](src/services/api.js)).
- CSRF: always use `doshApi.getCsrfToken()` before POSTs that require it (see [src/services/doshApi.js](src/services/doshApi.js)).
- Axios response interceptor logs errors globally; prefer returning user-friendly error objects from `doshApi` for UI handling.

## Project-specific conventions

- File extensions: components use `.jsx` for React components. Keep JSX files under `src/components` or `src/pages`.
- Styles: component-specific `.css` files are colocated (e.g., `src/components/InsuranceDetails.css`) and Tailwind is present (`tailwind.config.js`) but many styles are plain CSS—check the component folder for the authoritative stylesheet.
- Forms: each form component (under `src/components/forms`) expects payload shapes that map to `doshApi.signup()` variants — inspect the form component props to see required fields.
- Routing: `react-router-dom` v6 is used; prefer element-based routes and hooks (`useNavigate`, `useParams`).

## Testing & debugging

- Tests use Create React App's test runner and `@testing-library/react` — run `npm test`.
- For component debugging run `npm start` and open `http://localhost:3000`.
- When reproducing API issues, set `REACT_APP_DOSH_API_URL` locally and use browser devtools to confirm CSRF header exchange.

## Code change guidance for AI

- Keep changes minimal and component-scoped unless refactoring across files is requested.
- When modifying API calls, update both `src/services/api.js` and any callers in `src/services/doshApi.js` and form components under `src/components/forms`.
- Prefer adding small, focused tests for new behavior using `@testing-library/react` and place them next to the component.

## Files to inspect for examples

- API patterns: [src/services/api.js](src/services/api.js) and [src/services/doshApi.js](src/services/doshApi.js)
- Form pattern examples: [src/components/forms/HealthInsurance.jsx](src/components/forms/HealthInsurance.jsx) (and peers in that folder)
- Utilities: [src/utils/transformers.js](src/utils/transformers.js) and [src/utils/validation.js](src/utils/validation.js)

## If you need clarification

- Ask which page or form to change and whether to run dev server or tests.
- If an environment variable is required, request the value (or a dev stub) to run end-to-end flows locally.

## End

Please review and tell me if you want more examples (specific file links or code snippets added).
