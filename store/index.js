export const state = () => ({
	authenticated: false
})

export const mutations = {
	login(state) {
		state.authenticated = true;
		console.log(state.authenticated);
	},
	logout(state) {
		state.authenticated = false;
		console.log(state.authenticated);
	}
}

export const actions = () => ({

})

export const getters = () => ({
	
})
