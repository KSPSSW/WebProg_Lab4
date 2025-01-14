<template>
  <q-page padding>

    <div v-for="p in products" :key="p.id">
      <ProductCard :product="p" @select="select"></ProductCard>
    </div>


    <CounterComponent :num="2" @update="(num: number) => {
      console.log('Update counter 1 :' + num)
    }"></CounterComponent>
    <CounterComponent :num="4" @update="update2"></CounterComponent>
  </q-page>
</template>

<script setup lang="ts">
import CounterComponent from 'src/components/CounterComponent.vue'
import ProductCard from 'src/components/ProductCard.vue'
import type { Product } from 'src/models';
import { ref } from 'vue';
const products = ref<Product[]>([
  {
    id: 1,
    name: 'Coffee 1',
    price: 20,
    size: 'ML',
    image: 'product1.png',
  },
  {
    id: 2,
    name: 'Coffee 2',
    price: 20,
    size: 'ML',
    image: 'product2.png',
  },
  {
    id: 3,
    name: 'Coffee 3',
    price: 20,
    size: 'ML',
    image: 'product3.png',
  },
  {
    id: 4,
    name: 'Coffee 4',
    price: 20,
    size: 'ML',
    image: 'product4.png',
  },
  {
    id: 5,
    name: 'Coffee 5',
    price: 20,
    size: 'ML',
    image: 'product5.png',
  },
  {
    id: 6,
    name: 'Coffee 6',
    price: 20,
    size: 'ML',
    image: 'product6.png',
  },
  {
    id: 7,
    name: 'Coffee 7',
    price: 20,
    size: 'ML',
    image: 'product7.png',
  },
  {
    id: 8,
    name: 'Coffee 8',
    price: 20,
    size: 'ML',
    image: 'product8.png',
  },
  {
    id: 9,
    name: 'Coffee 9',
    price: 20,
    size: 'ML',
    image: 'product9.png',
  },
  {
    id: 10,
    name: 'Coffee 10',
    price: 20,
    size: 'ML',
    image: 'product10.png',
  },
])

function update2(num: number) {
  console.log('Update counter 2 :' + num)
}

function select(product: Product) {
  console.log(product)
}
</script>
