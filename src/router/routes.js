const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'termos-de-uso', name: 'termosDeUso', component: () => import('pages/TermosDeUso.vue') },
      { path: 'politica-de-privacidade', name: 'politicaDePrivacidade', component: () => import('pages/PoliticaDePrivacidade.vue') },
      { path: 'perguntas-frequentes', name: 'perguntasFrequentes', component: () => import('pages/PerguntasFrequentes.vue') },
      { path: 'work-with-us', name: 'WorkWithUs', component: () => import('pages/WorkWithUs.vue') },
      { path: 'benefits-for-you', name: 'BenefitsForYou', component: () => import('pages/BenefitsForYou.vue') }
    ]
  },

  {
    path: '/terms-of-use',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'termsOfUse',
        component: () => import('pages/TermosDeUso.vue')
      }
    ]
  },

  {
    path: '/privacy-policy',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'privacyPolicy',
        component: () => import('pages/PoliticaDePrivacidade.vue')
      }
    ]
  },

  {
    path: '/faq',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'faq',
        component: () => import('pages/PerguntasFrequentes.vue')
      }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/LoginPage.vue')
      }
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RegisterPage.vue') }
    ]
  },

  {
    path: '/jobs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/JobsPage.vue') }
    ]
  },

  {
    path: '/newjob',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AddNewJob.vue') }
    ]
  },

  {
    path: '/myprofile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProfilePage.vue') }
    ]
  },

  {
    path: '/edit-profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EditProfile.vue') }
    ]
  },

  {
    path: '/servicead/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EditJob.vue') }
    ]
  },

  {
    path: '/appointments/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppointmentPage.vue') }
    ]
  },
  {
    path: '/history',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HistoryPage.vue') }
    ]
  },

  {
    path: '/chat',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ChatPage.vue') }
    ]
  },
  {
    path: '/chat/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ChatDetailPage.vue') }
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
