<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <div
      v-if="device==='mobile'&&sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app />
    </div>
  </div>
</template>

<script>
// import navbar component
import {
  navbar,
  sidebar,
  app,
} from './components';

export default {
  name: 'Layout',
  components: {
    navbar,
    sidebar,
    app,
  },
  computed: {
    sidebar() {
      // return this.$store.state.app.sidebar
      return {
        opened: true,
        withoutAnimation: true,
      };
    },
    device() {
      // return this.$store.state.app.device
      return 'pc';
    },
    fixedHeader() {
      // return this.$store.state.settings.fixedHeader
      return true;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      };
    },
  },
};

</script>
