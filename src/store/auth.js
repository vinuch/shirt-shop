import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('JWT_TOKEN') || '',
    user: JSON.parse(localStorage.getItem('USER')) || '',
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, user) {
      state.user = user
    },
    DELETE_TOKEN(state) {
      state.token = ''
    },
    DELETE_USER(state) {
      state.user = ''
    }
  },

  actions: {
    async signIn({ dispatch }, payload) {

      let response = await axios.post('https://buyy.herokuapp.com/api/v1/rest-auth/login/', payload).catch(e => e)

      if(response.status == 200){
        localStorage.setItem('JWT_TOKEN', JSON.stringify(response.data.access))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
        dispatch('attempt', response.data.access)
        return response
      }else{
        return response.response
      }
      
        
        

      
      

    },

    async attempt({ commit }, token){
      commit('SET_TOKEN', token)
      try{
        let response = await axios.get('https://buyy.herokuapp.com/api/v1/accounts/profile/', {
          
        })
        // console.log(response.data)
        localStorage.setItem('USER', JSON.stringify(response.data))
        commit('SET_USER', response.data)

      }catch(e) {
        console.log(e)
      }
    },

    signOut({ commit }){
      return axios.post('https://buyy.herokuapp.com/api/v1/logout/').then(() => {
        commit('DELETE_USER')
        commit('DELETE_TOKEN')

        localStorage.removeItem('USER')
        localStorage.removeItem('JWT_TOKEN')
      })
      
    }
  },
  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    }
  },
  modules: {
    
  }
}

// .then(function (response) {
//   window.localStorage.setItem('JWT_TOKEN', response.data.access)
//   console.log(response);
//   self.$router.push('/');
// })
// .catch(function (error) {
 
//   console.log(error);
// });