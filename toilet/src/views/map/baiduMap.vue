<template>
  <div>
    <baidu-map
      class="map"
      :center="map.center"
      :zoom="map.zoom"
      @ready="handler"
      :mapStyle="mapStyle"
    >
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!-- 地图类型控件 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <!-- 加入城市切换控件 -->
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
      <!--定位-->
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <!--点-->
      <bm-marker
        :position="map.center"
        :dragging="map.dragging"
        animation="BMAP_ANIMATION_BOUNCE"
        @click="infoWindowOpen"
      >
        <!--提示信息-->
        <bm-info-window :show="map.show" @close="infoWindowClose" @open="infoWindowOpen">Hello~</bm-info-window>
      </bm-marker>
      <bm-view class="map"></bm-view>
      <bm-local-search keyword="公共厕所" :nearby="map" :auto-viewport="true" :panel="false"></bm-local-search>//矩形
      <bm-polygon :path="polygonPath"></bm-polygon>

      <bm-local-search keyword="公共厕所" :nearby="map" :auto-viewport="true" :panel="false"></bm-local-search>
      <bm-circle :center="map.center" :radius="map.radius"></bm-circle>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        center: { lng: 114.09679, lat: 22.55361 },
        zoom: 15,
        show: false,
        dragging: false,
        radius: 1000
      },
      mapStyle: {
        styleJson: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: {
              hue: "#007fff",
              saturation: 89
            }
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#ffffff"
            }
          }
        ]
      },
      pStart: {
        lng: 114.020254,
        lat: 22.540325
      },
      pEnd: {
        lng: 114.159384,
        lat: 22.556881
      }
    };
  },
  computed: {
    bounds() {
      const { pStart, pEnd } = this;
      return {
        sw: { lng: pStart.lng, lat: pStart.lat },
        ne: { lng: pEnd.lng, lat: pEnd.lat }
      };
    },
    polygonPath() {
      const { pStart, pEnd } = this;
      return [
        { lng: pStart.lng, lat: pStart.lat },
        { lng: pEnd.lng, lat: pStart.lat },
        { lng: pEnd.lng, lat: pEnd.lat },
        { lng: pStart.lng, lat: pEnd.lat }
      ];
    }
  },
  methods: {
    handler({ BMap, map }) {
      let me = this;
      console.log("map", BMap, map);
      // 鼠标缩放
      map.enableScrollWheelZoom(true);
      // 点击事件获取经纬度
      map.addEventListener("click", function(e) {
        console.log(e.point.lng, e.point.lat);
      });
    },
    infoWindowClose() {
      this.map.show = false;
    },
    infoWindowOpen() {
      this.map.show = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.map {
  width: 70%;
  margin: 50px auto;
  height: 800px;
}
/deep/ .BMap_cpyCtrl {
  display: none;
}
/deep/ .anchorBL {
  display: none;
}
</style>