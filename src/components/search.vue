<template>
<div id="search">
<q-card flat>

<q-search placeholder="Search any Questions, If not found feel free to ask it" v-model="search" />
  {{search}}
  <q-card-actions>
    <q-btn loader>Ask</q-btn>
    
  </q-card-actions>

  <q-list>

  <q-item-separator inset />
  
</q-list>
</q-card>
</div>
</template>

<script>
import { QCard, QCardActions, QBtn, QInput, QSearch, QList, QItem, QItemSeparator } from 'quasar'
export default {
  name: 'search',
  components: { QCard, QCardActions, QBtn, QInput, QSearch, QList, QItem, QItemSeparator },

  data () {
    return {
      search: ''
    }
  },

  watch: {
    search: function () {
      this.search = ''
      if (this.search.length === 3) {
        this.startsearch()
      }
    }
  },

  methods: {
    startsearch: function () {
      this.search = 'Searching...'
    }
  }
}
</script>

<style lang="stylus">

  
</style>