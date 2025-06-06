<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <LoginHeaderComponent />
    </q-header>
    <q-page-container>
      <router-view />
      <FooterComponent />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import FooterComponent from '../components/FooterComponent.vue'
import LoginHeaderComponent from 'src/components/LoginHeaderComponent.vue'


export default defineComponent({
  name: 'LoginLayout',

  components: {
    LoginHeaderComponent,
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
