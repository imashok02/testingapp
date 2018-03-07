<template>
<div>
<q-card flat>
 Thank you for being here!
</q-card>
</div>
</template>

<script>
import { QCard } from 'quasar'
import axios from 'axios'
export default {
  name: 'logout',
  components: { QCard },
  data () {
    return {
      signin: {
        email: '',
        password: ''
      }
    }
  },

  beforeCreated () {
    let key = localStorage.getItem('key')
    axios.get('http://210.16.101.26/logout?api_key=' + key)
      .then(reponse => {
        localStorage.removeItem('key')
      })
  }
}
</script>

<style lang="stylus">

  
</style>