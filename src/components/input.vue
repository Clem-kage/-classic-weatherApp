<script lang="ts">
import { defineComponent } from "vue";
import { apiRequest } from "./../service/ApiCall";
import { mutations } from "../store/store";
import { weatherData } from "../models/weatherData";

export default defineComponent({
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    resetForm(){
        mutations.initWeatherForm();
        alert('wrong city')
    },
    async basicCall() {
      if (!this.searchValue) return;
      
      try {
        const call = await apiRequest(this.searchValue);
        !call ? this.resetForm() : mutations.setWeatherCity(call as weatherData);
        // console.log(call)
        // return call;
      } catch (error) {
        console.error('Error making API call', error);
      }
    },
  },
});
</script>

<template>
  <div class="card">
    <input class="form-floating mb-3" v-model="searchValue"  type="text" />
    <button @click="basicCall" type="button" class="btn btn-primary">call</button>
  </div>

</template>

<style scoped>
.input {
  width: 400px;
}
</style>
