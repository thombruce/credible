import { gun, user } from '@/gun'

const actions = {
  login ({ dispatch, commit }, { username, password }) {
    commit('clearErrors')
    user.auth(username, password, (ack) => {
      dispatch('authenticated')
    })
  },

  create ({ commit, dispatch }, { username, password }) {
    commit('clearErrors')
    gun.get('~@' + username).once((data) => {
      if (!data) {
        user.create(username, password, (ack) => {
          if (!ack.err) dispatch('login', { username, password })
        })
      } else {
        commit('addError', { username: 'User already exists' })
      }
    })
  },

  update ({ commit }, { username, password, newPassword }) {
    commit('clearErrors')
    user.auth(username, password, (_ack) => {
      // if (ack.err) doSomethingWithError()
    }, { change: newPassword })
  },

  authenticated ({ dispatch, commit }) {
    commit('authenticated', true)
  },

  logout ({ commit }) {
    commit('clearErrors')
    commit('authenticated', false)
    user.leave()
  }
}

export default actions