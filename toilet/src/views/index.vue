<template>
  <div class="main">
      <!-- <lineChart></lineChart> -->
      <!-- <Map></Map> -->
      <!-- <Home/> -->
      <Index></Index>
  </div>
</template>

<script>
import lineChart from './vcharts/line/line'
import Map from './map/baiduMap'
import Home from '../components/home'
import Index from '../components/index'
export default {
  name: "index",
  components:{
    lineChart,
    Map,
    Home,
    Index
  },
  data() {
    return {

    }
  }
};
</script>

<style lang="stylus" scoped>
.main {
  p {
    font-size: 18px;
    color: red;
    text-align: center;
  }
}
</style>


