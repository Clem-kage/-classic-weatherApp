<script  lang="ts">
 import { defineComponent } from 'vue';
import Cart from './../components/cart.vue'
 import Input from './../components/input.vue'
 import { weatherData } from '../models/weatherData';
 export default defineComponent({
    components: {
    Input,
    Cart
  },
  data(){
    return {
    }
  },
  methods:{
  }
 })
 
</script>

<template>
    <div class="form-floating mb-3 d-flex flex-column justify-content-center">
        <Input/>
        <Cart/>
    </div>
</template>

<style scoped>

.result{
    border: solid green 1px;
    width: 100%
}
</style>
