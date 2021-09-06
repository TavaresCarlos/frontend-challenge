export const state = () => ({
	authenticated: false
})

export const mutations = {
	setTrue(state) {
		state.authenticated = true;
		console.log(state.authenticated);
	},
	setFalse(state) {
		state.authenticated = false;
		console.log(state.authenticated);
	}
}

export const actions = {
	login({ commit }) {
		commit('setTrue')
	},
	logout({ commit }) {
		commit('setFalse')
	},
	fetch() {
		return this.$axios.get('https://www.postman.com/collections/e6afe4028c2a1e56e577')
	}
}

export const getters = {
	authenticated: (state) => state.authenticated
}
	