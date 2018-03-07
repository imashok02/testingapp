<template>
<div>
<q-card flat>

<q-input float-label ="Think a Good Username" v-model="register.username" required/>
<q-input float-label="Give us your Email" v-model="register.email" required/>
<q-input float-label="How could we call you as" v-model="register.name" required />
<q-input float-label="Your Password" v-model="register.password" required />
  
  <q-card-actions>
    <q-btn @click='signup'>Register</q-btn>
    
  </q-card-actions>
</q-card>
</div>
</template>

<script>
import { QCard, QCardActions, QBtn, QInput } from 'quasar'
import axios from 'axios'
export default {
  name: 'signup',
  components: { QCard, QCardActions, QBtn, QInput },
  data () {
    return {
      register: {
        username: '',
        email: '',
        password: '',
        name: ''
      }
    }
  },

  methods: {
    signup () {
      axios.post('http://210.16.101.26/register', this.register)
        .then(response => {
          let key = response.data.api_key
          localStorage.setItem('key', key)
        })
    }
  }
}
</script>

<style lang="stylus">

  
</style>