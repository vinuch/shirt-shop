import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('JWT_TOKEN') || '',
    user: null
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, user) {
      state.user = user
    }
  },

  actions: {
    async signIn({ dispatch }, payload) {

      let response = await axios.post('https://buyy.herokuapp.com/api/v1/rest-auth/login/', payload).catch(e => e)

      if(response.status == 200){
        localStorage.setItem('JWT_TOKEN', response.data.access)
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
        commit('SET_USER', response.data)

      }catch(e) {
        console.log(e)
      }
    },

    signOut({ commit }){
      return axios.post('https://buyy.herokuapp.com/api/v1/logout/').then(() => {
        commit('SET_USER', null)
        commit('SET_TOKEN', null)
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