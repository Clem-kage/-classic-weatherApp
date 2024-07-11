import { reactive } from 'vue'
import { weatherData } from '../models/weatherData'

const store = reactive({
    dataTodisplay: {} as weatherData
})

export const getters = {
  weatherCity: () => store.dataTodisplay,
}

export const mutations = {
  setWeatherCity: (weatherData: weatherData) => (store.dataTodisplay = weatherData),
  initWeatherForm: () => (store.dataTodisplay = {} as weatherData)
}

export default {
  store,
  getters,
  mutations
}



