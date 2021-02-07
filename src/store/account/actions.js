import { gun, user } from '@/gun'

const actions = {
  login ({ dispatch, commit }, { username, password }) {
    user.auth(username, password, (ack) => {
      if (!ack.err) {
        dispatch('authenticated')
      } else {
        commit('addError', { username: ack.err })
      }
    })
  },

  create ({ commit, dispatch }, { username, password }) {
    gun.get('~@' + username).once((data) => {
      if (!data) {
        user.create(username, password, (ack) => {
          if (!ack.err) dispatch('login', { username, password })
        })
      } else {
        commit('addError', { username: 'User already exists.' })
      }
    })
  },

  update ({ commit }, { username, password, newPassword }) {
    user.auth(username, password, (ack) => {
      if (ack.err) commit('addError', { password: ack.err })
    }, { change: newPassword })
  },

  authenticated ({ dispatch, commit }) {
    commit('authenticated', true)
  },

  logout ({ commit }) {
    commit('authenticated', false)
    user.leave()
  }
}

export default actions
