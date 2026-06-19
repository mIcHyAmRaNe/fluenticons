# Fluenticons Viewer

5000+ pixel perfect open source icons from [Microsoft](https://github.com/microsoft/fluentui-system-icons).
![Fluent Icons](https://fluenticons.co/social.png)

This site is not affiliated or connected to Microsoft in any way, this is just a viewer for the open-source icons from them.


### Functionalities

- 5000+ pixel perfect open source 24px icons.
- Copy SVG, Vue component, React component, and HTML image snippets.
- Download icons as SVG, PNG, or WEBP.
- Download Vue and React components.
- Manipulate icon colors to preview how they look.
- Search and filter icons by name.
- Fast performance — scores 100 on Lighthouse.


### Tech stack
1. Nuxt.js
2. Tailwind Css.
3. Hosted on cloudflare pages.

### To run the project locally

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### Updating icons from the source

First clone [fluentui-system-icons](https://github.com/microsoft/fluentui-system-icons) alongside this project, then run:

```bash
cd ~/Projects/fluenticons && node scripts/update-icons.mjs ~/Projects/fluentui-system-icons --force
```

This will:

- Scan the Microsoft project for all 24px filled/regular SVGs.
- Clean them with SVGO and copy them to `public/icons/fluent/`.
- Generate Vue components in `components/FluentIcon/{Filled,Outlined}/`.
- Update `assets/icons/{filled,outlined}.json` and `assets/icons/fluent/{filled,outlined}.json`.

Omit `--force` to only generate Vue components for new icons (skipping existing ones).

### SVG cleanup reference

The icons are cleaned with SVGO so they're ready for use in your own projects:

```bash
svgo -r ./**/SVG/*.svg -o ../cleaned
```

Only 24px icons are kept — Microsoft provides many sizes but only 24px filled/regular are used here:

```bash
find <FILEPATH> -type f ! -name "*24*"
```

Append `-delete` at the end of the `find` command to remove non-24px files.


### Donation

[![BuyMeACoffee](https://raw.githubusercontent.com/pachadotdev/buymeacoffee-badges/main/bmc-yellow.svg)](https://buymeacoffee.com/michyamrane)
