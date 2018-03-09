<template>
	<v-container fluid align-center>
		<v-form v-model='valid' lazy-validation>
			<v-layout row >
		    <v-flex xs2>
		    	Source CSD Document
		  	</v-flex>
		    <v-flex>
		    	<v-select
		      v-model="source_doc"
		      :items="docs"
		      :rules="[v => !!v || 'source doc is required']"
		      required
		    ></v-select>
		    </v-flex>
		    <v-flex xs2>
		    	Target CSD Document
		  	</v-flex>
		    <v-flex>
		    	<v-select
		      v-model="target_doc"
		      :items="docs"
		      :rules="[v => !!v || 'target doc is required']"
		      required
		    ></v-select>
		    </v-flex>
		    <v-flex align-content-end xs1 v-model="rows">
		    	Rows per page
		    </v-flex>
		    <v-flex xs1>
		    	<v-select :items="[5,10,20,40,60,80]">

		    	</v-select>
		    </v-flex>
		    <v-flex>
		    	<v-btn color="success" @click='show_districts()'>Load Districts</v-btn>
		    </v-flex>
		  </v-layout>
		  <v-progress-linear :indeterminate="true" v-if="showProgress"></v-progress-linear>
		  <v-layout row align-content-start justify-center v-if='districtsLoaded'>
		  	<v-flex xs2>
		    	Select District
		  	</v-flex>
		    <v-flex>
		    	<v-select
		      v-model="district"
		      multiple
		      autocomplete
		      chips
		      :items="districts"
		      :rules="[v => !!v || 'district is required']"
		      required
		    ></v-select>
		  	</v-flex>
		  	<v-flex>
		  		<v-btn color='success' @click='loadFacilities()'>Load Facilities</v-btn>
		  	</v-flex>
		  </v-layout>
		</v-form>
	</v-container>
</template>
<script>
	import {eventBus} from '../../main'
	export default {
		data:function() {
			return {
				rows:2,
				source_doc:'',
				target_doc:'',
				docs:[],
				districts:[],
				districtsLoaded: false,
				showProgress: false,
				district:[],
				mapping:'',
				valid: false,
				filters: []
			}
		},
		methods:{
			get_docs:function() {
				this.$http.get('http://localhost:81/entity_mapping.php',{params:{
																																					service:'get_docs',
																																					source:this.source_doc,
																																					target:this.target_doc
																																				}}).then(response=>{
					this.docs = response.body
				})
			},
			show_districts() {
				this.showProgress = true
				this.$http.get('http://localhost:81/entity_mapping.php',{params:{
																																					service:'get_districts',
																																					map_type:this.mapping,
																																					source:this.source_doc.trim(),
																																					target:this.target_doc.trim()
																																				}}).then(response=>{
					var districts = response.body
					for(var distr in districts) {
						this.districts.push({text:districts[distr],value:distr})
					}
					this.districtsLoaded = true
					this.showProgress = false
				})
			},
			loadFacilities() {
				this.filters = []
				this.filters.push({
														district:this.district,
														source:this.source_doc.trim(),
														target:this.target_doc.trim(),
														map_type:this.mapping
													})
				eventBus.$emit('loadFacilities',this.filters)
			}
		},
		created() {
			this.get_docs()
			eventBus.$on('mappingChanged',(data)=>{
				this.mapping = data;
			})
		}
	}
</script>
<style>
	
</style>