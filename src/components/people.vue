<template>
<div>
<q-list separator no-border>
  <q-item  v-for="people in peoples">
    <q-item-side avatar="" />
    <q-item-main>
     <q-item-tile ><b>{{ people.name }}</b></q-item-tile> 
      <q-item-tile v-model="username" sublabel><img src="~assets/Saymacha.png" height="20px" width="20px"> / - {{people.username}}</q-item-tile>
      <router-link to='/profile/-ashok'>Press</router-link>
    </q-item-main>

  </q-item-main>
  <q-item-separator />
 
  <q-btn @click="profile">
    <q-item-main label="Follow" />
  </q-btn>
  <!--
    Notice "indent" Boolean property on QCollapsible
    which will make the sub-menu be indented.
    Also, notice the "label" property which defines the
    name of the menu item which opens up the sub-menu.
  -->
  </q-item>
  
</q-list>
</div>

</template>

<script>
import { QCard, QCardActions, QBtn, QRouteTab, QTabs, QItem, QList, QItemSide, QItemMain, QItemTile, QSideLink, QItemSeparator } from 'quasar'
import axios from 'axios'
export default {
  name: 'index',
  components: { QCard, QCardActions, QBtn, QRouteTab, QTabs, QItem, QList, QItemSide, QItemMain, QItemTile, QSideLink, QItemSeparator },
  data () {
    return {
      peoples: [],
      username: '$route.params.user'
    }
  },

  beforeCreated () {
    if (localStorage.length === 0) {
      this.$router.push('/login')
    }
  },

  mounted () {
    let key = localStorage.getItem('key')
    axios.get('http://210.16.101.26/people?api_key=' + key)
      .then((response) => {
        this.peoples = response.data
        for (var i = 0; i < this.peoples.length; i++) {
          var obj = this.peoples[i]
          return obj
        }
        this.obj.username = this.username
        console.log(this.username)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {
    profile () {
      let key = localStorage.getItem('key')
      var username = this.username
      axios.get('https://www.ajwhatson.com/-' + username + '?api_key=' + key)
        .then(response => console.log(response.data))
    }
  }
}
</script>

<style lang="stylus">

  
</style>