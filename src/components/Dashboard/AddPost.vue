<template>
  <div class="dashboard_form">
    <form @submit.prevent="submitHandler">
      <div class="input_field" :class="{invalid: $v.formdata.title.$error}">
        <label>Title</label>
        <input type="text" @blur="$v.formdata.title.$touch()" v-model="formdata.title" />
      </div>
      <p class="error_label" v-if="$v.formdata.title.$error">This input is required</p>

      <div class="trumbowyg">
        <trumbowyg
          v-model="formdata.content"
          :config="config.advanced"
          class="form-control"
          name="content"
        ></trumbowyg>
      </div>
      <div class="input_field" :class="{invalid: $v.formdata.num.$error}">
        <label>Number List</label>
        <input type="text" @blur="$v.formdata.num.$touch()" v-model="formdata.num" />
      </div>
      <p class="error_label" v-if="$v.formdata.num.$error">This input is required</p>
      <button class="button_default" type="submit">Add Post</button>
    </form>

    <div>
      <b-modal id="modal-1" title="Content are empty!" hide-footer>
        <div class="d-block text-center">
          <p class="my-4">Are you sure want to continue?</p>
        </div>
        <b-button block variant="danger" class="mt-3" @click="confirmPost()">Yes I'm Sure</b-button>
        <b-button block variant="primary" class="mt-3" @click="$bvModal.hide('modal-1')">Cancel</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formdata: {
        title: "",
        content: "",
        num: ""
      },
      config: {
        advanced: {
          autogrow: true,
          changeActiveDropdownIcon: true,
          removeformatPasted: true,
          imageWidthModalEdit: true,
          urlProtocol: true,
          btnsDef: {
            align: {
              dropdown: [
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "justifyFull"
              ],
              ico: "justifyLeft"
            }
          },
          btnsAdd: ["foreColor", "backColor"],
          btns: [
            ["strong", "em", "del"],
            ["superscript", "subscript"],
            ["align"],
            ["lineheight"],
            ["unorderedList", "orderedList"],
            ["horizontalRule"],
            ["formatting"],
            ["fontfamily"],
            ["removeformat"],
            ["link"],
            ["insertImage"],
            ["undo", "redo"],
            ["foreColor", "backColor"],
            ["emoji"],
            ["giphy"],
            ["preformatted"],
            ["viewHTML"],
            ["fullscreen"]
          ],
          plugins: {
            giphy: {
              apiKey: "FKtEG2nROoOCxIruF7KYPNhwCW31kcbn"
            }
          }
        }
      }
    };
  },
  validations: {
    formdata: {
      title: {
        required
      },
      num: {
        required
      }
    }
  },
  methods: {
    submitHandler() {
      if (!this.$v.$invalid) {
        if (this.formdata.content === "") {
          this.$bvModal.show("modal-1");
        } else {
          this.addPost();
        }
      } else {
        alert("something is wrong");
      }
    },
    confirmPost() {
      this.$bvModal.hide("modal-1");
      this.addPost();
    },
    addPost() {
      console.log("add the post");
    }
  }
};
</script>

<style scoped>
.input_field.invalid input,
.input_field.invalid input {
  border: 2px solid red;
}
</style>