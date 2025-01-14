<template>
  <div>{{ num }}</div>
  <div>{{ data }}</div>
  <div>
    <button @click="dec">-</button>
    <button @click="inc">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted /*onBeforeUpdate, onUpdated*/ } from 'vue';

const props = defineProps<{
  num: number
}>()

const emit = defineEmits<{
  update: [num: number]
}>()

onMounted(() => {
  data.value = props.num
})

/*
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
}) */

const data = ref(2)

const inc = () => {
  data.value++
  emit('update', data.value)
}

const dec = () => {
  data.value--
  emit('update', data.value)
}
</script>
