<template>
  <li class="navbar-item dropdown">
    <div class="dropdown-title navbar-link-top" @click="dropdown">
      {{ title }} <span class="dropdown-icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    <ul :class="['dropdown-menu', { active: isOpen }]">
      <li v-for="(link, index) in links" :key="index" class="dropdown-list-items">
        <NuxtLink :to="link.to" class="navbar-link" @click="onSubMenuLinkClicked">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    links: Array,
    isOpen: Boolean,
    toggleDropdown: Function,
    toggleMenu: Function
  },
  methods: {
    dropdown() {
      this.toggleDropdown();
    },
    onSubMenuLinkClicked() {
      this.toggleMenu();
    }
  }
};
</script>

<style scoped>
@import "./DropdownMenu.css";
</style>
