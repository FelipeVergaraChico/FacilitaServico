<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="social-icons">
        <a href="#"><img src="../assets/instagram-svgrepo-com.svg" alt="Instagram" /></a>
        <a href="#"><img src="../assets/twitter-svgrepo-com.svg" alt="X" /></a>
        <a href="#"><img src="../assets/youtube-168-svgrepo-com.svg" alt="YouTube" /></a>
        <a href="#"><img src="../assets/linkedin-svgrepo-com.svg" alt="LinkedIn" /></a>
      </div>
    </div>

    <div class="footer-content">
      <div class="footer-column">
        <h3>Para Autônomos</h3>
        <p><a href="#">Trabalhe conosco</a></p>
        <p><a href="#">Benefícios para você</a></p>
        <p><a href="mailto:profissionais@facilitaservicos.com">profissionais@facilitaservicos.com</a></p>
      </div>

      <div class="footer-column">
        <h3>Ajuda</h3>
        <p><a href="#">Perguntas frequentes</a></p>
        <p><a href="#">Política de privacidade</a></p>
        <p><a href="#">Termos de uso</a></p>
      </div>

      <div class="footer-column">
        <h3>Atendimento</h3>
        <p><strong>Usuário:</strong> <a href="mailto:contato@facilitaservicos.com">contato@facilitaservicos.com</a></p>
        <p><strong>Empresas:</strong> <a href="mailto:corporativo@facilitaservicos.com">corporativo@facilitaservicos.com</a></p>
        <p><strong>Profissionais:</strong> <a href="mailto:profissionais@facilitaservicos.com">profissionais@facilitaservicos.com</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.footer-top {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.social-icons a {
  margin: 0 8px;
}

.social-icons img {
  width: 24px;
  height: 24px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;
}

.footer-column {
  margin: 10px;
  max-width: 250px;
}

.footer-column h3 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.footer-column p {
  margin: 5px 0;
}

.footer-column a {
  color: #555;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}
</style>
