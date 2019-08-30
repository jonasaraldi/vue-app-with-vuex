<template>
  <div id="app">
    <div id="nav">
      <router-link to="posts">Posts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 50px;
}
#nav {
  text-align: right;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
