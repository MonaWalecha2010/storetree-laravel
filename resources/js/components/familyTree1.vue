    <template>
  <div>
    <!-- {{ uniqueNodes }} -->
    <div
      class="modal fade modal-vcenter modal_small"
      id="retake-video"
      ref="retakeVideo"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-12">
                <div class="modal_tittle">
                  <h2>Are You Sure You Want to Re-Record This Question ?</h2>
                </div>
              </div>
            </div>

            <div class="row padding_gap_3">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="modal_confirm_btn">
                  <a
                    href="#"
                    @click.prevent="retakeVideo()"
                    data-dismiss="modal"
                    >Yes</a
                  >
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="modal_cancel_btn">
                  <a href="#" data-dismiss="modal" aria-label="Close">Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{trees}}</pre> -->
    <div id="tree" ref="tree"></div>
  </div>
</template>

        <script>
import FamilyTree from "@balkangraph/familytree.js";
import Swal from "sweetalert2";
import { toBinaryString } from "@videojs/vhs-utils/cjs/byte-helpers";
FamilyTree.EDITFORM_CLOSE_BTN =
  '<svg data-edit-from-close class="bft-edit-form-close"><path style="fill:#ffffff;" d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"></path></svg>';

export default {
  props: ["datas"],
  name: "tree",
  data() {
    return {
      trees: [],
      nodes: [
    // { id: 2, pids: [3], gender: 'female', relation: "grandmother" },
    // { id: 3, pids: [2], gender: 'male', relation: "grandfather" },
    // { id: 4, pids: [5], gender: 'male', fid: 3, mid: 2, relation: "father" },
    // { id: 5, pids: [4], gender: 'female', fid: 21, mid: 22, relation: "mother" },
    // { id: 6, pids: [10, 11, 12, 13], gender: 'male', fid: 4, mid: 5, relation: "son" },
    // { id: 7, gender: 'female', fid: 4, mid: 5, relation: "daughter" },
    // { id: 8, gender: 'male', fid: 4, mid: 5, relation: "son" },
    // { id: 9, gender: 'male', fid: 4, mid: 5, relation: "son" },
    // { id: 10, pids: [6], gender: 'female', relation: "wife" },
    // { id: 11, pids: [6], gender: 'female', relation: "wife" },
    // { id: 12, pids: [6], gender: 'female', relation: "wife" },
    // { id: 13, pids: [6], gender: 'female', relation: "wife" },
    // { id: 14, gender: 'female', fid: 6, mid: 13, relation: "child" },
    // { id: 15, gender: 'male', fid: 6, mid: 13, relation: "child" },
    // { id: 16, gender: 'female', fid: 6, mid: 13, relation: "child" },
    // { id: 17, gender: 'male', fid: 6, mid: 13, relation: "child" },
    // { id: 18, gender: 'female', fid: 6, mid: 12, relation: "child" },
    // { id: 19, pids: [20], gender: 'male', name: "grand grandfather" },
    // { id: 20, pids: [19], gender: 'female', name: "grand grandmother" },
    // { id: 21, pids: [22], gender: 'male', fid: 19, mid: 20, name: "grandfather" },
    // { id: 22, pids: [21], gender: 'female', name: "grandmother" }
          { "id": 1, "name": "Md Makinul Hasan Khan", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "pids": [ 12 ], "fid": 2 },
          { "id": 5, "name": "Labeed", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "fid": 1, "mid": 12 }, 
          { "id": 23, "name": "Laibah", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "pids": [ 21 ], "fid": 1 }, 
          { "id": 59, "name": "Mother", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "pids": [ 58 ], "fid": 1, "mid": 12 }, 
        //   { "id": 1, "name": "Md Makinul Hasan Khan", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "pids": [ 12 ], "fid": 2 }, 
          { "id": 12, "name": "Umma", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "pids": [ 1 ] }, 
          { "id": 25, "name": "Yeasmin Akter", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "fid": 2 }, 
          { "id": 27, "name": "Makinul", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "fid": 2 }, 
          { "id": 2, "name": "Asad Ullah", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "pids": [ 64 ], "fid": 17 }, 
          { "id": 17, "name": "Nurul Hossen", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png" }, 
        //   { "id": 12, "name": "Umma", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "pids": [ 1 ] } 

        // { id: 8, pids: [9], mid: 6, fid: 3, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg"  },
        // { id: 9, pids: [8], mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
      ],
    };
  },

  methods: {
    callHandler: function (nodeId) {
      window.open("/family/member/" + nodeId);
    },
    mytree: function (domEl, x) {
      this.family = new FamilyTree(domEl, {
        nodes: x,
        nodeBinding: {
          field_0: "name",
          img_0: "img",
          field_1: "title",
        },
        // mode: "dark",
        enableSearch: false,
        // enableEditForm: false,
        // nodeTreeMenu: true,

        // template: 'john',

        // nodeContextMenu  :{

        // },
        // nodeTreeMenu:{

        // },
        // menu:{

        // },
        // nodeMouseClick:FamilyTree.action.nodeMenu,
        // scaleInitial:FamilyTree.match.boundary,
        // showXScroll: FamilyTree.scroll.visible,
        // showYScroll: FamilyTree.scroll.visible,
        mouseScrool: FamilyTree.action.none,
        // mouseScroolBehaviour: FamilyTree.action.none,
        mouseDragBehaviour: FamilyTree.action.none,
        // scaleInitial:FamilyTree.match.width,
        // zoom:false,
        // nodeMenuUI:,
        // nodeMenu: {
        //     onClick: this.callHandler
        // },
        nodeMenu: {
          call: {
            icon: FamilyTree.icon.user(18, 18, "#039BE5"),
            text: "View Profile",
            onClick: this.callHandler,
          },
        },

        editForm: {
          buttons: {
            user: {
              icon: FamilyTree.icon.user(18, 18, "#fff"),
              text: "Profile View",
            },
            deleteMember: {
              icon: FamilyTree.icon.remove(18, 18, "#fff"),
              text: "Delete Memeber",
            },
            edit: null,
            pdf: null,
            share: null,
          },
        },
      });
      // this.family.on('init', function (sender) { sender.editUI.show(1, true); });
      this.family.editUI.on("button-click", function (sender, args) {
        if (args.name == "user") {
          window.open("/family/member/" + args.nodeId);
        }
        if (args.name == "deleteMember") {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axios({
                method: "get",
                url: "delete-member/" + args.nodeId,
                headers: {
                  "Content-Type": "multipart/form-data",
                  "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
              })
                .then((res) => {
                  if (res.status === 200) {
                    if (res.data.success) {
                      Swal.fire("Deleted!", res.data.msg, "success");
                    } else {
                      Swal.fire(res.data.msg);
                    }
                    window.location.reload();
                  } else {
                    Swal.fire(
                      "Failed to delete data you can delete you patner, father and mother now."
                    );

                    window.location.reload();
                  }
                })
                .catch((error) => {
                  alert(
                    "Failed to delete data you can delete you patner, father and mother now."
                  );
                });
            }
          });
        }
      });
    },
    reArrangeData() {
      // console.dir(this.datas);
      // this.datas.forEach(dataInfo=>{
      //     // console.dir(dataInfo);
      // })
    },
  },

  mounted() {
    // console.dir(this.trees);
    this.trees = JSON.parse(this.datas);
    // this.reArrangeData();
    // console.log(this.trees)
    // console.dir(this.trees);
    // this.trees=Object.entries(this.trees);
    // this.mytree(this.$refs.tree, this.nodes);
    const uniqueNodes = [...new Map(this.trees.map((m) => [m.id, m])).values()];
    this.mytree(this.$refs.tree, uniqueNodes);
  },
};
</script>

<style scoped>
.bft-search {
  display: none !important;
}
.bft-edit-form-close {
  position: absolute;
  right: 14px;
  top: 0px !important;
  width: 34px;
  height: 34px;
  cursor: pointer;
}
.family_tree_wrapper {
  border: 2px solid brown;
}
</style>
