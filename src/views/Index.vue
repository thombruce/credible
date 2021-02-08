<template lang="pug">
  VContainer(fill-height fluid)
    VRow(align="center" justify="center")
      VCol(cols="12" sm="8" md="6" lg="4")
        VAccountMenu
</template>

<script>
import VAccountMenu from '@/components/VAccountDialog/VAccountMenu'

export default {
  components: {
    VAccountMenu
  }
}
</script>
