<template>
<div>
 <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100" class="barnav">
  <!-- Header -->
  <q-toolbar slot="header" color="black" inverted >
    <q-btn flat @click="$refs.layout.toggleLeft()">
      <q-icon name="languages" />
    </q-btn>
    <q-toolbar-title color="black" inverted class="Saymacha">
     <img src="~assets/Saymacha.png" height="40px" width="40px">
      
    </q-toolbar-title>
    <q-btn flat @click="$refs.layout.toggleRight()">
      <q-icon name="menu" />
    </q-btn>
  </q-toolbar>
  <!-- Navigation -->
  <q-tabs slot="navigation" color="black" inverted>
    <q-route-tab icon="home" slot="title" to="/" />
    <q-route-tab  icon="explore" slot="title"  to="/question/index" />
    <q-route-tab  icon="add" slot="title"  to="/question/ask" />
     <q-route-tab  icon="search" slot="title"  to="/search" />
    <q-route-tab  icon="trending_up" slot="title"  to="/trending" />
     <q-route-tab  icon="people" slot="title"  to="/people" />
    <q-route-tab  icon="poll" slot="title"  to="/polls" />
  </q-tabs>
  <!-- Left Side Panel -->
  <div slot="left">
   <!-- <q-list no-border link inset-separator> -->
      
      <q-search placeholder="Find a Category"/>
      <q-side v-for="category in categories">
      <q-side-link item to="/docs">
        
        <q-item-main :label="category.name"/>
      </q-side-link>
      </q-side>
    
 <!--   </q-list>  -->
  </div>
  <!-- Right Side Panel -->
  <div slot="right">
   <q-list no-border link inset-separator>
      
      <q-side-link item to="/docs">
        <q-item-side icon="person_outlined" />
        <q-item-main label="Profile"  />
      </q-side-link>
      <q-side-link item to="/forum">
        <q-item-side icon="notifications" />
        <q-item-main label="Notifications" />
      </q-side-link>
      <q-side-link item to="/chat">
        <q-item-side icon="people_outlined" />
        <q-item-main label="Followers" />
      </q-side-link>
      <q-side-link item to="/twitter">
        <q-item-side icon="people" />
        <q-item-main label="Following" />
      </q-side-link>
      <q-side-link item to="/twitter">
        <q-item-side icon="arrow_drop_up" />
        <q-item-main label="Saymacha Rank"  />
      </q-side-link>
      <q-side-link item to="/logout">
        <q-item-side icon="lock" />
        <q-item-main label="Logout"/>
      </q-side-link>
      <q-side-link item to="/register">
        <q-item-side icon="lock" />
        <q-item-main label="Register" />
      </q-side-link>
      <q-side-link item to="/login">
        <q-item-side icon="lock" />
        <q-item-main label="Login" />
      </q-side-link>
    </q-list>
  </div>
  <!-- sub-routes get injected here: -->
  <router-view />
  <!-- Footer -->
  
</q-layout>
</div>
</template>

<script>
import { QLayout, QToolbar, QToolbarTitle, QItemSide, QSideLink, QitemMain, QRouteTab, QTabs, QBtn, QIcon, QList, QListheader, QItemMain, QSearch } from 'quasar'
import axios from 'axios'
export default {
  name: 'home',
  components: { QLayout, QToolbar, QToolbarTitle, QItemSide, QSideLink, QitemMain, QRouteTab, QTabs, QBtn, QIcon, QList, QListheader, QItemMain, QSearch },
  data () {
    return {
      categories: []
    }
  },

  beforeCreated () {
    if (localStorage.getItem === null) {
      this.$router.push('/login')
    }
  },

  mounted () {
    let key = localStorage.getItem('key')
    axios.get('http://210.16.101.26/people?api_key=' + key)
      .then((response) => {
        this.categories = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus">
.Saymacha
  text-align center

.barnav
  background-color #fff

header
  background-color #fff
  
</style>
