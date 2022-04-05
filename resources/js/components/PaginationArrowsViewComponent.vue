<template>
    <ul class="pagination" :class="p_classes">
        <li class="page-item prev" v-bind:class="{'disabled':disable_prev}">
            <a @click="onPrev()" class="page-link active-link" style="border: none;padding: 0;padding-top: 5px;padding-right: 5px;">
                <i class="fa fa-chevron-left"></i>
            </a>
        </li>
        <li>
          Page <strong :style="{'color': color}">{{pagination.current_page}}</strong> of {{numeral(pagination.pages).format('(0,0)')}}
        </li>
        <li class="page-item next" v-bind:class="{'disabled':disable_next}">
            <a @click="onNext()" class="page-link active-link" style="border: none;padding: 0;padding-top: 5px;padding-left: 5px;">
                <i class="fa fa-chevron-right"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    },
    p_classes: {
      type: String,
      default: "float-right"
    },
    color: {
      type: String,
      default: "#000"
    },
  },
  data() {
    return {
      disable_prev: false,
      disable_next: false,
      numeral: numeral
    };
  },
  watch:{
    pagination(pagination){
      this.init(pagination);
    }
  },
  methods: {
    init(pagination) {
      this.disable_prev = false;
      this.disable_next = false;
      if (pagination.current_page === 1) {
        this.disable_prev = true;
      }
      if (
        pagination.pages === pagination.current_page ||
        pagination.pages === 0
      ) {
        this.disable_next = true;
      }
    },
    onNext() {
      this.$emit("onNext", "next");
    },
    onPrev() {
      this.$emit("onPrev", "prev");
    }
  },
  mounted() {
    this.init(this.pagination);
  }
};
</script>

<style>
.active-link:hover{
    background-color: transparent!important;
    color: #49a4f3!important;
}

.page-item.disabled .active-link{
  background-color: transparent!important;
  color: #ccc!important;
}

</style>