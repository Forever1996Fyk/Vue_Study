<template>
  <div class="home">
    <h1>主页</h1>
    <li v-for="v in goods">
      {{v.id}} - {{v.title}}
    </li>
    <br>
    <li v-for="v in users">
      {{v.id}} - {{v.name}}
    </li>
  </div>
</template>

<script>
  export default {
      computed: {
          goods() {
              return this.$store.getters.getAllNews;
          },
          users() {
              return this.$store.getters.getUsers;
          }
      }
  }
</script>
