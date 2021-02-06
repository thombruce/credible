<template lang="pug">
  VContainer(fill-height fluid)
    VRow(align="center" justify="center")
      VCol(cols="6")
        VAccountMenu
</template>

<script>
import VAccountMenu from '@/components/controls/VAccountMenu'

export default {
  components: {
    VAccountMenu
  }
}
</script>
