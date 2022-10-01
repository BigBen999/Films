import { createStore } from 'vuex'

export default createStore({
  state: {
    character: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters= payload
  },
  setCharactersFilter(state, payload) {
    state.charactersFilter= payload
  }
},
  actions: {
  async getCharacters({commit}) {
      try {
        const response = await fetch('')
        const data = await response.json()
        console.log(data)
      } catch(error) {
          console.error(error)
      }
    }
  },
  modules: {
  }
})
