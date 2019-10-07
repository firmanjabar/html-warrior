<template>
  <div>
    <carousel
      :per-page="1"
      :autoplay="true"
      :autoplayTimeout="5000"
      :loop="true"
      :paginationEnabled="false"
    >
      <slide v-for="(slide,index) in slides" :key="index">
        <div class="slider_bck" :style="{'background-image':`url(${slide.background})`}">
          <div class="gradient">
            <div class="container">
              <div class="content">
                <app-button type="link" linkTo="/adfadfa">Get Started</app-button>
                <div class="item">{{ slide.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import imageOne from "../../assets/images/featured/b.svg";
import imageTwo from "../../assets/images/featured/c.svg";
import imageThree from "../../assets/images/featured/e.svg";
import imageFour from "../../assets/images/featured/d.svg";

export default {
  data() {
    return {
      slides: [
        {
          text: "Discover Your Future By Your Passion",
          background: imageOne
        },
        {
          text: "Learn Programming Language for Building The Future",
          background: imageTwo
        },
        {
          text: "Make It Responsive!",
          background: imageThree
        },
        {
          text: "All the impossible is possible for those who believe!",
          background: imageFour
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
</style>