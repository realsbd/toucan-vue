/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
// import LayoutBackend from '@/layouts/variations/BackendStarter.vue'
import LayoutBackendBoxed from '@/layouts/variations/BackendBoxed.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)

// Frontend Page Example
// const Landing = () => import("@/views/starter/Landing.vue")

// Backend Page Example
const Dashboard = () => import("@/views/starter/Dashboard.vue")

// Toucan Pages
// Backend: General
const Impact = () => import("@/views/starter/impact/Impact.vue")
const Users = () => import("@/views/starter/Users.vue")
const Company = () => import("@/views/starter/Company.vue")
const Categories = () => import("@/views/starter/Categories.vue")
const LinkUser = () => import("@/views/starter/LinkUser.vue")
const GlobalGoals = () => import("@/views/starter/GlobalGoals.vue")

const ActionType = () => import("@/views/starter/types/ActionType.vue")
const ImpactType = () => import("@/views/starter/types/ImpactType.vue")
const Recipients = () => import("@/views/starter/types/Recipients.vue")
const WhoNeedsToKnow = () => import("@/views/starter/types/WhoNeedsToKnow.vue")

// AUTH Pages
const AuthSignIn = () => import(/* webpackChunkName: "auth-signin" */"@/views/starter/auth/SignIn.vue")
const AuthSignUp = () => import(/* webpackChunkName: "auth-signup" */"@/views/starter/auth/SignUp.vue")
const AuthReminder = () => import(/* webpackChunkName: "auth-reminder" */"@/views/starter/auth/Reminder.vue")
const Errors404 = () => import("@/views/starter/error/404.vue")
const Errors500 = () => import("@/views/starter/error/500.vue")

// Router Configuration
export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/auth',
      component: LayoutSimple,
      children: [
        {
          path: 'signin',
          name: 'Sign In',
          component: AuthSignIn
        },
        {
          path: 'signup',
          name: 'Sign Up',
          component: AuthSignUp
        },
        {
          path: 'reminder',
          name: 'Auth Reminder',
          component: AuthReminder
        },
      ]
    },
    {
      path: '/',
      redirect: '/dashboard',
      component: LayoutBackendBoxed,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'impact',
          name: 'Impact',
          component: Impact
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
        {
          path: 'link-user',
          name: 'Link User',
          component: LinkUser
        },
        {
          path: 'company',
          name: 'Company',
          component: Company
        },
        {
          path: 'global',
          name: 'Global Goals',
          component: GlobalGoals
        },
        {
          path: 'categories',
          name: 'Categories',
          component: Categories
        },
        {
          path: 'recipient',
          name: 'Recipients',
          component: Recipients
        },
        {
          path: 'impact-type',
          name: 'Impact Type',
          component: ImpactType
        },
        {
          path: 'action',
          name: 'Action',
          component: ActionType
        },
        {
          path: 'wntk',
          name: 'Who Needs To Know',
          component: WhoNeedsToKnow
        },
      ]
    },
    {
      path: '/errors',
      component: LayoutSimple,
      children: [
        {
          path: '404',
          name: 'Error 404',
          component: Errors404
        },
        {
          path: '500',
          name: 'Error 500',
          component: Errors500
        },
      ]
    },
  ]
})
