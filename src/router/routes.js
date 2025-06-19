const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'termos-de-uso', name: 'termosDeUso', component: () => import('pages/TermosDeUso.vue') },
      { path: 'politica-de-privacidade', name: 'politicaDePrivacidade', component: () => import('pages/PoliticaDePrivacidade.vue') },
      { path: 'perguntas-frequentes', name: 'perguntasFrequentes', component: () => import('pages/PerguntasFrequentes.vue') },
      // Novas rotas públicas
      { path: 'work-with-us', name: 'WorkWithUs', component: () => import('pages/WorkWithUs.vue') },
      { path: 'benefits-for-you', name: 'BenefitsForYou', component: () => import('pages/BenefitsForYou.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RegisterPage.vue') }
    ]
  },

  // ... resto das rotas sem alterações ...

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
