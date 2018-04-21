import "owl.carousel/dist/assets/owl.carousel.min.css"
import "./assets/css/owl.theme.default.min.css"
import 'owl.carousel'
import Vue from 'vue'

export default {

    name: 'v-owl-carousel',

    template: 
    `
        <div class="owl-carousel owl-theme">
            <slot></slot>
        </div>
    `,

    props : {

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
        });

    }
}