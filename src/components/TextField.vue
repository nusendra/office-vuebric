<template>
  <div class="ms-TextField ms-TextField--placeholder">
    <input class="ms-TextField-field" type="text" v-model="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      text: this.value,
    }
  },
  watch: {
    text (val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style>
.ms-TextField {
  font-family: Segoe UI WestEuropean, Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-shadow: none;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px
}

.ms-TextField .ms-Label {
  font-size: 14px;
  font-weight: 600
}

.ms-TextField.is-disabled .ms-TextField-field {
  background-color: #f4f4f4;
  border-color: #f4f4f4;
  pointer-events: none;
  cursor: default
}

.ms-TextField.is-disabled::-webkit-input-placeholder {
  color: #a6a6a6
}

.ms-TextField.is-disabled:-moz-placeholder,
.ms-TextField.is-disabled::-moz-placeholder {
  color: #a6a6a6
}

.ms-TextField.is-disabled:-ms-input-placeholder {
  color: #a6a6a6
}

.ms-TextField.is-required .ms-Label:after {
  content: " *";
  color: #a80000
}

.ms-TextField.is-required::-webkit-input-placeholder:after {
  content: " *";
  color: #a80000
}

.ms-TextField.is-required:-moz-placeholder:after,
.ms-TextField.is-required::-moz-placeholder:after {
  content: " *";
  color: #a80000
}

.ms-TextField.is-required:-ms-input-placeholder:after {
  content: " *";
  color: #a80000
}

.ms-TextField.is-active {
  border-color: #0078d7
}

.ms-TextField-field {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-shadow: none;
  border: 1px solid #c8c8c8;
  border-radius: 0;
  font-weight: 300;
  font-size: 14px;
  color: #333;
  height: 32px;
  padding: 6px 12px 7px;
  width: 100%;
  min-width: 180px;
  outline: 0;
  text-overflow: ellipsis
}

.ms-TextField-field:hover {
  border-color: #767676
}

.ms-TextField-field:focus {
  border-color: #0078d7
}

@media screen and (-ms-high-contrast:active) {
  .ms-TextField-field:focus,
  .ms-TextField-field:hover {
    border-color: #1aebff
  }
}

@media screen and (-ms-high-contrast:black-on-white) {
  .ms-TextField-field:focus,
  .ms-TextField-field:hover {
    border-color: #37006e
  }
}

.ms-TextField-field[disabled] {
  background-color: #f4f4f4;
  border-color: #f4f4f4;
  pointer-events: none;
  cursor: default
}

.ms-TextField-field::-webkit-input-placeholder {
  color: #666
}

.ms-TextField-field:-moz-placeholder,
.ms-TextField-field::-moz-placeholder {
  color: #666
}

.ms-TextField-field:-ms-input-placeholder {
  color: #666
}

.ms-TextField-description {
  color: #767676;
  font-size: 11px
}

.ms-TextField.ms-TextField--placeholder {
  position: relative;
  background-color: #fff
}

.ms-TextField.ms-TextField--placeholder .ms-TextField-field {
  position: relative;
  background-color: transparent;
  z-index: 5
}

.ms-TextField.ms-TextField--placeholder .ms-Label {
  position: absolute;
  font-weight: 300;
  font-size: 14px;
  color: #666;
  padding: 6px 12px 7px;
  pointer-events: none;
  z-index: 0
}

.ms-TextField.ms-TextField--placeholder.is-disabled,
.ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label {
  color: #a6a6a6
}

.ms-TextField.ms-TextField--underlined {
  border-bottom: 1px solid #c8c8c8;
  display: table;
  width: 100%;
  min-width: 180px
}

.ms-TextField.ms-TextField--underlined:hover {
  border-color: #767676
}

@media screen and (-ms-high-contrast:active) {
  .ms-TextField.ms-TextField--underlined:hover {
    border-color: #1aebff
  }
}

@media screen and (-ms-high-contrast:black-on-white) {
  .ms-TextField.ms-TextField--underlined:hover {
    border-color: #37006e
  }
}

.ms-TextField.ms-TextField--underlined:active,
.ms-TextField.ms-TextField--underlined:focus {
  border-color: #0078d7
}

.ms-TextField.ms-TextField--underlined .ms-Label {
  font-size: 14px;
  margin-right: 8px;
  display: table-cell;
  vertical-align: top;
  padding-left: 12px;
  padding-top: 9px;
  height: 32px;
  width: 1%;
  white-space: nowrap
}

.ms-TextField.ms-TextField--underlined .ms-TextField-field {
  border: 0;
  float: left;
  display: table-cell;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 3px
}

.ms-TextField.ms-TextField--underlined .ms-TextField-field:active,
.ms-TextField.ms-TextField--underlined .ms-TextField-field:focus,
.ms-TextField.ms-TextField--underlined .ms-TextField-field:hover {
  outline: 0
}

.ms-TextField.ms-TextField--underlined.is-disabled {
  border-bottom-color: #eaeaea
}

.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label {
  color: #a6a6a6
}

.ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field {
  background-color: transparent;
  color: #a6a6a6
}

.ms-TextField.ms-TextField--underlined.is-active {
  border-color: #0078d7
}

@media screen and (-ms-high-contrast:active) {
  .ms-TextField.ms-TextField--underlined.is-active {
    border-color: #1aebff
  }
}

@media screen and (-ms-high-contrast:black-on-white) {
  .ms-TextField.ms-TextField--underlined.is-active {
    border-color: #37006e
  }
}

.ms-TextField.ms-TextField--multiline .ms-TextField-field {
  color: #666;
  font-size: 14px;
  line-height: 17px;
  min-height: 60px;
  min-width: 260px;
  padding-top: 6px;
  overflow: auto
}
</style>
