<template>
  <header>
    <div class="header_container">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <div class="container">
          <b-navbar-brand href="#" class="logo">Html Warriors</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <img :src="require('../../assets/images/login.png')" />
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </header>
</template>