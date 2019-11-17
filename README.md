# DIAS - Do It And See
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Do It And See is a time tracker where you are given 100 10 minute blocks to fill in with a purpose for that part of the day that can then be visualized by applying palettes that map keywords to colors. It is inspired by [Tim Urban's Wait But Why post, "100 Blocks a Day"](https://waitbutwhy.com/2016/10/100-blocks-day.html).

## Usage

There isn't a hosted version of Dias yet, but if you host one and navigate to it in your browser, this is what the various pages do.

### Top bar

The top bar shows a back button when not on the home page, the title of the app, a link to the list of palettes, and a palette selector.

The palette selector lets you choose the palette to apply to all views, colorizing the blocks based on their purposes.

### Home Page

The home page shows 10x10 grids of all the days that have data. The arrow on the left of each grid navigates to the overview screen. The arrow to the right of each grid navigates to the edit page for that day.

If no grid has been created for today, the "Start Today" link appears at the top of the page. Click it to make a new day and navigate to its edit page.

### Edit Page

The edit page shows the start time with the option to adjust it followed by a series of ten minute blocks, the corresponding start time of those blocks, and the purpose for that block of time. The time block representing now has a gray backgound.

Go ahead and fill in the purpose of the block with whatever text you like. I like to fill it with activities that took a majority of time during that block, but you may prefer to only mark blocks that were completely dedicated to a certain purpose. It's up to you!

### Overview Page

The overview page shows each day as a line of blocks, with days stacked vertically. This helps with identifying patterns over time.

### Palette Page

The palette page shows all existing palettes, lets you add new palettes, delete palettes, and links to the palette editor for each palette.

### Palette Editor

The palette editor lets you rename palettes and edit the swatches of the palette. There is a test time block to try the patterns on as well.

Swatches are composed of a [CSS background specification](https://developer.mozilla.org/en-US/docs/Web/CSS/background), a name, and a pattern.

The background spec can use all CSS color formats, including words like `red`, hex colors like `#ff0000`, and even [gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) like `linear-gradient(blue, pink)`. If you know the address of an image, you can use it via the `url("...")` syntax.

The patterns can be either a list of words separated by whitespace or a regular expression. Anything that doesn't match the regular expression syntax will be interpreted as a list of literal words to match. Regular expressions can be specified as [JavaScript regex literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Syntax), which are quoted by forward slashes and may have the `imsu` flags appended to it.

### API (WIP)

There is no API yet, but there are plans to support various shortcuts for adding values to the current day such that editing block purposes for common tasks can be accomplished by opening a bookmark.

## Developing

Dias is written in JavaScript using [Svelte](https://svelte.dev) 3. Make sure you have git and node.js 10+ installed, then

```sh
git clone https://github.com/cromo/dias.git
cd dias
npm install
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000) to view the app. Changes to the source code will automatically be recompiled and the browser will live reload to show the changes.

To make a production build, run

```sh
npm run build
```

The build artifacts will be in the `public` directory. Since Dias does not require any backend services, host these static files through your favorite web server and you have your own instance of Dias!