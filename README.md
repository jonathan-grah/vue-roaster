# toasters

> Toast alerts/notifications (initially developed for Vue.js with a material-design style)

## Installation

`npm install --save --production toasters`

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

new Toast(options);

// example
new Toast({
  content: "Hello World",
  persistent: true
});
```

**Preview:**

![preview of visible toast on webpage](https://i.imgur.com/UvXaEkD.png)

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| **`content`** | String | `""` | The notification message. |
| **`persistent`** | Boolean | `false` | Whether or not the toast is persistent. |
| **`interactable`** | Boolean | `true` | If the toast can be manually closed or not. |
| **`timeout`** | Number | `6000` | How long till the toast disappears. *Note: will be ignored if the toast is persistent.* |

## Potential future additions

- Error handling (i.e. you haven't provided any content for the toast)
- Ability to parse markdown or html

<!--See [example](https://github.com/jonathan-grah/vue-roaster/tree/master/example) folder for more details.-->

## Contributing

```bash
# install dependencies
npm install

# watch files for changes with webpack
npm run dev

# build for production with minification
npm run build
```
