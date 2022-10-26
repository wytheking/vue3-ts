<script setup lang="ts">
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const userInfo: UserProps = {
  isLogin: true,
  name: 'WYTHE',
  id: 1
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '测试1',
    avatar: 'https://img2.baidu.com/it/u=3847501523,3812026523&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
    description: '测试简介1……',
  },
  {
    id: 2,
    title: '测试2',
    avatar: 'https://img2.baidu.com/it/u=1329314752,875125660&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
    description: '测试简介2……',
  },
  {
    id: 3,
    title: '测试3',
    // avatar: 'https://img1.baidu.com/it/u=2425496005,2401702709&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400',
    description: '测试简介3……',
  },
  {
    id: 4,
    title: '测试4',
    avatar: 'https://img1.baidu.com/it/u=3689717152,799770811&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
    description: '测试简介4……',
  }
]

</script>

<template>
  <div class="container">
    <GlobalHeader :user="userInfo" />
    <ColumnList :list="testData" />
  </div>
</template>

<style scoped></style>
