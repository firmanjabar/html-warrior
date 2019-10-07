<template>
  <div class="block">
    <div class="container">
      <div class="home_container">
        <b-card
          :img-src="require(`../../assets/images/featured/document.svg`)"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 md-card"
        >
          <app-button :addClass="['medium_link medium']" type="link" linkTo="/adfadfa">KI / KD</app-button>
        </b-card>
        <b-card
          :img-src="require(`../../assets/images/featured/question.svg`)"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 md-card"
        >
          <app-button :addClass="['medium_link medium']" type="link" linkTo="/adfadfa">HELP</app-button>
        </b-card>
        <b-card
          :img-src="require(`../../assets/images/featured/information.svg`)"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 md-card"
        >
          <app-button :addClass="['medium_link medium']" type="link" linkTo="/adfadfa">ABOUT</app-button>
        </b-card>
      </div>
      <b-row>
        <b-col class="text-center mt-3 mb-1">
          <app-button type="link" linkTo="/adfadfa">Get Started</app-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center mb-1">
          <app-button :addClass="['small_link small']" type="link" linkTo="/adfadfa">Glosarium</app-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>