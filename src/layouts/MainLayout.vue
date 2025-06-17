<template>
  <q-footer elevated class="bg-blue-grey-10 text-white q-pa-md">
    <div class="q-container">
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-auto text-center text-md-left">
          <div class="text-h6 q-mb-sm">Facilita Serviços</div>
          <p>&copy; 2025 Facilita Serviços. Todos os direitos reservados.</p>
         
        </div>

        <div class="col-12 col-md-auto text-center">
          <div class="text-subtitle1 text-weight-bold q-mb-sm">Informações Importantes</div>
          <q-list dense dark>
            <q-item clickable v-ripple :to="{ name: 'termosDeUso' }" class="text-white">
              <q-item-section>Termos de Uso</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'politicaDePrivacidade' }" class="text-white">
              <q-item-section>Política de Privacidade</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'perguntasFrequentes' }" class="text-white">
              <q-item-section>Perguntas Frequentes</q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-12 col-md-auto text-center text-md-right">
          <div class="text-subtitle1 text-weight-bold q-mb-sm">Redes Sociais</div>
          <q-btn flat round dense icon="fab fa-facebook" class="q-mr-sm" href="URL_FACEBOOK" target="_blank" />
          <q-btn flat round dense icon="fab fa-instagram" class="q-mr-sm" href="URL_INSTAGRAM" target="_blank" />
          <q-btn flat round dense icon="fab fa-twitter" href="URL_TWITTER" target="_blank" />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent'
});
</script>

<style lang="scss" scoped>
.q-footer {
  padding: 20px;
}
.q-container {
  max-width: 1200px;
  margin: 0 auto;
}
.q-btn {
  font-size: 1.2em;
}
</style>