<template lang="pug">
  VApp
    VMain
      VDarkmodeToggle.d-none
      router-view
</template>

<script>
import VDarkmodeToggle from '@/components/VDarkmodeToggle'

export default {
  name: 'App',
  components: {
    VDarkmodeToggle
  }
}
</script>
