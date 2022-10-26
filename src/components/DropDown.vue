<template>
  <div class="dropdown">
    <a class="btn btn-outline-light my-2 dropdown-toggle" href="#" role="button" id="headerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      {{ title }}
    </a>

    <ul class="dropdown-menu" aria-labelledby="headerDropdown">
      <DropdownItem v-for="item in dropdownMenus" :key="item.id" :disabled="item.disabled">
        <a href="#" class="dropdown-item">{{ item.name }}</a>
      </DropdownItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import DropdownItem from './DropdownItem.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const dropdownMenus = ref([
  { id: 0, name: '新建文章', disabled: false },
  { id: 1, name: '编辑资料', disabled: true },
  { id: 2, name: '退出登录', disabled: false }
])
</script>

<style lang="scss" scoped></style>
