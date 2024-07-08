import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@pages/home.vue'

import Life from '@pages/life/index.vue'
import LifeServer from '@pages/life/server.vue'
import LifeActive from '@pages/life/activity.vue';
import LifeEducate from '@pages/life/educate.vue';
import LifeStart from '@pages/life/start.vue';

import People from '@pages/people/index.vue';
import PeopleGood from '@pages/people/good.vue';
import PeopleSuggestion from '@pages/people/suggestion.vue';
import PeopleProcess from '@pages/people/process.vue';
import PeopleSite from '@pages/people/site.vue';
import PeopleMessage from '@pages/people/message.vue';

import Rule from '@pages/rule/index.vue';
import RuleServer from '@pages/rule/server.vue';
import RuleSearch from '@pages/rule/search.vue';
import RuleTen from '@pages/rule/ten.vue';
import RuleCommunity from '@pages/rule/community.vue';
import RuleThree from '@pages/rule/three.vue';
import RuleTheater from '@pages/rule/theater.vue';
import RuleTour from '@pages/rule/tour.vue';



const routes = [
  { path: '/', component: HomeView },
  { path: '/life', component: Life },
  { path: '/life_server', component: LifeServer,meta:{back:true}},
  { path: '/life_active', component: LifeActive,meta:{back:true} },
  { path: '/life_educate', component: LifeEducate,meta:{back:true,educate:true} },
  { path: '/life_start', component: LifeStart,meta:{back:true} },
  { path: '/people', component: People },
  { path: '/people_good', component: PeopleGood,meta:{back:true} },
  { path: '/people_suggestion', component: PeopleSuggestion,meta:{back:true} },
  { path: '/people_process', component: PeopleProcess,meta:{back:true} },
  { path: '/people_site', component: PeopleSite,meta:{back:true} },
  { path: '/people_message', component: PeopleMessage,meta:{back:true} },
  { path: '/rule', component: Rule },
  { path: '/rule_server', component: RuleServer,meta:{back:true} },
  { path: '/rule_search', component: RuleSearch,meta:{back:true} },
  { path: '/rule_ten', component: RuleTen,meta:{back:true} },
  { path: '/rule_community', component: RuleCommunity,meta:{back:true} },
  { path: '/rule_three', component: RuleThree,meta:{back:true} },
  { path: '/rule_theater', component: RuleTheater,meta:{back:true} },
  { path: '/rule_tour', component: RuleTour,meta:{back:true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router