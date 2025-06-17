<template>
  <q-page padding class="page-content">
    <!-- Seção “Quem somos?” -->
    <section class="section">
      <h1 class="title-1">Quem somos?</h1>
      <div class="text">
        Somos uma plataforma de serviços autônomos criada para ajudar profissionais que enfrentam dificuldades em divulgar seus serviços e alcançar clientes dependendo de métodos ineficazes e clientes que têm dificuldades em encontrar profissionais qualificados e confiáveis.
      </div>
    </section>

    <!-- Seção “Por que Trabalhar conosco?” -->
    <section class="section">
      <h2 class="title-2">Por que Trabalhar conosco?</h2>
      <div class="text">
        Trabalhar conosco é uma maneira eficiente que você, profissional autônomo, tem de divulgar seus serviços e alcançar clientes de maneira rápida e eficaz com o nosso site!
      </div>
    </section>

    <!-- Seção “Como funciona?” -->
    <section class="section">
      <h2 class="title-2">Como funciona?</h2>
      <div class="text">
        O usuário cria uma conta como profissional ou como cliente e realiza busca com os mais variados filtros, cadastra serviços, avalia outros serviços e interage com os clientes, tudo de maneira muito interativa, intuitiva e objetiva!
      </div>
    </section>

    <!-- Seção “Contato” -->
    <section class="section">
      <h2 class="title-2">Contato</h2>
      <div class="text">
        Você pode entrar em contato conosco pelos nossos e-mails de atendimento:
      </div>
      <ul class="contact-list">
        <li>Para usuário: contato@facilitaservicos.com</li>
        <li>Para empresas: corporativo@facilitaservicos.com</li>
        <li>Para profissionais: profissionais@facilitaservicos.com</li>
      </ul>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WorkWithUs'
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

/* Títulos */
.title-1 {
  font-size: 2.75rem;
  margin-bottom: 1.25rem;
}

.title-2 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

/* Texto principal */
.text {
  font-size: 1.25rem;
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
