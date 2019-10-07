<template>
  <footer>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="4" class="mt-3">
          <h6 class="logo">Html Warriors</h6>
          <p class="caption">Firman Abdul Jabar &copy; 2019</p>
        </b-col>

        <b-col cols="12" md="4" class="mt-2">
          <div class="m-1">
            <custom-icon name="map-pin" base-class="custom-icon"></custom-icon>
            <span class="detailSpan">Sei. Ulin, Banjarbaru</span>
          </div>
          <div class="m-1">
            <custom-icon name="phone" base-class="custom-icon"></custom-icon>
            <span class="detailSpan">
              <strong>+62</strong> 899-2050-368
            </span>
          </div>
          <div class="m-1">
            <custom-icon name="mail" base-class="custom-icon"></custom-icon>
            <span class="detailSpan">firmanabduljabar@gmail.com</span>
          </div>
        </b-col>

        <b-col cols="12" md="4" class="mb-2 mt-2 footerRight">
          <h6 class="addMt">About the Author</h6>
          <p class="detailAuthor">
            My name is Firman Abdul Jabar, I'm a student of Computer Science Education at
            <a
              target="_blank"
              href="https://ulm.ac.id"
            >Lambung Mangkurat University</a>
          </p>
          <div>
            <b-button
              squared
              size="sm"
              class="mr-1"
              variant="dark"
              href="https://facebook.com/firmanabduljabar"
              target="_blank"
            >
              <custom-icon name="facebook" base-class="custom-icon"></custom-icon>
            </b-button>
            <b-button
              squared
              size="sm"
              class="m-1"
              variant="dark"
              href="https://twitter.com/firmanjabar"
              target="_blank"
            >
              <custom-icon name="twitter" base-class="custom-icon"></custom-icon>
            </b-button>
            <b-button
              squared
              size="sm"
              class="m-1"
              variant="dark"
              href="https://github.com/firmanjabar"
              target="_blank"
            >
              <custom-icon name="github" base-class="custom-icon"></custom-icon>
            </b-button>
            <b-button
              squared
              size="sm"
              class="m-1"
              variant="dark"
              href="https://www.linkedin.com/in/firmanabduljabar/"
              target="_blank"
            >
              <custom-icon name="linkedin" base-class="custom-icon"></custom-icon>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import customIcon from "vue-icon/lib/vue-feather.esm";
export default {
  components: {
    customIcon
  },
  data: function() {
    return {
      baseClass: "v-icon"
    };
  }
};
</script>

<style>
.v-icon,
.custom-icon {
  width: 18px;
}
</style>