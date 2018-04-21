# :snowflake: What is this :grey_question:

 -   The  [VueJS](https://vuejs.org/) wrapper for [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/).

- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) is touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider.


# :snowflake: So how do I install it :grey_question:

 1. `npm i vue-owl-carousel` or `yarn add vue-owl-carousel`
 2. Inject [jQuery](https://jquery.com/) through [webpack](https://webpack.js.org/)
 ```
var webpack = require("webpack");

    ...

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
```
3. To compile templates on the client, add this to your `package.json`
```
// ...
"browser":  {
	"vue":  "vue/dist/vue.common.js"
},
 ```

# :snowflake: Okay. Now how to use :grey_question:

1. Register the component

	`Vue.component('carousel',  carousel)`

	#### or

	use it locally

	`import  carousel  from  'v-owl-carousel'`

2. Now use like this

	```
	<carousel>
		<div>
			<img src="https://placeimg.com/200/200/any?1">
		</div>
		<div>
			<img src="https://placeimg.com/200/200/any?2">
		</div>
		<div>
			<img src="https://placeimg.com/200/200/any?3">
		</div>
		<div>
			<img src="https://placeimg.com/200/200/any?4">
		</div>
	</carousel>
	```

# :heart_eyes_cat: Nice. How do I provide options :grey_question:

```
<carousel
	:autoplay="true"
	:nav="false">

	...
	...

</carousel>
```

# :dizzy_face: Ohh. What are the other options :grey_question:

Currently following options are available.
##### *(More to come)*

- ### items

	type : `number`
	default : `3`
	The number of items you want to see on the screen.

- ### margin

	type : `number`
	default : `0`
	Margin-right (px) on item.

- ### loop

	type : `boolean`
	default : `false`
	Infinity loop. Duplicate last and first items to get loop illusion.

- #### center

	Type:  `Boolean`
	Default:  `false`

	Center item. Works well with even an odd number of items.

- #### nav

	Type:  `Boolean`
	Default:  `false`

	Show next/prev buttons.

- #### autoplay

	Type:  `Boolean`
	Default:  `false`

	Autoplay.

- #### autoplaySpeed

	Type:  `Number/Boolean`
	Default:  `false`

	Autoplay speed.

- #### rewind

	Type:  `Boolean`
	Default:  `true`

	Go backwards when the boundary has reached.

# :fire: Note

This is my first NPM package and VueJS code. I've just began learning VueJS. So please contribute freely and help me to improve this component.

Thanks.

## :collision: NPM

[![NPM](https://nodei.co/npm/v-owl-carousel.png)](https://www.npmjs.com/package/v-owl-carousel)