<script lang="ts">
import { defineComponent } from "vue";
import { apiRequest } from "./../service/ApiCall";
import { mutations, getters } from "../store/store";
import { weatherData } from "../models/weatherData";

export default defineComponent({
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    async basicCall() {
      if (!this.searchValue) return;
      
      try {
        const call = await apiRequest(this.searchValue);
        mutations.setWeatherCity(call as weatherData);
        return call;
      } catch (error) {
        console.error('Error making API call', error);
      }
    },
  },
});
</script>

<template>
  <div class="input">
    <h1>input</h1>
    <input v-model="searchValue" @input="basicCall" type="text" />
  </div>
</template>

<style scoped>
.input {
  border: solid red 1px;
}
</style>
