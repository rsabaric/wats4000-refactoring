<template>
  <div>
    <h2>Five Day Hourly Forecast <span v-if="weatherData"> for {{ weatherData.city.name }}, {{weatherData.city.country }}</span></h2>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{ name: 'CurrentWeather', params: { cityId: $route.params.cityId } }">Current Weather <span v-if="weatherData"> for {{ weatherData.city.name }}, {{weatherData.city.country }}</span></router-link>
    </p>

    <ul v-if="weatherData && errors.length===0" class="forecast">
      <li v-for="forecast in weatherData.list">
        <h3>{{ forecast.dt|formatDate }}</h3>

        <weather-summary v-bind:weatherData="forecast.weather"></weather-summary>
        <weather-data v-bind:weatherData="forecast.main"></weather-data>
      </li>
    </ul>
    <div v-else-if="errors.length > 0">
    <error-list v-bind:errorslist="errors"></error-list>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import {API} from '@/common/api';
import CommonFilters from '@/common/filters.js';
import WeatherSummary from '@/components/WeatherSummary';
import WeatherData from '@/components/WeatherData';
import ErrorList from '@/components/ErrorList';

export default {
  name: 'Forecast',
  data () {
    return {
      weatherData: null,
      errors: [],
      query: ''
    }
  },
  created () {
    API.get('forecast', {
      params: {
          id: this.$route.params.cityId
      }
    })
    .then(response => {
      this.weatherData = response.data
    })
    .catch(error => {
      this.errors.push(error)
    });
  },
  filters: CommonFilters,
  components: {
    'weather-summary': WeatherSummary,
    'weather-data': WeatherData,
    'error-list': ErrorList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 200px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
}

a {
  color: #42b983;
}

</style>


