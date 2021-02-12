<template lang="pug">
  VContainer(fill-height fluid)
    VRow(align="center" justify="center")
      VCol(cols="12" sm="8" md="6" lg="4")
        VCard
          VAccountForm
</template>

<script>
export default {
  watch: {
    '$user.authenticated' () {
      if (!this.$user.authenticated) this.$router.push({ name: 'login' })
    }
  }
}
</script>
