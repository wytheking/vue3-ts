<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
      <div class="card h-100 shadow-sm ">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text">{{ column.description }}</p>
          <a class="btn btn-outline-primary" href="#">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true
  }
})

const columnList = computed(() => {
  return props.list.map(column => {
    if (!column.avatar) {
      // column.avatar = require('@/assets/column.jpeg')
      column.avatar = new URL('../assets/column.jpeg', import.meta.url).href
    }
    return column
  })
})
</script>

<style lang="scss" scoped></style>
