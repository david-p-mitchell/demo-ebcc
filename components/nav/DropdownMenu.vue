<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <li class="navbar-item dropdown" @mouseenter="dropdown" @mouseleave="dropdown">
    <div class="dropdown-item " >
      <a v-if="dropdownComponent.hasSectionLink()" :href="dropdownComponent.sectionLink">
        <p class="navbar-top">{{ dropdownComponent.title }}</p>
      </a>
      <p v-else class="navbar-top">{{ dropdownComponent.title }}</p>
      <i @click="dropdown"  class="material-icons">keyboard_arrow_down</i>
    </div>
    <ul :class="['dropdown-menu', { active: isOpen }]">
      <li v-for="(link, index) in dropdownComponent.getLinks()" :key="index" class="dropdown-list-items">
        <NuxtLink :to="link.to" class="navbar-link" @click="onSubMenuLinkClicked">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script>
import { DropDownItemComponent } from '@/types/DropDownItemComponent.ts';

export default {
  props: {
    dropdownComponent: { type: DropDownItemComponent, required: true},
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
