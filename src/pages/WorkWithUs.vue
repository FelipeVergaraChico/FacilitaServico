<template>
  <q-page padding class="page-content">
    <!-- Seção “Quem somos?” -->
    <section class="section">
      <h1 class="title-1">Quem somos?</h1>
      <div class="text">
        Somos uma plataforma de serviços autônomos criada para ajudar profissionais com dificuldades em encontrar profissionais qualificados e confiáveis.
      </div>
    </section>

    <!-- Seção “Por que Trabalhar conosco?” -->
    <section class="section">
      <h2 class="title-2">Por que Trabalhar conosco?</h2>
      <div class="text">
        Trabalhar conosco é uma maneira eficiente que você, profissional, tem de alcançar clientes de maneira rápida e eficaz com o nosso site!
      </div>
    </section>

    <!-- Lista de contatos -->
    <ul class="contact-list">
      <li><strong>E-mail:</strong> contato@facilitaservicos.com</li>
      <li><strong>Telefone:</strong> (11) 1234-5678</li>
      <li><strong>WhatsApp:</strong> (11) 91234-5678</li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'WorkWithUs'
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
}

.title-2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

/* Textos logo abaixo dos títulos: um pouco maiores */
.text {
  font-size: 1.125rem; /* aumentei de 1rem para 1.125rem */
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Lista de contatos */
.contact-list {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}

.contact-list li {
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}
</style>
