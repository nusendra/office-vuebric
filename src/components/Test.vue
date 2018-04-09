<template>
  <div class="test">
    <h1>Hello office-vuebric!</h1>
    <input v-model="name" placeholder="Name" />
  </div>
</template>

<script>
export default {
  name: 'test',

  data () {
    return {
      name: 'world',
    }
  },
}
</script>

<style scoped>
.testasucok h1 {
  color: #40b883;
}
</style>
