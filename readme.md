# Boilerplate

Kick-start your project with the combined knowledge of JS, SCSS and HTML5.


## Install

You need installed gulp globally. You can install using this cmd.

```
npm install --global gulp-cli
```

For installing packages you can using this cmd.

```
yarn install
```

or if you using npm

```
npm install
```


## Automatization

For a dev using.

```
gulp
```

or watch (with a gulp watch will run server with livereloading)

```
gulp watch
```

For a production using. (minify css, js, images, generate SVG sprite and zip them up)

```
gulp --production
```

or watch

```
gulp watch --production
```

### Individual tasks

#### Images
The images you must put in the assets/images folder. The images will be compressed and then copied to public folder.
If you put in the public folder you get the alert: Unexpected files in destination directory.

```
gulp images
```

#### SVG sprites
Generate SVG sprites to public folder
```
gulp svg
```

#### Styles

```
gulp styles
```

#### Scripts

```
gulp scripts
```

#### Zip

```
gulp zip
```