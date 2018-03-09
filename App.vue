<template>
  <v-app id="inspire">
  	<app-navigation></app-navigation>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-content-start row>
          <app-filters></app-filters>
        </v-layout>
        <v-layout>
          <app-facilities></app-facilities>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import navigation from './components/navigation'
import toolbar from './components/toolbar'
import footer from './components/footer'
import filters from './components/application/filters'
import facilities from './components/application/facilities'

	export default {
    props: {
      source: String
    },
    components: {
    	appNavigation:navigation,
      appToolbar:toolbar,
      appFooter:footer,
      appFilters:filters,
      appFacilities:facilities
    }
  }
</script>

<style>

</style>
