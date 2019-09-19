# toasters

> Toast alerts (initially developed for Vue.js with a material-design style)

## Installation

`npm install --save  --production toasters`

## Usage

**HTML:**

```html
<div id="toasts-container" class="position-right position-bottom">
	<div id="toasts-content">
		<!-- toasts will be added or removed from here -->
	</div>
</div>
```

**JS:**

```js
import Toast from "toasters";

new Toast({
	content: "Hello World",
	persistant: true
});
```

**Preview:**

![preview of visible toast on webpage](https://i.imgur.com/7kIH6Oi.png)

## Potential future additions
- Design improvements
- Error handling (i.e. you haven't provided any content for the toast)
- Ability to parse markdown or html
- Ability to change to persistent

<!--See [example](https://github.com/jonathan-grah/vue-roaster/tree/master/example) folder for more details.-->

## Contributing

``` bash
# install dependencies
npm install

# watch files for changes with webpack
npm run dev

# build for production with minification
npm run build
```