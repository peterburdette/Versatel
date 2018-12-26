# Versatel
Versatel is a smart carousel plugin that is powered by jQuery. This carousel has five transitions and can work with any kind of DOM element.

## Getting Started
### Installation
Add the latest Versatel files along with jQuery to the header of your site.

```html
<link type="text/css" rel="stylesheet" href="css/styles.css">

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/versatel.js"></script>
```

### Adding Content
Adding carousel content is very easy. All content must be included inside of a container called `#showcase` and each child must be given a class of `.slide`. This lets Versatel know where it needs to look for carousel content and what children need to be included in the slides.
```html
<div id="showcase">
	<img class="slide" src="https://picsum.photos/458/354/?image=806" />
	<img class="slide" src="https://picsum.photos/458/354/?image=106" />
	<img class="slide" src="https://picsum.photos/458/354/?image=206" />
</div>
```

### Applying Settings
There are a number of settings that can be toggled for Versatel. You can apply different settings by including the following code near the bottom of your page:
```html
userControls = {
	effectDuration : .5,
	effect : 'fade',
	cycleback : true
}
```
*A comprehensive list of available settings can be found in the settings section.

### Multipurpose
Versatel is unique in the fact that it can work with any kind of DOM element. You can define and pass the type of `content` through the `userControls` object to have different types of content show in the carousel.

## Settings
You can pass these options as key/value object to `controls` through the `userControls` object. It is also possible to modify defaults directly at Versatel JS file.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th width="100">Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>img</td>
    <td>Sets the content type of the carsousel. Accepts any DOM element (div, img, table, etc.)</td>
  </tr>
  <tr>
    <td>showControls</td>
    <td>Boolean</td>
    <td>true</td>
    <td>If set to false, the carousel's navigational controls will be hidden.</td>
  </tr>
  <tr>
    <td>effect</td>
    <td>String</td>
    <td>default</td>
    <td>Sets the slide transition effect. Supports `default`, `fade`, `slide`, `verticalSlide` and `slidingFade`.</td>
  </tr>
  <tr>
    <td>effectDuration</td>
    <td>Integer</td>
    <td>0.25</td>
    <td>Sets the animation speed in seconds (to be used in tandem with `effect`).</td>
  </tr>
  <tr>
    <td>prevText</td>
    <td>String</td>
    <td>&laquo; Previous</td>
    <td>Sets the text for the "Previous" button.</td>
  </tr>
  <tr>
    <td>nextText</td>
    <td>String</td>
    <td>Next &raquo;</td>
    <td>Sets the text for the "Next" button.</td>
  </tr>
  <tr>
    <td>containerWidth</td>
    <td>Integer</td>
    <td>auto</td>
    <td>Sets the width of the content container for non-image DOM elements.</td>
  </tr>
  <tr>
    <td>cycleback</td>
    <td>Boolean</td>
    <td>false</td>
    <td>If set to true, this setting will allow for the cycling back through content if the min or max index is reached.</td>
  </tr>
  <tr>
    <td>autoplay</td>
    <td>Boolean</td>
    <td>false</td>
    <td>If set to true, the carousel will start playing after the page loads.</td>
  </tr>
  <tr>
    <td>pauseTime</td>
    <td>Integer</td>
    <td>10</td>
    <td>Sets the pause time in between each slide (to be used in tandem with `autoplay`).</td>
  </tr>
</table>

## Browser Support

*Supported Browsers* : Chrome, Firefox, Safari, Opera, Edge, IE9+.

## License

The source code can be found on [github](https://github.com/peterburdette/Versatel) and is licensed under the [MIT](http://opensource.org/licenses/mit-license.php) license.

Developed by [Peter Burdette](https://www.linkedin.com/in/peter-burdette-76976552)
