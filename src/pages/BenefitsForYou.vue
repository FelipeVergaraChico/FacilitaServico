<template>
  <q-page padding class="page-content">
    <section class="section">
      <h1 class="title-1">
        Quais são os benefícios para os usuários do Facilita&nbsp;Serviços?
      </h1>
      <h2 class="title-2">Benefícios para você</h2>
      <div class="text">
        Profissionais de diversas áreas poderão divulgar seus serviços com muito mais agilidade, comodidade e praticidade — e você, cliente, encontra as melhores opções a serem contratadas e muito mais!
      </div>
      <ul class="tips-list">
        <li>
          Profissionais podem divulgar seus serviços com muito mais agilidade, comodidade e praticidade!
        </li>
        <li>
          Usuários encontram profissionais confiáveis com avaliações reais.
        </li>
        <li>
          Sistema de pagamento seguro e suporte 24/7.
        </li>
      </ul>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'BenefitsForYou'
}
</script>

<style scoped>
.page-content {
  max-width: 800px;
  margin: 0 auto;
}

.section {
  margin-bottom: 2rem;
}

.title-1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  white-space: nowrap;
}

.title-2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

/* Textos logo abaixo dos títulos: um pouco maiores */
.text {
  font-size: 1.125rem; /* antes não tinha size, agora aumentei para 1.125rem */
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
