<template>
  <q-page padding class="page-content">
    <section class="section">
      <h1 class="title-1">
        Quais são os benefícios para os usuários do Facilita Serviços?
      </h1>
      <h2 class="title-2">Benefícios para você</h2>
      <div class="text">
        Profissionais de diversas áreas poderão divulgar seus serviços e alcançar novos clientes através do método de divulgação de serviços inovador que o nosso site possibilita, centralizando as informações. Isso possibilita que o usuário busque serviços, filtre preços, avalie serviços e encontre as melhores opções a serem contratadas e muito mais!
      </div>
      <ul class="tips-list">
        <li>
          Profissionais podem divulgar seus serviços com muito mais agilidade, comodidade e praticidade!
        </li>
      </ul>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BenefitsForYou'
})
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

/* Mesmas classes usadas em WorkWithUs.vue */
.title-1 {
  font-size: 2.75rem;
  margin-bottom: 1.25rem;
}
.title-2 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}
.text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Lista de “dicas”/benefícios */
.tips-list {
  list-style-type: disc;
  padding-left: 1.25rem;
  font-size: 1.125rem;
}
.tips-list li {
  margin-bottom: 0.75rem;
}
</style>
