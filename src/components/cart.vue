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
  <div class="card">
    <h2 class="text-uppercase">{{weatherItem.location}}</h2> 
    <p class="fw-bold">température: {{ weatherItem.temperature }}</p>
    <p>description: {{ weatherItem.description }}</p>
  </div>
</template>

<style scoped>
.cart {
  border: solid red 1px;
}

</style>

