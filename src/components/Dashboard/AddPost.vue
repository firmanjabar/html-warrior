/* eslint-disable */
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
      <!-- <div class="input_field" :class="{invalid: $v.formdata.num.$error}">
        <label>Number List</label>
        <input type="text" @blur="$v.formdata.num.$touch()" v-model="formdata.num" />
      </div>
      <p class="error_label" v-if="$v.formdata.num.$error">This input is required</p> -->
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
    <div v-if="addpost" class="post_succesfull">Your post was posted</div>
  </div>
</template>

<script>
/* eslint-disable */
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
            },
            image: {
              dropdown: ["insertImage", "upload"],
              ico: "insertImage"
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
            ["image"],
            ["undo", "redo"],
            ["foreColor", "backColor"],
            ["highlight"],
            ["emoji"],
            ["giphy"],
            ["preformatted"],
            ["viewHTML"],
            ["fullscreen"]
          ],
          plugins: {
            giphy: {
              apiKey: "FKtEG2nROoOCxIruF7KYPNhwCW31kcbn"
            },
            upload: {
              serverPath: "https://api.imgur.com/3/image",
              fileFieldName: "image",
              headers: {
                Authorization: "Client-ID bc0e0605bb835c1"
              },
              urlPropertyName: "data.link",
              imageWidthModalEdit: true
            },
            resizimg: {
              minSize: 64,
              step: 16
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
  computed: {
    addpost() {
      let status = this.$store.getters["admin/addPostStatus"];
      if (status) {
        this.clearPost();
      }
      return status;
    }
  },
  methods: {
    clearPost() {
      this.formdata = {
        title: "",
        content: "",
        num: ""
      };
      this.$v.$reset();
    },
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
      this.$store.dispatch("admin/addPost", this.formdata);
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