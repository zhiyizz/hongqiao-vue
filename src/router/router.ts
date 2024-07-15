import { createWebHistory, createRouter,createWebHashHistory  } from 'vue-router'

import HomeView from '@pages/home.vue'

// import Life from '@pages/life/index.vue'
// import LifeServer from '@pages/life/server.vue'
// import LifeActive from '@pages/life/activity.vue';
// import LifeEducate from '@pages/life/educate.vue';
// import LifeStart from '@pages/life/start.vue';

// import People from '@pages/people/index.vue';
// import PeopleGood from '@pages/people/good.vue';
// import PeopleSuggestion from '@pages/people/suggestion.vue';
// import PeopleProcess from '@pages/people/process.vue';
// import PeopleSite from '@pages/people/site.vue';
// import PeopleMessage from '@pages/people/message.vue';

// import Rule from '@pages/rule/index.vue';
// import RuleServer from '@pages/rule/server.vue';
// import RuleSearch from '@pages/rule/search.vue';
// import RuleTen from '@pages/rule/ten.vue';
// import RuleCommunity from '@pages/rule/community.vue';
// import RuleThree from '@pages/rule/three.vue';
// import RuleTheater from '@pages/rule/theater.vue';
// import RuleTour from '@pages/rule/tour.vue';



const routes = [
  { path: '/', component: HomeView },

  {
    path:"/life",
    name:"Life",
    redirect: '/life/index',
    children:[
      {
        path:"",
        name:"LifeIndex",
        component: () => import('@pages/life/index.vue'),
      },
      {
        path:"server",
        name:"LifeServer",
        component: () => import('@pages/life/server.vue'),
        meta:{back:true}
      },
      {
        path:"active",
        name:"LifeActive",
        component: () => import('@pages/life/activity.vue'),
        meta:{back:true}
      },
      {
        path:"educate",
        name:"LifeEducate",
        component: () => import('@pages/life/educate.vue'),
        meta:{back:true}
      },
      {
        path:"start",
        name:"LifeStart",
        component: () => import('@pages/life/start.vue'),
        meta:{back:true}
      }
    ]
  },

  {
    path:"/people",
    name:"People",
    redirect: '/people/index',
    children:[
      {
        path:"",
        name:"PeopleIndex",
        component: () => import('@pages/people/index.vue'),
      },
      {
        path:"good",
        name:"PeopleGood",
        component: () => import('@pages/people/good.vue'),
        meta:{back:true}
      },
      {
        path:"suggestion",
        name:"PeopleSuggestion",
        component: () => import('@pages/people/suggestion.vue'),
        meta:{back:true}
      },
      {
        path:"process",
        name:"PeopleProcess",
        component: () => import('@pages/people/process.vue'),
        meta:{back:true}
      },
      {
        path:"site",
        name:"PeopleSite",
        component: () => import('@pages/people/site.vue'),
        meta:{back:true}
      },
      {
        path:"message",
        name:"PeopleMessage",
        component: () => import('@pages/people/message.vue'),
        meta:{back:true}
      },
    ]
  },
  {
    path:"/rule",
    name:"Rule",
    redirect: '/rule/index',
    children:[
      {
        path:"",
        name:"RuleIndex",
        component: () => import('@pages/rule/index.vue'),
      },
      {
        path:"server",
        name:"RuleServer",
        component: () => import('@pages/rule/server.vue'),
        meta:{back:true}
      },
      {
        path:"search",
        name:"RuleSearch",
        component: () => import('@pages/rule/search.vue'),
        meta:{back:true}
      },
      {
        path:"ten",
        name:"RuleTen",
        component: () => import('@pages/rule/ten.vue'),
        meta:{back:true}
      },
      {
        path:"community",
        name:"RuleCommunity",
        component: () => import('@pages/rule/community.vue'),
        meta:{back:true}
      },
       {
        path:"three",
        name:"RuleThree",
        component: () => import('@pages/rule/three.vue'),
        meta:{back:true}
      },
      {
        path:"theater",
        name:"RuleTheater",
        component: () => import('@pages/rule/theater.vue'),
        meta:{back:true}
      },
      {
        path:"tour",
        name:"RuleTour",
        component: () => import('@pages/rule/tour.vue'),
        meta:{back:true}
      },
      {
        path:"case",
        name:"RuleCase",
        component: () => import('@pages/rule/case.vue'),
        meta:{back:true}
      },
      {
        path:"work",
        name:"RuleWork",
        component: () => import('@pages/rule/work.vue'),
        meta:{back:true}
      },
    ]
  },

  // { path: '/life', component: Life },
  // { path: '/life_server', component: LifeServer,meta:{back:true}},
  // { path: '/life_active', component: LifeActive,meta:{back:true} },
  // { path: '/life_educate', component: LifeEducate,meta:{back:true,educate:true} },
  // { path: '/life_start', component: LifeStart,meta:{back:true} },
  // { path: '/people', component: People },
  // { path: '/people_good', component: PeopleGood,meta:{back:true} },
  // { path: '/people_suggestion', component: PeopleSuggestion,meta:{back:true} },
  // { path: '/people_process', component: PeopleProcess,meta:{back:true} },
  // { path: '/people_site', component: PeopleSite,meta:{back:true} },
  // { path: '/people_message', component: PeopleMessage,meta:{back:true} },
  // { path: '/rule', component: Rule },
  // { path: '/rule_server', component: RuleServer,meta:{back:true} },
  // { path: '/rule_search', component: RuleSearch,meta:{back:true} },
  // { path: '/rule_ten', component: RuleTen,meta:{back:true} },
  // { path: '/rule_community', component: RuleCommunity,meta:{back:true} },
  // { path: '/rule_three', component: RuleThree,meta:{back:true} },
  // { path: '/rule_theater', component: RuleTheater,meta:{back:true} },
  // { path: '/rule_tour', component: RuleTour,meta:{back:true} },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to: any, _from: any, next) => {
//   next()
// })
export default router