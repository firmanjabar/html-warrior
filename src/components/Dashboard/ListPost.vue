<template>
  <div>
    <b-table-simple responsive striped table-variant="dark" hover>
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Title</b-th>
          <b-th>Description</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(post, index) in posts" :key="index">
          <b-th>{{post.title}}</b-th>
          <b-td>{{post.content | truncate(100, '...')}}</b-td>
          <b-td>
            <div @click="deleteHandler(post.id)" class="nav_link nav">
              <custom-icon name="trash-2" base-class="custom-icon"></custom-icon>
            </div>
            <div @click="editHandler(post)" class="nav_link nav">
              <custom-icon name="edit" base-class="custom-icon"></custom-icon>
            </div>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <div>
      <b-modal id="modal-1" title="Please Confirm" hide-footer>
        <div class="d-block text-center">
          <p class="my-4">Please confirm that you want to delete this post?</p>
        </div>
        <b-button block variant="danger" class="mt-3" @click="confirmDelete()">Yes I'm Sure</b-button>
        <b-button block variant="primary" class="mt-3" @click="cancelDelete()">Cancel</b-button>
      </b-modal>
    </div>

    <div>
      <b-modal id="modal-2" title="Edit Post" hide-footer>
        <div class="d-block">
          <form @submit.prevent="confirmUpdate">
            <div class="input_field" :class="{invalid: $v.formdata.title.$error}">
              <label>Title</label>
              <input
                v-text="formdata.title"
                type="text"
                @blur="$v.formdata.title.$touch()"
                v-model="formdata.title"
              />
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
            <p class="error_label" v-if="$v.formdata.num.$error">This input is required</p>-->
            <!-- <button class="button_default" type="submit">Add Post</button> -->
          </form>
        </div>
        <b-button
          block
          variant="primary"
          class="mt-3"
          @click="confirmUpdate()"
          type="submit"
        >Yes Update</b-button>
        <b-button block variant="info" class="mt-3" @click="cancelUpdate()">Cancel</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import customIcon from "vue-icon/lib/vue-feather.esm";
import { required, maxLength } from "vuelidate/lib/validators";

const config = {
  apiKey: "AIzaSyAbBlF17r37SBRZ28UAJVdHVptWsceP2BY",
  authDomain: "htmlwarrior-8d75e.firebaseapp.com",
  databaseURL: "https://htmlwarrior-8d75e.firebaseio.com",
  projectId: "htmlwarrior-8d75e",
  storageBucket: "htmlwarrior-8d75e.appspot.com",
  messagingSenderId: "560514804225",
  appId: "1:560514804225:web:2b68943e272594601d6e00"
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

export default {
  components: {
    customIcon
  },
  data() {
    return {
      baseClass: "v-icon",
      toDelete: "",
      toUpdate: "",
      formdata: {
        title: "",
        content: ""
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
      }
    }
  },
  computed: {
    posts() {
      let posts = this.$store.getters["admin/getAdminPost"];
      return posts;
    }
  },
  created() {
    this.$store.dispatch("admin/getAdminPost");
  },
  methods: {
    deleteHandler(id) {
      this.toDelete = id;
      this.$bvModal.show("modal-1");
    },
    confirmDelete() {
      this.$store.dispatch("admin/deletePost", this.toDelete);
      this.$bvModal.hide("modal-1");
    },
    cancelDelete() {
      this.toDelete = "";
      this.$bvModal.hide("modal-1");
    },
    editHandler(id) {
      this.toUpdate = id;
      // console.log(id);
      this.formdata.title = id.title;
      this.formdata.content = id.content;
      this.$bvModal.show("modal-2");
    },
    confirmUpdate() {
      // this.$store.dispatch("admin/updatePost", this.toUpdate);
      database
        .ref("post")
        .child(this.toUpdate.id)
        .update({
          title: this.formdata.title,
          content: this.formdata.content
        });
      this.$bvModal.hide("modal-2");
    },
    cancelUpdate() {
      this.toUpdate = "";
      this.$bvModal.hide("modal-2");
    }
  }
};
</script>


<style>
.v-icon,
.custom-icon {
  width: 24px;
}
</style>