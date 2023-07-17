import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


//very simple "store" - which in our use case did not actually get used 
// - it was a false start and a starting point for a more intense
//   demonstration of CRUD API usage in future studys.
export const usePoiinfoStore = defineStore('poiinfo',{
	state: () => ({ searchResults: [] }),
	actions: {
		 async searchPOI(id) {
			var apiURLcall = "https://northberry.ca/api_kristiCA/poi/" + id;
			this.searchResults = await axios.get(apiURLcall)
		}
	}
})

