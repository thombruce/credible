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
      user.login(this.user.username, this.user.password)
    }
  }
}
</script>
