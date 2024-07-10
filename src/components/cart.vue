<script lang="ts">
import { defineComponent, computed } from 'vue';
import { getters } from '../store/store';

export default defineComponent({
  setup() {
    const weatherItem = computed(() => getters.weatherCity());
    return {
      weatherItem,
    };
  }
});
</script>

<template>
  <div class="cart">
    <h1>cart</h1>
    <p>{{ weatherItem }}</p>
  </div>
</template>

<style scoped>
.cart {
  border: solid red 1px;
}
</style>

export const getters = {
  weatherCity: () => store.dataTodisplay,
}

valeur en html "() => store.dataTodisplay"