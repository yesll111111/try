import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  // {
  //   path: '/back-lead',
  //   name: 'back-lead',
  //   component: () => import('../views/back-leadView.vue')
  // },
  // {
  //   path: '/Afterread-fir',
  //   name: 'Afterread-fir',
  //   component: () => import('../views/Afterread-fir.vue')
  // },
  // {
  //   path: '/Afterread-Fore-1',
  //   name: 'Afterread-Fore-1',
  //   component: () => import('../views/Afterread-Fore-1.vue')
  // },
  // {
  //   path: '/Afterread-Fore-2',
  //   name: 'Afterread-Fore-2',
  //   component: () => import('../views/Afterread-Fore-2.vue')
  // },
  // {
  //   path: '/Afterread-Fore-3',
  //   name: 'Afterread-Fore-3',
  //   component: () => import('../views/Afterread-Fore-3.vue')
  // },
  // {
  //   path: '/Afterread-Fore-4',
  //   name: 'Afterread-Fore-4',
  //   component: () => import('../views/Afterread-Fore-4.vue')
  // },
  // {
  //   path: '/Afterread-Male',
  //   name: 'Afterread-Male',
  //   component: () => import('../views/Afterread-Male.vue')
  // },
  // {
  //   path: '/Afterread-Mind',
  //   name: 'Afterread-Mind',
  //   component: () => import('../views/Afterread-Mind.vue')
  // },
  // {
  //   path: '/back-lead',
  //   name: 'back-lead',
  //   component: () => import('../views/back-leadView.vue')
  // },
  // {
  //   path: '/back',
  //   name: 'back',
  //   component: () => import('../views/back.vue')
  // },
  // {
  //   path: '/Beforread-Bra-1',
  //   name: 'Beforread-Bra-1',
  //   component: () => import('../views/Beforread-Bra-1.vue')
  // },
  // {
  //   path: '/Beforread-Bra-2',
  //   name: 'Beforread-Bra-2',
  //   component: () => import('../views/Beforread-Bra-2.vue')
  // },
  // {
  //   path: '/Beforread-fir',
  //   name: 'Beforread-fir',
  //   component: () => import('../views/Beforread-fir.vue')
  // },
  // {
  //   path: '/Beforread-Learn-1',
  //   name: 'Beforread-Learn-1',
  //   component: () => import('../views/Beforread-Learn-1.vue')
  // },
  // {
  //   path: '/Beforread-Learn-2',
  //   name: 'Beforread-Learn-2',
  //   component: () => import('../views/Beforread-Learn-2.vue')
  // },
  // {
  //   path: '/Beforread-Learn-3',
  //   name: 'Beforread-Learn-3',
  //   component: () => import('../views/Beforread-Learn-3.vue')
  // },
  // {
  //   path: '/Beforread-Learn-4',
  //   name: 'Beforread-Learn-4',
  //   component: () => import('../views/Beforread-Learn-4.vue')
  // },
  // {
  //   path: '/Beforread-What-1',
  //   name: 'Beforread-What-1',
  //   component: () => import('../views/Beforread-What-1.vue')
  // },
  // {
  //   path: '/Beforread-What-2',
  //   name: 'Beforread-What-2',
  //   component: () => import('../views/Beforread-What-2.vue')
  // },
  // {
  //   path: '/Beforread-What-3',
  //   name: 'Beforread-What-3',
  //   component: () => import('../views/Beforread-What-3.vue')
  // },

  // {
  //   path: '/Beforread-When-1',
  //   name: 'Beforread-When-1',
  //   component: () => import('../views/Beforread-When-1.vue')
  // },
  // {
  //   path: '/Beforread-Why-1',
  //   name: 'Beforread-Why-1',
  //   component: () => import('../views/Beforread-Why-1.vue')
  // },
  // {
  //   path: '/Beforread-Why-2',
  //   name: 'Beforread-Why-2',
  //   component: () => import('../views/Beforread-Why-2.vue')
  // },
  // {
  //   path: '/Consol-fir',
  //   name: 'Consol-fir',
  //   component: () => import('../views/Consol-fir.vue')
  // },
  // {
  //   path: '/Consol-pra-1',
  //   name: 'Consol-pra-1',
  //   component: () => import('../views/Consol-pra-1.vue')
  // },
  // {
  //   path: '/Consol-pra-2',
  //   name: 'Consol-pra-2',
  //   component: () => import('../views/Consol-pra-2.vue')
  // },

  // {
  //   path: '/Consol-pra-3',
  //   name: 'Consol-pra-3',
  //   component: () => import('../views/Consol-pra-3.vue')
  // },
  // {
  //   path: '/Consol-rec-1',
  //   name: 'Consol-rec-1',
  //   component: () => import('../views/Consol-rec-1.vue')
  // },
  // {
  //   path: '/Consol-rec-matich',
  //   name: 'Consol-rec-matich',
  //   component: () => import('../views/Consol-rec-matich.vue')
  // },
  // {
  //   path: '/Consol-spell',
  //   name: 'Consol-spell',
  //   component: () => import('../views/Consol-spell.vue')
  // },
  // {
  //   path: '/Inread-fir',
  //   name: 'Inread-fir',
  //   component: () => import('../views/Inread-fir.vue')
  // },
  // {
  //   path: '/Inread-How-1',
  //   name: 'Inread-How-1',
  //   component: () => import('../views/Inread-How-1.vue')
  // },
  // {
  //   path: '/Inread-How-2',
  //   name: 'Inread-How-2',
  //   component: () => import('../views/Inread-How-2.vue')
  // },
  // {
  //   path: '/Inread-Listen-1',
  //   name: 'Inread-Listen-1',
  //   component: () => import('../views/Inread-Listen-1.vue')
  // },
  // {
  //   path: '/Inread-Listen-2',
  //   name: 'Inread-Listen-2',
  //   component: () => import('../views/Inread-Listen-2.vue')
  // },
  // {
  //   path: '/Inread-Listen-3',
  //   name: 'Inread-Listen-3',
  //   component: () => import('../views/Inread-Listen-3.vue')
  // },
  // {
  //   path: '/Inread-Listen-4',
  //   name: 'Inread-Listen-4',
  //   component: () => import('../views/Inread-Listen-4.vue')
  // },
  // {
  //   path: '/Inread-Make-1',
  //   name: 'Inread-Make-1',
  //   component: () => import('../views/Inread-Make-1.vue')
  // },
  // {
  //   path: '/Inread-Make-2',
  //   name: 'Inread-Make-2',
  //   component: () => import('../views/Inread-Make-2.vue')
  // },
  // {
  //   path: '/Inread-name-1',
  //   name: 'Inread-name-1',
  //   component: () => import('../views/Inread-name-1.vue')
  // },
  // {
  //   path: '/Inread-name-2',
  //   name: 'Inread-name-2',
  //   component: () => import('../views/Inread-name-2.vue')
  // },
  // {
  //   path: '/Inread-read1-1',
  //   name: 'Inread-read1-1',
  //   component: () => import('../views/Inread-read1-1.vue')
  // },
  // {
  //   path: '/Inread-read1-2',
  //   name: 'Inread-read1-2',
  //   component: () => import('../views/Inread-read1-2.vue')
  // },
  // {
  //   path: '/Inread-read2-1',
  //   name: 'Inread-read2-1',
  //   component: () => import('../views/Inread-read2-1.vue')
  // },
  // {
  //   path: '/Inread-read2-2',
  //   name: 'Inread-read2-2',
  //   component: () => import('../views/Inread-read2-2.vue')
  // },
  // {
  //   path: '/Inread-What-1',
  //   name: 'Inread-What-1',
  //   component: () => import('../views/Inread-What-1.vue')
  // },
  // {
  //   path: '/Inread-What-2',
  //   name: 'Inread-What-2',
  //   component: () => import('../views/Inread-What-1.vue')
  // },
  // {
  //   path: '/Inread-What-3',
  //   name: 'Inread-What-3',
  //   component: () => import('../views/Inread-What-1.vue')
  // },
  // {
  //   path: '/Inread-What-4',
  //   name: 'Inread-What-4',
  //   component: () => import('../views/Inread-What-1.vue')
  // },
  // {
  //   path: '/Inread-What-5',
  //   name: 'Inread-What-5',
  //   component: () => import('../views/Inread-What-1.vue')
  // },
  // {
  //   path: '/lead-Free',
  //   name: 'lead-Free',
  //   component: () => import('../views/lead-Free.vue')
  // },
  // {
  //   path: '/lead-say-1',
  //   name: 'lead-say-1',
  //   component: () => import('../views/lead-say-1.vue')
  // },
  // {
  //   path: '/lead-say-2',
  //   name: 'lead-say-2',
  //   component: () => import('../views/lead-say-2.vue')
  // },
  // {
  //   path: '/lead-say-3',
  //   name: 'lead-say-3',
  //   component: () => import('../views/lead-say-3.vue')
  // },
  // {
  //   path: '/lead-think1',
  //   name: 'lead-think1',
  //   component: () => import('../views/lead-think1.vue')
  // },
  // {
  //   path: '/lead-think2',
  //   name: 'lead-think2',
  //   component: () => import('../views/lead-think2.vue')
  // },
  // {
  //   path: '/lead-think3',
  //   name: 'lead-think1',
  //   component: () => import('../views/lead-think3.vue')
  // },
  // {
  //   path: '/lead-think4',
  //   name: 'lead-think4',
  //   component: () => import('../views/lead-think4.vue')
  // },
  // {
  //   path: '/leading-fir',
  //   name: 'leading-fir',
  //   component: () => import('../views/leading-fir.vue')
  // },
  // {
  //   path: '/Summary-1',
  //   name: 'Summary-1',
  //   component: () => import('../views/Summary-1.vue')
  // },
  // {
  //   path: '/Summary-2',
  //   name: 'Summary-2',
  //   component: () => import('../views/Summary-2.vue')
  // },
  // {
  //   path: '/Summary-3',
  //   name: 'Summary-3',
  //   component: () => import('../views/Summary-3.vue')
  // },{
  //   path: '/Summary-4',
  //   name: 'Summary-4',
  //   component: () => import('../views/Summary-4.vue')
  // },{
  //   path: '/Summary-5',
  //   name: 'Summary-5',
  //   component: () => import('../views/Summary-5.vue')
  // },{
  //   path: '/Summary-6',
  //   name: 'Summary-6',
  //   component: () => import('../views/Summary-6.vue')
  // },{
  //   path: '/Summary-7',
  //   name: 'Summary-7',
  //   component: () => import('../views/Summary-7.vue')
  // },
  // {
  //   path: '/Summary-fir',
  //   name: 'Summary-fir',
  //   component: () => import('../views/Summary-fir.vue')
  // },
  {
    path: '/Target-nima',
    name: 'Target-nima',
    component: () => import('../views/Target-nima.vue')
  },
  


  // {
  //   path: '/Question-How',
  //   name: 'Question-How',
  //   component: () => import('../views/Question-How.vue')
  // },
  // {
  //   path: '/Question-diff',
  //   name: 'Question-diff',
  //   component: () => import('../views/Question-diff.vue')
  // },
  // {
  //   path: '/Question-discuss',
  //   name: 'Question-discuss',
  //   component: () => import('../views/Question-discuss.vue')
  // },
  // {
  //   path: '/Question-idea',
  //   name: 'Question-idea',
  //   component: () => import('../views/Question-idea.vue')
  // },
  // {
  //   path: '/task1-1',
  //   name: 'task1-1',
  //   component: () => import('../views/task1-1.vue')
  // },
  // {
  //   path: '/task2-1',
  //   name: 'task2-1',
  //   component: () => import('../views/task2-1.vue')
  // },
  // {
  //   path: '/task2-2',
  //   name: 'task2-2',
  //   component: () => import('../views/task2-2.vue')
  // },
  // {
  //   path: '/task2-3',
  //   name: 'task2-3',
  //   component: () => import('../views/task2-3.vue')
  // },
  // {
  //   path: '/task3-1',
  //   name: 'task3-1',
  //   component: () => import('../views/task3-1.vue')
  // },
  // {
  //   path: '/task3-2',
  //   name: 'task3-2',
  //   component: () => import('../views/task3-2.vue')
  // },
  // {
  //   path: '/task3-3',
  //   name: 'task3-3',
  //   component: () => import('../views/task3-3.vue')
  // },
  // {
  //   path: '/task3-4',
  //   name: 'task3-4',
  //   component: () => import('../views/task3-4.vue')
  // },
  // {
  //   path: '/task3-5',
  //   name: 'task3-5',
  //   component: () => import('../views/task3-5.vue')
  // },
  // {
  //   path: '/task3-6',
  //   name: 'task3-6',
  //   component: () => import('../views/task3-6.vue')
  // },
  // {
  //   path: '/task3-7',
  //   name: 'task3-7',
  //   component: () => import('../views/task3-7.vue')
  // },
  // {
  //   path: '/think-1',
  //   name: 'think-1',
  //   component: () => import('../views/think-1.vue')
  // },
  // {
  //   path: '/think-2',
  //   name: 'think-2',
  //   component: () => import('../views/think-2.vue')
  // },
  // {
  //   path: '/think-3',
  //   name: 'think-3',
  //   component: () => import('../views/think-3.vue')
  // },
  // {
  //   path: '/Homework1-1',
  //   name: 'Homework1-1',
  //   component: () => import('../views/Homework1-1.vue')
  // },
  // {
  //   path: '/Summary1-1',
  //   name: 'Summary1-1',
  //   component: () => import('../views/Summary1-1.vue')
  // },
  // {
  //   path: '/Apprasise1-1',
  //   name: 'Apprasise1-1',
  //   component: () => import('../views/Apprasise1-1.vue')
  // }
  
]

const router = createRouter({
  history: createWebHashHistory('./'),
  routes: routes
})

export default router
