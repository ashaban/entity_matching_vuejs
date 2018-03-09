<template>
	<v-toolbar class='grey darken-3' dark fixed app>
	  <v-toolbar-side-icon @click.stop="changeDrawer()"></v-toolbar-side-icon>
	  <img src="../assets/oim_logo_48p.png" class="text-lg-right" style="height:38px">
	  
	  <v-toolbar-title>OpenInfoMan - Facility Mapping<br><div class="caption">part of the iHRIS family of health workforce data solutions</div> </v-toolbar-title>
	  <v-spacer></v-spacer>
	  <div style="text-align:right"><img src="../assets/openhie.png" style="height:60px;float:right"></div>
	</v-toolbar>
</template>
<script>
	import {eventBus} from '../main'
	export default {
		data:function() {
			return {
				drawer:false
			}
		},
		methods: {
			changeDrawer() {
				this.drawer = !this.drawer
				eventBus.$emit('drawerChanged',this.drawer)
			}
		}
	}
</script>
<style>
	
</style>