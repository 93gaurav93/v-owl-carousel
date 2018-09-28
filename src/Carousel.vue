<template>
  <div>
    <div class="owl-carousel owl-theme">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

export default {
  name: 'carousel',

  props: {
    items : {
        default: 3
    },

    margin : {
        default: 0
    },

    loop : {
        default: false
    },

    center : {
        default: false
    },

    nav : {
        default: true
    },

    autoplay : {
        default: false
    },

    autoplaySpeed : {
        default: false
    },

    rewind : {
        default: true
    },

    mouseDrag : {
        default: true
    },

    touchDrag: {
        default: true
    },

    pullDrag: {
        default: true
    },

    freeDrag: {
        default: false
    }
  },
  
  mounted : function() {

    $('.owl-carousel').owlCarousel({
        items        : this.items,
        margin       : this.margin,
        loop         : this.loop,
        center       : this.center,
        nav          : this.nav,
        autoplay     : this.autoplay,
        autoplaySpeed: this.autoplaySpeed,
        rewind       : this.rewind,
        mouseDrag    : this.mouseDrag,
        touchDrag    : this.touchDrag,
        pullDrag     : this.pullDrag,
        freeDrag     : this.freeDrag,
    });

  }
}
</script>

<style>

</style>
