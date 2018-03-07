<template>
<div>
<q-card flat>
<img src="~assets/Saymacha.png" class="avatar" center>



   

</q-card>
</div>
</div>
</template>

<script>
import { QCard, QCardLayout, QList, QCollapsible, QItemSide, QItem, QItemTile, QCardActions, QBtn, QItemMain, QIcon, QModal } from 'quasar'
export default {
  name: 'index',
  components: { QCard, QCardLayout, QList, QCollapsible, QItemSide, QItem, QItemTile, QCardActions, QBtn, QItemMain, QIcon, QModal },
  props: ['user_id'],
  data () {
    return {
      peoples: []
    }
  },

  beforeCreated () {
    if (localStorage.length === 0) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus">

  
</style>