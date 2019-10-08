<template>
  <div class="container">
    <div class="signin_container">
      <h2>Sign In</h2>

      <form @submit.prevent="onSubmit">
        <div class="input_field" :class="{invalid: $v.formdata.email.$error}">
          <label>Email</label>
          <input type="email" @blur="$v.formdata.email.$touch()" v-model.trim="formdata.email" />
          <div v-if="$v.formdata.email.$error">
            <p class="error_label" v-if="!$v.formdata.email.required">This field is required</p>
            <p class="error_label" v-if="!$v.formdata.email.email">Please enter a valid email</p>
          </div>
        </div>
        <div class="input_field" :class="{invalid: $v.formdata.password.$error}">
          <label>Password</label>
          <input
            type="password"
            @blur="$v.formdata.password.$touch()"
            v-model.trim="formdata.password"
          />
          <div v-if="$v.formdata.password.$error">
            <p class="error_label" v-if="!$v.formdata.password.required">This field is required</p>
            <p class="error_label" v-if="!$v.formdata.password.minLength">At least 6 characters</p>
          </div>
        </div>
        <button class="btnfull" type="submit">Sign In</button>
        <p class="error_label" v-if="error">Something went wrong!</p>
        <p class="error_label" v-if="authFailed">Please check your email or password!</p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      error: false,
      formdata: {
        email: "firmanabduljabar@gmail.com",
        password: "skripsi"
      }
    };
  },
  computed: {
    authFailed() {
      return this.$store.state.admin.authFailed;
    }
  },
  destroyed() {
    this.$store.commit("admin/authFailed", "reset");
  },
  validations: {
    formdata: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        this.$store.dispatch("admin/signIn", this.formdata);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
    }
  }
};
</script>

<style>
.input_field.invalid input,
.input_field.invalid input {
  border: 2px solid red;
}
</style>