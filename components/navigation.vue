<template>
  <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
    <v-list dense>
      <v-list-tile @click="changeMapping('dhis')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>DHIS<->HFR</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="changeMapping('vims')">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>VIMS<->HFR</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import {eventBus} from '../main'
  export default {
    data:function(){
      return {
        mapping:'',
        drawer:false
      }
    },
    methods: {
      changeMapping(newMapping) {
        eventBus.mappingChanged(newMapping)
      }
    },
    created() {
      eventBus.$on('drawerChanged',(data)=>{
        this.drawer = data
      })
    },
    mounted() {
      this.changeMapping('vims')
    }
  }
</script>
<style>
  
</style>