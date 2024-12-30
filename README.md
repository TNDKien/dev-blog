Working fork of royvz-dev's Next + Storyblok boilerplate. This fork contains custom CSS and a demo component that is being loaded in the visual editor.

## Notes
* `npm run dev` gives you a local SSL certificatie for localhost so allow it please. Otherwise Storyblok's visual live editor won't work.
* There is no `.env.local` or `.env` in this repository since it is in .gitignore. Please create it yourself and add the access token. Use the preview token for `.env.local` and the public token for `.env` when deploying 

## Changelog

### 2024.3
- Removed [locale] folder since we're only working in 1 language
- Moved Feature component and it's CSS to a folder conform best practices
- Added [slug] folder with page.tsx. This file now is used for all pages _except_ Home
- Home will use the page.tsx in the app folder
- You can now use "Real Path" under the Config settings in Storyblok (just add a `/`) and homepage will now render under the root URL instead of /home
