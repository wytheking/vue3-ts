<template>
  <li 
    class="dropdown-option"
    :class="disabled ? 'is-disabled' : ''"
  >
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.dropdown-option.is-disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
