<template>
  <div>
    <div v-if="error.statusCode === 404">
      <a-empty :description="false"/>
      <p>Sorry, page Not Found</p>
    </div>
    <div v-if="error.statusCode === 403">
      <a-empty :description="false"/>
      <p>Sorry, access denied.</p>
    </div>
    <div v-if="error.statusCode === 500">
      <p>Sorry, the server is down.</p>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['error'],
    methods: {
      goHome () {
        this.$router.push({ path: '/' });
      }
    },
    // layout: 'default'
  }
</script>

<style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
  }
</style>
