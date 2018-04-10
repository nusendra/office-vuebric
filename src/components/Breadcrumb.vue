<template>
  <div class="ms-Breadcrumb">
    <ul class="ms-Breadcrumb-list">
      <li v-for="(data,index) in items" :key="index" class="ms-Breadcrumb-listItem">
        <a class="ms-Breadcrumb-itemLink">{{ data }}</a> 
        <i class="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
}
</script>
