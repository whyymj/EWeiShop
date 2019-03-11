<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    metaInfo: {
      title: 'My Example App', // set a title
      meta: [{ // set meta
        name: 'keyWords',
        content: 'My Example App'
      }],
      link: [{ // set link
        rel: 'asstes',
        href: 'https://assets-cdn.github.com/'
      }]
    },
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 375px;/*no*/
  }
</style>
