<template lang="pug">
  VForm(:model="user" @submit.prevent="onSubmit()")
    VCardTitle.headline
      | Login
    VCardText
      VTextField(
        v-model="user.username"
        label="Username"
        :error-count="(errors.username && errors.username.length) || 0"
        :error-messages="errors.username"
      )
      VTextField(v-model="user.password" label="Password" type="password")
    VCardActions
      VSpacer
      VBtn(color="primary" type="submit") Login
      VBtn(text small @click="$emit('switch-view')") Don't have an account?
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  computed: {
    ...mapState('account', [
      'errors'
    ])
  },

  beforeDestroy () {
    this.clearErrors()
  },

  methods: {
    ...mapActions('account', [
      'login'
    ]),
    ...mapMutations('account', [
      'clearErrors'
    ]),
    onSubmit () {
      this.clearErrors()
      this.login(this.user)
    }
  }
}
</script>
