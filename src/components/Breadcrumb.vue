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

<style>
.ms-Breadcrumb {
  font-family: Segoe UI WestEuropean, Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 23px 0 1px
}

.ms-Breadcrumb.is-overflow .ms-Breadcrumb-overflow {
  display: inline-block;
  margin-right: -4px
}

.ms-Breadcrumb-chevron {
  font-size: 12px;
  color: #666;
  vertical-align: top;
  margin: 13px 4px;
  line-height: 1
}

.ms-Breadcrumb-list {
  display: inline;
  white-space: nowrap;
  padding: 0;
  margin: 0
}

.ms-Breadcrumb-list .ms-Breadcrumb-listItem {
  list-style-type: none;
  vertical-align: top;
  margin: 0;
  padding: 0;
  display: inline-block
}

.ms-Breadcrumb-list .ms-Breadcrumb-listItem:last-of-type .ms-Breadcrumb-chevron {
  display: none
}

.ms-Breadcrumb-overflow {
  display: none;
  position: relative
}

.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton {
  font-size: 16px;
  display: inline-block;
  color: #0078d7;
  padding: 8px;
  cursor: pointer;
  vertical-align: top
}

.ms-Breadcrumb-overflowMenu {
  display: none;
  position: absolute
}

.ms-Breadcrumb-overflowMenu.is-open {
  display: block;
  top: 36px;
  left: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .4);
  background-color: #fff;
  border: 1px solid #c8c8c8;
  z-index: 105
}

.ms-Breadcrumb-overflowMenu:before {
  position: absolute;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .4);
  top: -6px;
  left: 6px;
  content: " ";
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  background-color: #fff
}

.ms-Breadcrumb-overflowMenu .ms-ContextualMenu {
  border: 0;
  box-shadow: none;
  position: relative;
  width: 190px
}

.ms-Breadcrumb-overflowMenu .ms-ContextualMenu.is-open {
  margin-bottom: 0
}

.ms-Breadcrumb-itemLink,
.ms-Breadcrumb-overflowButton {
  text-decoration: none;
  outline: transparent
}

.ms-Breadcrumb-itemLink:hover,
.ms-Breadcrumb-overflowButton:hover {
  background-color: #f4f4f4;
  cursor: pointer
}

.ms-Breadcrumb-itemLink:focus,
.ms-Breadcrumb-overflowButton:focus {
  outline: 1px solid #767676;
  color: #000
}

.ms-Breadcrumb-itemLink:active,
.ms-Breadcrumb-overflowButton:active {
  outline: transparent;
  background-color: #c8c8c8
}

.ms-Breadcrumb-itemLink {
  font-weight: 100;
  font-size: 21px;
  color: #333;
  display: inline-block;
  padding: 0 4px;
  max-width: 160px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: top
}

@media screen and (max-width:639px) {
  .ms-Breadcrumb {
    margin: 10px 0
  }
  .ms-Breadcrumb-itemLink {
    font-size: 17px
  }
  .ms-Breadcrumb-chevron {
    font-size: 10px;
    margin: 9px 3px
  }
  .ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton {
    font-size: 16px;
    padding: 2px 0
  }
}

@media screen and (max-width:479px) {
  .ms-Breadcrumb-itemLink {
    font-size: 14px;
    max-width: 116px
  }
  .ms-Breadcrumb-chevron {
    margin: 5px 4px
  }
  .ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton {
    padding: 2px 4px
  }
}
</style>
