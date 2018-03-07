<template>
<div>
<q-list separator no-border>
  <q-item>
    <q-item-side avatar="" />
    <q-item-main>
      <q-item-tile label>John Doe</q-item-tile>
      <q-item-tile sublabel>Administrator</q-item-tile>
    </q-item-main>
  </q-item-main>
  <q-item-separator />
 
  <q-side-link item icon="add" to="/app" exact>
    <q-item-main label="Follow" />
  </q-side-link>
  <q-side-link item icon="assignment" to="/app/registrations">
    <q-item-main label="View" />
  </q-side-link>
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
import { QCard, QCardActions, QBtn, QRouteTab, QTabs, QItem, QList, QItemSide, QItemMain, QItemTile, QSideLink } from 'quasar'
export default {
  name: 'index',
  components: { QCard, QCardActions, QBtn, QRouteTab, QTabs, QItem, QList, QItemSide, QItemMain, QItemTile, QSideLink }
}
</script>

<style lang="stylus">

  
</style>