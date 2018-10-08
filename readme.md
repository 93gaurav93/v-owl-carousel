
[![npm](https://img.shields.io/npm/dt/v-owl-carousel.svg)](https://www.npmjs.com/package/v-owl-carousel)

  ---

## Intro





- The [VueJS](https://vuejs.org/) wrapper for [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/).





- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) is touch enabled jQuery plugin that lets you create a beautiful responsive carousel slider.






## Installation





`npm i v-owl-carousel` or `yarn add v-owl-carousel`



## Usage


`import carousel from 'v-owl-carousel'`


```

<carousel>

  <img src="https://placeimg.com/200/200/any?1">

  <img src="https://placeimg.com/200/200/any?2">

  <img src="https://placeimg.com/200/200/any?3">

  <img src="https://placeimg.com/200/200/any?4">

</carousel>

```

Set options,

```

<carousel :autoplay="true" :nav="false">

//

//

</carousel>

```



## Available options





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





Type: `Boolean`




Default: `false`





Center item. Works well with even an odd number of items.





- #### nav





Type: `Boolean`




Default: `false`




Show next/prev buttons.





- #### autoplay





Type: `Boolean`




Default: `false`




Autoplay.





- #### autoplaySpeed





Type: `Number/Boolean`




Default: `false`




Autoplay speed.





- #### rewind





Type: `Boolean`




Default: `true`




Go backwards when the boundary has reached.




- #### mouseDrag




Type: `Boolean`




Default: `true`




Mouse drag enabled.




- #### touchDrag




Type: `Boolean`




Default: `true`




Touch drag enabled.




- #### pullDrag




Type: `Boolean`




Default: `true`





Stage pull to edge.




- #### freeDrag




Type: `Boolean`




Default: `false`




Item pull to edge.



- #### stagePadding

Type: `Number`

Default: `0`

Padding left and right on stage (can see neighbours).

- #### autoWidth

Type: `Boolean`

Default: `false`

Set non grid content. Try using width style on divs.

- #### autoHeight

Type: `Boolean`

Default: `false`

Set non grid content. Try using height style on divs.

- #### dots

Type: `Boolean`

Default: `true`

Show dots navigation.

- #### autoplayTimeout

Type: `Number`

Default: `5000`

Autoplay interval timeout.

- #### autoplayHoverPause

Type: `Boolean`

Default: `false`

Pause on mouse hover.

- #### responsive

Type: `Object`

Default: `{}`

Example : `:responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}"`

Object containing responsive options. Can be set to false to remove responsive capabilities.





## :collision: NPM





[![NPM](https://nodei.co/npm/v-owl-carousel.png)](https://www.npmjs.com/package/v-owl-carousel)
