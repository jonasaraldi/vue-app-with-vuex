<template src="./PostGrid.html"></template>
<style src="./PostGrid.less" lang="less"></style>

<script>

  import card from '@/components/card/card'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      card
    },
    created() {
      this.fetchPosts()
    },
    computed: {
      ...mapState('PostGrid', ['posts'])
    },
    methods: {
      ...mapActions('PostGrid', ['fetchPosts'])
    }
  }
</script>
