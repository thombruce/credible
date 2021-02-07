<template lang="pug">
  VForm(:model="user" @submit.prevent="onSubmit()")
    VCardTitle.headline
      | Sign up
    VCardText
      VTextField(
        v-model="user.username"
        label="Username"
        hint="Make it a good one. There's no way to change this."
        :error-count="(errors.username && errors.username.length) || 0"
        :error-messages="errors.username"
      )
      VTextField(
        v-model="user.password"
        label="Password"
        type="password"
        hint="You won't be able to recover your account if you forget this."
        persistent-hint
      )
    VCardActions
      VSpacer
      VBtn(color="primary" type="submit") Sign up
      VBtn(text small @click="$emit('switch-view')") Already have an account?
</template>

<script>
import user from '@/user'

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
    errors () {
      return user.errors
    }
  },

  beforeDestroy () {
    user.clearErrors()
  },

  methods: {
    onSubmit () {
      user.clearErrors()
      user.signUp(this.user.username, this.user.password)
    }
  }
}
</script>
