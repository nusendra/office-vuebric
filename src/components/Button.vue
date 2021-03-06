<template>
  <button :class="type ? 'ms-Button ms-Button--' + type : 'ms-Button'">
    <span class="ms-Button-label">
      <slot/>
    </span>
    <span v-if="description" class="ms-Button-description">{{ description }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
.ms-Button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-shadow: none;
  font-family: Segoe UI WestEuropean, Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  min-width: 80px;
  padding: 4px 20px 6px
}

.ms-Button.is-hidden {
  display: none
}

.ms-Button:hover {
  background-color: #eaeaea;
  border-color: #eaeaea
}

.ms-Button:hover .ms-Button-label {
  color: #000
}

@media screen and (-ms-high-contrast:active) {
  .ms-Button:hover {
    color: #1aebff;
    border-color: #1aebff
  }
}

@media screen and (-ms-high-contrast:black-on-white) {
  .ms-Button:hover {
    color: #37006e;
    border-color: #37006e
  }
}

.ms-Button:focus {
  background-color: #eaeaea;
  border-color: #0078d7;
  outline: 1px solid transparent
}

.ms-Button:focus .ms-Button-label {
  color: #000
}

.ms-Button:active {
  background-color: #0078d7;
  border-color: #0078d7
}

.ms-Button:active .ms-Button-label {
  color: #fff
}

.ms-Button.is-disabled,
.ms-Button:disabled {
  background-color: #f4f4f4;
  border-color: #f4f4f4;
  cursor: default
}

.ms-Button.is-disabled .ms-Button-label,
.ms-Button:disabled .ms-Button-label {
  color: #a6a6a6
}

.ms-Button.is-disabled:focus,
.ms-Button.is-disabled:hover,
.ms-Button:disabled:focus,
.ms-Button:disabled:hover {
  outline: 0
}

.ms-Button-label {
  color: #333;
  font-weight: 600;
  font-size: 14px
}

.ms-Button-description,
.ms-Button-icon {
  display: none
}

.ms-Button.ms-Button--primary {
  background-color: #0078d7;
  border-color: #0078d7
}

.ms-Button.ms-Button--primary .ms-Button-label {
  color: #fff
}

.ms-Button.ms-Button--primary:hover {
  background-color: #005a9e;
  border-color: #005a9e
}

.ms-Button.ms-Button--primary:focus {
  background-color: #005a9e;
  border-color: #004578
}

.ms-Button.ms-Button--primary:active {
  background-color: #0078d7;
  border-color: #0078d7
}

.ms-Button.ms-Button--primary.is-disabled,
.ms-Button.ms-Button--primary:disabled {
  background-color: #f4f4f4;
  border-color: #f4f4f4
}

.ms-Button.ms-Button--primary.is-disabled .ms-Button-label,
.ms-Button.ms-Button--primary:disabled .ms-Button-label {
  color: #a6a6a6
}

.ms-Button.ms-Button--small {
  min-width: 60px;
  min-height: 24px;
  height: auto;
  padding-top: 0;
  padding-bottom: 4px
}

.ms-Button.ms-Button--small .ms-Button-label {
  font-weight: 400;
  font-size: 12px
}

.ms-Button.ms-Button--hero {
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  position: relative
}

.ms-Button.ms-Button--hero .ms-Button-icon {
  color: #0078d7;
  display: inline-block;
  font-size: 12px;
  margin-right: 4px;
  padding-top: 5px;
  text-align: center
}

.ms-Button.ms-Button--hero .ms-Button-icon .ms-Icon {
  border-radius: 18px;
  border: 1px solid #0078d7;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  width: 18px
}

.ms-Button.ms-Button--hero .ms-Button-label {
  color: #0078d7;
  font-size: 21px;
  font-weight: 100;
  position: relative;
  text-decoration: none;
  vertical-align: top
}

.ms-Button.ms-Button--hero:focus .ms-Button-icon,
.ms-Button.ms-Button--hero:hover .ms-Button-icon {
  color: #005a9e
}

.ms-Button.ms-Button--hero:focus .ms-Button-icon .ms-Icon,
.ms-Button.ms-Button--hero:hover .ms-Button-icon .ms-Icon {
  border: 1px solid #005a9e
}

.ms-Button.ms-Button--hero:focus .ms-Button-label,
.ms-Button.ms-Button--hero:hover .ms-Button-label {
  color: #004578
}

.ms-Button.ms-Button--hero:active .ms-Button-icon {
  color: #0078d7
}

.ms-Button.ms-Button--hero:active .ms-Button-icon .ms-Icon {
  border: 1px solid #0078d7
}

.ms-Button.ms-Button--hero:active .ms-Button-label {
  color: #0078d7
}

.ms-Button.ms-Button--hero.is-disabled .ms-Button-icon,
.ms-Button.ms-Button--hero:disabled .ms-Button-icon {
  color: #c8c8c8
}

.ms-Button.ms-Button--hero.is-disabled .ms-Button-icon .ms-Icon,
.ms-Button.ms-Button--hero:disabled .ms-Button-icon .ms-Icon {
  border: 1px solid #c8c8c8
}

.ms-Button.ms-Button--hero.is-disabled .ms-Button-label,
.ms-Button.ms-Button--hero:disabled .ms-Button-label {
  color: #a6a6a6
}

.ms-Button.ms-Button--compound {
  display: block;
  height: auto;
  max-width: 280px;
  min-height: 72px;
  padding: 20px
}

.ms-Button.ms-Button--compound .ms-Button-label {
  display: block;
  font-weight: 600;
  position: relative;
  text-align: left;
  margin-top: -5px
}

.ms-Button.ms-Button--compound .ms-Button-description {
  color: #666;
  display: block;
  font-weight: 400;
  font-size: 12px;
  position: relative;
  text-align: left;
  top: 3px
}

.ms-Button.ms-Button--compound:hover .ms-Button-description {
  color: #212121
}

.ms-Button.ms-Button--compound:focus {
  border-color: #0078d7;
  background-color: #f4f4f4
}

.ms-Button.ms-Button--compound:focus .ms-Button-label {
  color: #333
}

.ms-Button.ms-Button--compound:focus .ms-Button-description {
  color: #666
}

.ms-Button.ms-Button--compound:active {
  background-color: #0078d7
}

.ms-Button.ms-Button--compound:active .ms-Button-description,
.ms-Button.ms-Button--compound:active .ms-Button-label {
  color: #fff
}

.ms-Button.ms-Button--compound.is-disabled .ms-Button-description,
.ms-Button.ms-Button--compound.is-disabled .ms-Button-label,
.ms-Button.ms-Button--compound:disabled .ms-Button-description,
.ms-Button.ms-Button--compound:disabled .ms-Button-label {
  color: #a6a6a6
}

.ms-Button.ms-Button--compound.is-disabled:active,
.ms-Button.ms-Button--compound.is-disabled:focus,
.ms-Button.ms-Button--compound:disabled:active,
.ms-Button.ms-Button--compound:disabled:focus {
  border-color: #f4f4f4;
  background-color: #f4f4f4
}

.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-description,
.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-label,
.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-description,
.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-label,
.ms-Button.ms-Button--compound:disabled:active .ms-Button-description,
.ms-Button.ms-Button--compound:disabled:active .ms-Button-label,
.ms-Button.ms-Button--compound:disabled:focus .ms-Button-description,
.ms-Button.ms-Button--compound:disabled:focus .ms-Button-label {
  color: #a6a6a6
}
</style>
