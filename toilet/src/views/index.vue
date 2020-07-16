<template>
  <div class="main">
      <lineChart></lineChart>
      <Map></Map>
  </div>
</template>

<script>
import lineChart from './vcharts/line/line'
import Map from './map/baiduMap'
export default {
  name: "index",
  components:{
    lineChart,
    Map
  },
  data() {
    return {
      value: 0,
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: true
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          sortable: true
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
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
</style>>


