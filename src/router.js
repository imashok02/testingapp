import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/question/feed'
import Question from './components/question/index'
import Ask from './components/question/add'
import Search from './components/search'
import Trend from './components/trending/index'
import TrendQuestion from './components/trending/trendingQuestion'
import TrendPeople from './components/trending/trendingPeople'
import People from './components/people'
import Poll from './components/polls/index'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Logout from './components/auth/logout'
import Profile from './components/profile'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: Home },
    { path: '/question/index', component: Question },
    { path: '/question/ask', component: Ask },
    { path: '/search', component: Search },
    { path: '/trending', component: Trend },
    { path: '/trending/trendingquestions', component: TrendQuestion },
    { path: '/trending/trendingpeoples', component: TrendPeople },
    { path: '/people', component: People },
    { path: '/polls', component: Poll },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/logout', component: Logout },
    { path: '/profile', component: Profile },
    { path: '/profile/:username', component: Profile },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
