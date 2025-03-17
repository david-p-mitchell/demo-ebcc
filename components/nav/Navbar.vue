<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-link-home" @click="handleLinkClick">
        <div class="navbar-logo">Enon Baptist Church</div>
      </NuxtLink>
      <button class="hamburger" @click="toggleMenu">
        &#9776; <!-- Hamburger icon -->
      </button>

      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <ul class="navbar-list">
          <!-- <AboutSection
            :isOpen="activeDropdownIndex === 1"
            :toggleDropdown="toggleDropdown"
            :toggleMenu="toggleMenu"
          /> -->

          <DropdownMenu
            :dropdownComponent="aboutDropDownComponent"
            :isOpen="activeDropdownIndex === 1"
            :toggleDropdown="() => toggleDropdown(1)"
            :toggleMenu="toggleMenu"
          />

          <DropdownMenu
            :dropdownComponent="eventDropDownComponent"
            :isOpen="activeDropdownIndex === 2"
            :toggleDropdown="() => toggleDropdown(2)"
            :toggleMenu="toggleMenu"
          />

          <li class="navbar-item-top">
            <NuxtLink to="/sermons" class="navbar-link-top" @click="handleLinkClick">Sermons</NuxtLink>
          </li>
          
          <DropdownMenu
            :dropdownComponent="christianDropDownComponent"
            :isOpen="activeDropdownIndex === 3"
            :toggleDropdown="() => toggleDropdown(3)"
            :toggleMenu="toggleMenu"
          />

          <DropdownMenu
            :dropdownComponent="testimonyDropDownComponent"
            :isOpen="activeDropdownIndex === 4"
            :toggleDropdown="() => toggleDropdown(4)"
            :toggleMenu="toggleMenu"
          />

          <li class="navbar-item-top">
            <NuxtLink to="/contact/contact-us" class="navbar-link-top" @click="handleLinkClick">Contact Us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DropdownMenu from '@/components/nav/DropdownMenu.vue';
import { DropDownItemComponent } from '~/types/DropDownItemComponent';
import { Link } from '~/types/Link';

const isMenuOpen = ref(false);
const activeDropdownIndex = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  activeDropdownIndex.value = null; // Close all dropdowns when the menu is toggled
};

const toggleDropdown = (index) => {
  activeDropdownIndex.value = activeDropdownIndex.value === index ? null : index;
};

const handleLinkClick = () => {
  isMenuOpen.value = false;
  activeDropdownIndex.value = null;
};

const aboutDropDownComponent = new DropDownItemComponent('About Us',[
  new Link("/about/what-we-believe","What We Believe"),
  new Link("/about/church-history", "Church History" ),
  new Link("/about/pastors-message", "Pastor's Message" ),
],null);

const eventDropDownComponent= new DropDownItemComponent('What\'s on',
[
  { to: "/whats-on/sunday-services", label: "Sunday Services" },
  { to: "/whats-on/bible-study", label: "Bible Study" },
  { to: "/whats-on/womens-meetings", label: "Women's Meetings" },
  { to: "/whats-on/online-prayer-meeting", label: "Online Prayer Meeting" },
  { to: "/whats-on/mens-meetings", label: "Men's Meetings" },
  { to: "/whats-on/youth", label: "Discoverers" },
  { to: "/whats-on/children", label: "Children" },
],"/whats-on");

const christianDropDownComponent= new DropDownItemComponent('What Is A Christian?',
[
  { to: "/what-is-a-christian/becoming-a-christian", label: "Becoming a Christian" },
  { to: "/what-is-a-christian/stop-trying-and-start-trusting", label: "Stop Trying and Start Trusting" }
],"/what-is-a-christian/becoming-a-christian");

const testimonyDropDownComponent = new DropDownItemComponent('Testimonies',
[{ to: "/testimonies/", label: "Graham Trice" }],"/testimonies/");


const handleClickOutside = (event) => {
  const menuElement = document.querySelector('.navbar-menu');
  const hamburgerButton = document.querySelector('.hamburger');

  if (!menuElement.contains(event.target) && !hamburgerButton.contains(event.target)) {
    activeDropdownIndex.value = null;
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
@import "./Navbar.css";
</style>
