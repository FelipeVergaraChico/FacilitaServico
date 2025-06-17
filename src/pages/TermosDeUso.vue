<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h4 text-weight-bold q-mb-md">Termos de Uso</div>
        <q-separator inset class="q-mb-md" />

        <p class="text-subtitle1 text-weight-medium">Última atualização: 17 de Junho de 2025 </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h5 class="text-h6 q-mt-lg q-mb-sm">1. Lorem Ipsum Dolor Sit Amet</h5>
        <p>Consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
          <li>Duis aute irure dolor in reprehenderit.</li>
          <li>Voluptate velit esse cillum dolore eu fugiat.</li>
          <li>Excepteur sint occaecat cupidatat non proident.</li>
        </ul>

        <h5 class="text-h6 q-mt-lg q-mb-sm">2. Sed Do Eiusmod Tempor Incididunt</h5>
        <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h6>2.1. Ut Enim Ad Minim Veniam</h6>
        <ul>
          <li>Quis nostrud exercitation ullamco.</li>
          <li>Laboris nisi ut aliquip.</li>
        </ul>
        <h6>2.2. Commodo Consequat</h6>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <h5 class="text-h6 q-mt-lg q-mb-sm">3. Magna Aliqua Ut Enim</h5>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h5 class="text-h6 q-mt-lg q-mb-sm">4. Quis Nostrud Exercitation Ullamco</h5>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

        <h5 class="text-h6 q-mt-lg q-mb-sm">5. Labore Et Dolore Magna</h5>
        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

        <h5 class="text-h6 q-mt-lg q-mb-sm">6. Contato</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TermosDeUsoPage'
});
</script>

<style scoped>
.my-card {
  max-width: 900px;
  margin: 20px auto;
}
h5, h6 {
  color: #333;
}
</style>