[![npm version](https://img.shields.io/npm/v/@novicell/message-bar)](https://www.npmjs.com/package/@novicell/message-bar)
![npm](https://img.shields.io/npm/dw/@novicell/message-bar)

# @Novicell/message-bar
Quickly drop in a status-bar in the top/bottom of a page if you have an important message to share.

## Demo
Link to codepen: https://codepen.io/Novicell/pen/ZEGoXqe

## Installation
There is multiple ways to install the component, you can either install it as a NPM package, or you can include it directly from a CDN.
 
### NPM
 ```sh
npm install @novicell/message-bar
 ```

Then you can include the package in your main.js or similar depending on your project accordingly

```javascript
import '@novicell/message-bar';
``` 
 
### CDN
 ```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/message-bar/dist/message-bar.js"></script>
```

or for a specific version

 ```html
<script src="https://cdn.jsdelivr.net/npm/@novicell/message-bar@0.0.3/dist/message-bar.js"></script>
```

## Usage
To use the application simply drop in the html tag

```html
<message-bar background-color="#FF8387"
             href="https://google.com"
             position="top"
             color="#fff"
             message="Breaking news: We are closed due to unforeseen circumstances"></message-bar>
```

### Options

The component has multiple properties that you can use to adjust the look and feel as well as the message of the message bar.

* `position`: - Decides if the bar should sit at the top or the bottom of the page (Default: "top")
* `background-color` - Decides the background color of the bar, can be hex, rgba, etc (Default: "#FF8387")
* `color` - Decides the color of text the bar, can be hex, rgba, etc (Default: "#FFF")
* `message` - Sets the text within the bar (Default: "This is your message.")
* `href` - Sets the link of the button (Default: "") (Button wont be shown if no link is provided)
* `button-text` - Sets the text within the button (Default: "Read more")
* `target` - Decides if the link should open in the current page or a new window etc. (Default: "_self")
