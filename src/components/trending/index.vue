<template>
<div>
<q-card flat>

<q-tabs slot="navigation" color="black" inverted>
    <q-route-tab label="Trending Questions" slot="title" to="/trending/trendingquestions" />
    <q-route-tab label="Trending Peoples" slot="title"  to="/trending/trendingpeoples" />
  </q-tabs>
  </q-separator>
</q-card>
</div>
</template>

<script>
import { QCard, QCardActions, QBtn, QRouteTab, QTabs } from 'quasar'
export default {
  name: 'index',
  components: { QCard, QCardActions, QBtn, QRouteTab, QTabs }
}
</script>

<style lang="stylus">

  
</style>