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
	}
}

export const getters = {
}
	