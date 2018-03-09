<template>
	<v-content>
    <v-container fluid>
    	<v-progress-linear :indeterminate="true" v-if="showProgress"></v-progress-linear>
    </v-container>
  </v-content>
</template>
<script>
	import {eventBus} from '../../main'
	export default {
		data() {
			return {
				filters:[],
				showProgress: false
			}
		},
		created() {
			eventBus.$on('loadFacilities',(data)=>{
				this.filters = data
				this.showProgress = true
				this.$http.get('http://localhost:81/entity_mapping.php',{params:{
																																					service:'get_mappings',
																																					source:this.filters[0].source,
																																					target:this.filters[0].target,
																																					district:this.filters[0].district,
																																					map_type:this.filters[0].map_type
																																				}}).then(response=>{
					this.showProgress = false
				})
			})
		}
	}
</script>
<style>

</style>