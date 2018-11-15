<template>
    <div>
        <span :id="prevHandler">
            <slot name="prev"></slot>
        </span>
        <div :id="elementHandle" :class="['owl-carousel', 'owl-theme']">
            <slot></slot>
        </div>
        <span :id="nextHandler">
            <slot name="next"></slot>
        </span>
    </div>
</template>
<script>
    import 'owl.carousel/dist/assets/owl.carousel.css';
    import 'owl.carousel/dist/assets/owl.theme.default.css';
    import 'owl.carousel';

    export default {
      name: 'VOwlCarousel',
      data: function(){
        return {
            prevHandler: 'carousel_prev_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            elementHandle: 'carousel_' +  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            nextHandler: 'carousel_next_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          }
      },
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
        },
        stagePadding: {
            default: 0
        },
        autoWidth: {
            default: false
        },
        autoHeight: {
            default: false
        },
        dots: {
            default: true
        },
        autoplayTimeout: {
            default: 5000
        },
        autoplayHoverPause: {
            default: false
        },
        responsive: {
            default() {
                return {}
            }
        }
      },

      mounted : function() {
        const owl = $('#' + this.elementHandle).owlCarousel({
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
            stagePadding     : this.stagePadding,
            autoWidth     : this.autoWidth,
            autoHeight     : this.autoHeight,
            dots     : this.dots,
            autoplayTimeout     : this.autoplayTimeout,
            autoplayHoverPause     : this.autoplayHoverPause,
            responsive     : this.responsive
        });

        $('#' + this.prevHandler).click(function() {
          owl.trigger('prev.owl.carousel');
        });

        $('#' + this.nextHandler).click(function() {
          owl.trigger('next.owl.carousel');
        });
      }
  }
</script>
