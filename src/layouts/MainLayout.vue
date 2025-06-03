<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <HeaderComponent />
    </q-header>

    <q-page-container>
      <router-view />
      <FooterComponent />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'src/components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent
  },

  data() {
    return {
      leftDrawerOpen: false
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
</script>
