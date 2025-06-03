<template>
  <q-page class="q-pa-md">
    <section class="hero-section text-center">
      <h1 class="main-title">Facilita Serviços</h1>
      <p class="sub-title">
        O maior site de profissionais autônomos do Brasil!
      </p>
    </section>

    <section class="image-section">
      <img src="../assets/profissional.png" alt="Profissionais" class="illustration" />
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero-section {
  margin-top: 60px;
  margin-bottom: 40px;
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  color: #222;
}

.sub-title {
  font-size: 1.3rem;
  color: #666;
  margin-top: 10px;
}

.image-section {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.illustration {
  max-width: 100%;
  height: auto;
}
</style>
