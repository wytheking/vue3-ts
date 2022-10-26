<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">WYTHE专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :title="`你好 ${ user.name }`" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import DropDown from './DropDown.vue'
export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}

const props = defineProps({
  user: {
    type: Object as PropType<UserProps>,
      required: true
  }
})

</script>

<style lang="scss" scoped></style>
