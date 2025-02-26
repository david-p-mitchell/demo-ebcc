
<template>
  <DropdownMenu
    :title="'About Us'"
    :links="aboutLinks"
    :isOpen="isOpen"
    :toggleDropdown="toggleDropdown"
    :toggleMenu="toggleMenu"
  />
</template>

<script>
import DropdownMenu from '../DropdownMenu.vue';

export default {
  components: {
    DropdownMenu,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    toggleDropdown: {
      type: Function,
      required: true,
    },
    toggleMenu: {
      type: Function,
      required: true,
    },
  },
  data(){
    return {
      aboutLinks: [
        { to: "/about/what-we-believe", label: "What We Believe" },
        { to: "/about/church-history", label: "Church History" },
        { to: "/about/pastors-message", label: "Pastor's Message" },
      ]
    };
  }
};
</script>


<!-- <template>
  <div>
    <DropdownMenu
      title="About Us"
      :links="aboutLinks"
      :isOpen="isOpen"
      :toggleDropdown="toggleDropdown"
      :toggleMenu="toggleMenu"
    />
  </div>
</template>

<script>
import DropdownMenu from '../DropdownMenu.vue';

export default {
  components:{
    DropdownMenu,    
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    toggleDropdown: Function,
    toggleMenu: Function
  },
  data() {
    return {
      aboutLinks: [
        { to: "/about/what-we-believe", label: "What We Believe" },
        { to: "/about/church-history", label: "Church History" },
        { to: "/about/pastors-message", label: "Pastor's Message" },
      ]
    };
  },
};
</script> -->
