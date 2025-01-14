<template>
  <q-page padding style="width: 600px">
    <div>POS Page</div>
    <div class="row fullscreen">
      <div class="col-6">
        <q-scroll-area style="height: 100%; max-width: 600px">
          <div class="row">
            <div v-for="p in products" :key="p.id" class="col-4">
              <ProductCard :product="p" @select="select"></ProductCard>
            </div>
          </div>
        </q-scroll-area>

        <div class="col-6">
          <q-scroll-area style="height: 80vh; max-width: 400px">
            <table class="q-table">
              <thead>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>amount</th>
              </thead>
              <tbody>
                <tr v-for="item in productItem" :key="item.id">
                  <td class="text-center">{{ item.id }}</td>
                  <td class="text-center">{{ item.product.name }}</td>
                  <td class="text-center">{{ item.product.price }}</td>
                  <td class="text-center">{{ item.amount }}</td>
                </tr>
              </tbody>
            </table>
          </q-scroll-area>

          <div class="text-h2">Total : {{ sumPrice }}</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ProductCard from 'src/components/ProductCard.vue'
import type { Product } from 'src/models'
import { computed, ref } from 'vue'
interface ProductItem {
  id: number
  product: Product
  amount: number
}
let lastProductItemId = 1

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

const productItem = ref<ProductItem[]>([])

function select(product: Product) {
  console.log(product)
  productItem.value.push({ id: lastProductItemId++, product: product, amount: 1 })
}

const sumPrice = computed(() => {
  let sum = 0
  for (let i = 0; i < productItem.value.length; i++) {
    sum = sum + productItem.value[i]!.product.price
  }
  return sum
})
</script>
