<template>
  <button class="ms-Button">
    <span class="ms-Button-label">{{ title }}</span> 
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>
