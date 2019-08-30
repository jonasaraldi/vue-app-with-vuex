<template src="./PostForm.html"></template>
<style src="./PostForm.less" lang="less"></style>

<script>

  import card from '@/components/card/card'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      card
    },
    data() {
      return {
        title: '',
        author: '',
        content: ''
      };
    },
    methods: {
      ...mapActions('PostForm', [
        'setPost', 
        'save'
      ]),
      saveForm() {
        this.setPost(this.$data)
        this.save()
          .then(() => this.redirectToGrid())
      },
      redirectToGrid() {
        this.$router.push({ name: 'post-grid' })
      }
    }
  }
</script>
