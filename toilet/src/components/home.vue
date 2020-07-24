<template>
  <div>
    <div class="heard height_st">
      <div class="content height_st">
        <Card class="box_01 height_st">
          <div class="png_all">
            <img
              class="first_img_01"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595338812804&di=e30fe7f68016bf5448315c9baaf6a690&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg"
              alt
            />
            <div>
              <p class="top_num">管理公厕数量</p>
              <p class="num_stle">2005</p>
            </div>
          </div>
          <div class="line_"></div>
          <div class="botom_style">
            <div>
              正常厕：
              <span style="color:green">1200</span>
            </div>
            <div style="margin-left: 20px;">
              异常厕：
              <span style="color:red">34</span>
            </div>
          </div>
        </Card>
        <Card class="box_02 height_st">
          <div class="png_all">
            <img
              class="first_img_01"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595338812804&di=e30fe7f68016bf5448315c9baaf6a690&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg"
              alt
            />
            <div>
              <p class="top_num">当月如厕人数</p>
              <p class="num_stle">1314</p>
            </div>
          </div>
          <div class="line_"></div>
          <div class="botom_style">
            <div>
              男性：
              <span>1200</span>
            </div>
            <div style="margin-left: 20px;">
              女性：
              <span>34</span>
            </div>
          </div>
        </Card>
        <Card class="box_03 height_st">
          <div class="png_all">
            <img
              class="first_img_01"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595338812804&di=e30fe7f68016bf5448315c9baaf6a690&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg"
              alt
            />
            <div>
              <div style="display: flex;justify-content: space-between;">
                <p class="top_num">当月花费</p>
                <p style="font-size: 17px;">￥149,116</p>
              </div>
              <div style="display: flex;">
                <p class="num_stle">电费:￥54,558</p>
                <span></span>
                <p class="wast_stle">水费:￥94,558</p>
              </div>
            </div>
          </div>
          <div class="line_"></div>
          <div class="botom_style">
            <div>
              80，232（千瓦.时）
              <span>同比11％</span>
            </div>
            <div style="margin-left: 121px;">
              13508（m³）
              <span>同比11％</span>
            </div>
          </div>
        </Card>
        <Card class="box_04 height_st">
          <div class="png_all">
            <img
              class="first_img_01"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595338812804&di=e30fe7f68016bf5448315c9baaf6a690&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg"
              alt
            />
            <div>
              <p class="top_num">当日异常情况</p>
              <p class="num_stle">1314次</p>
            </div>
          </div>
          <div class="line_"></div>
          <div class="botom_style">
            <div>
              已处理：
              <span>1200次</span>
            </div>
            <div style="margin-left: 20px;">
              未处理：
              <span style="color: red;">34次</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <Card class="center_div">
      <div class="flex_sty">
        <div class="tit_cent">
          <div class="title_01">当日公厕报警情况</div>
          <div class="title_line"></div>
          <div id="bing" style="width:400px;height:400px;"></div>
        </div>
        <div class="map_cent">
          <div id="allmap" class="map_all"></div>
        </div>
        <div class="tit_cent">
          <div class="png_all">
            <img
              style="margin:15px"
              class="first_img_01"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595338812804&di=e30fe7f68016bf5448315c9baaf6a690&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg"
              alt
            />
            <div>
              <p class="top_num color_w">当日公厕花费</p>
              <p class="num_stle">￥558</p>
            </div>
          </div>
          <div class="line_w"></div>
          <div class="botom_dn">
            <div style="font-size: 20px;color: #000;margin: 15px;">
              电费:
              <span>￥238</span>
            </div>
            <div style="margin-left: 15px;">
              电耗：
              <span>232（千瓦.时）</span>
            </div>
            <div style="font-size: 20px;color: #000;margin: 15px;">
              水费:
              <span>￥200</span>
            </div>
            <div style="margin-left: 15px;">
              水耗：
              <span>32（m³）</span>
            </div>
          </div>
          <div style="text-align: center;">
            <p>统计时间截至：今日12点22分</p>
          </div>
        </div>
      </div>
    </Card>
    <Card class="bottom_div">
      <div style="display: flex;">
        <div class="bottom_01">
          <div style="margin:10px;font-size:18px;color:#000;font-weight: 700;">昨日人流量</div>
          <div style="width: 95%;height: 1px;background-color: #ccc;"></div>
          <div style="margin:10px;">
            平均时段人流量
            <span style="color: red;margin-left: 30px;">38人</span>
          </div>
          <div id="colunm" style="width:800px;height:400px;"></div>
        </div>
        <div class="bottom_02">
          <div class="w_355 fl pat60">
            <ul class="tab clearfix msf">
              <li class="cur">
                <a target="_blank">如厕数</a>
                <i></i>
              </li>
              <li>
                <a target="_blank">花费数</a>
                <i></i>
              </li>
              <li>
                <a target="_blank">报警数</a>
                <i></i>
              </li>
            </ul>
            <div class="tab_nr">
              <ul style="display:block;padding-top: 10px;">
                <div id="oneEchart" style="width:400px;height:430px;"></div>
              </ul>
              <ul style="padding-top: 10px;">
                <div id="twoEchart" style="width:400px;height:430px;"></div>
              </ul>
              <ul style="padding-top: 10px;">
                <div id="threeEchart" style="width:400px;height:430px;"></div>
              </ul>
            </div>
          </div>
        </div>
        <div class="bottom_03">
          <div class="bot_tab">
            <ul class="bo_tab clearfix bot_tab">
              <li class="cur_">
                <a target="_blank">今日</a>
                <i></i>
              </li>
              <li>
                <a target="_blank">本周</a>
                <i></i>
              </li>
              <li>
                <a target="_blank">本月</a>
                <i></i>
              </li>
              <li>
                <a target="_blank">全年</a>
                <i></i>
              </li>
            </ul>
            <div class="tab_nr_1">
              <ul style="display:block;padding-top: 10px;">
                <div class="botom_next">
                  <div class="botom_title">如厕数排名</div>
                  <div v-for="(item,index) in dataLists" :key="index">
                    <div class="botom_list">
                      <div :class="[{'active_sty':index<3},'bot_index']">{{index+1}}</div>
                      <div class="bot_index">{{item.name}}</div>
                      <div class="bot_index">{{item.num}}</div>
                    </div>
                  </div>
                </div>
              </ul>
              <ul style="padding-top: 10px;">
                <div class="botom_next">
                  <div class="botom_title">如厕数排名8</div>
                  <div v-for="(item,index) in dataLists" :key="index">
                    <div class="botom_list">
                      <div :class="[{'active_sty':index<3},'bot_index']">{{index+1}}</div>
                      <div class="bot_index">{{item.name}}</div>
                      <div class="bot_index">{{item.num}}</div>
                    </div>
                  </div>
                </div>
              </ul>
              <ul style="padding-top: 10px;">
                <div class="botom_next">
                  <div class="botom_title">如厕数排名9</div>
                  <div v-for="(item,index) in dataLists" :key="index">
                    <div class="botom_list">
                      <div :class="[{'active_sty':index<3},'bot_index']">{{index+1}}</div>
                      <div class="bot_index">{{item.name}}</div>
                      <div class="bot_index">{{item.num}}</div>
                    </div>
                  </div>
                </div>
              </ul>
              <ul style="padding-top: 10px;">
                <div class="botom_next">
                  <div class="botom_title">如厕数排名10</div>
                  <div v-for="(item,index) in dataLists" :key="index">
                    <div class="botom_list">
                      <div :class="[{'active_sty':index<3},'bot_index']">{{index+1}}</div>
                      <div class="bot_index">{{item.name}}</div>
                      <div class="bot_index">{{item.num}}</div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      dataLists: [
        { name: "东湖路A厕", num: "323,234" },
        { name: "东湖路B厕", num: "32,234" },
        { name: "东湖路C厕", num: "353,234" },
        { name: "东湖路D厕", num: "363,234" },
        { name: "东湖路E厕", num: "373,234" },
        { name: "东湖路F厕", num: "313,234" },
        { name: "东湖路G厕", num: "103,234" },
        { name: "东湖路G厕", num: "103,234" },
      ],
    };
  },
  created() {
    this.$nextTick(() => {
      this.echartData();
      this.initMap();
      this.columnEchartData();
      this.tabJq();
      this.weekTab();
      this.oneEchartData();
      this.twoEchartData();
      this.threeEchartData();
    });
  },
  methods: {
    hanlderWeek(index) {
      console.log(index, "index");
    },
    echartData() {
      var myChart = echarts.init(document.getElementById("bing"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}次 ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["全部公厕", "公厕A", "公厕B"],
        },
        series: [
          {
            name: "报警次数",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "全部公厕" },
              { value: 310, name: "公厕A" },
              { value: 234, name: "公厕B" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    initMap() {
      var map = new BMap.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(114.09679, 22.55361), 16); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      );
      map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var geoc = new BMap.Geocoder();
      map.addEventListener("click", function (e) {
        //给地图添加点击事件
        map.clearOverlays();
        console.log(e);
        var lng = e.point.lng;
        var lat = e.point.lat;
        //创建标注位置
        var pt = new BMap.Point(lng, lat);
        var myIcon = new BMap.Icon(
          "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
          new BMap.Size(300, 157)
        );
        var marker2 = new BMap.Marker(pt, { icon: myIcon }); // 创建标注
        map.addOverlay(marker2); // 将标注添加到地图中
        //alert(e.point.lng + "," + e.point.lat);
        geoc.getLocation(pt, function (rs) {
          var addComp = rs.address;
          alert("当前位置是:" + addComp);
          console.log(rs);
        });
      });
    },
    columnEchartData() {
      var myChart = echarts.init(document.getElementById("colunm"));
      var option = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true,
        },
        legend: {
          data: ["公厕A", "公厕B", "公厕C"],
          left: "6%",
          top: "top",
          itemWidth: 15, //图例图标的宽
          itemHeight: 15, //图例图标的高
          textStyle: {
            color: "#3a6186",
            fontSize: 20,
          },
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
          },
          right: "6%",
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "01-01",
              "01-02",
              "01-03",
              "01-04",
              "01-05",
              "01-06",
              "01-07",
            ],
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#e7e7e7", //轴线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              show: false, //去掉分割线
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#e7e7e7"], //分割线的颜色
              },
            },
          },
        ],
        series: [
          {
            name: "公厕A",
            type: "bar",
            barWidth: 20,
            data: [20, 35, 55, 60, 120, 150, 140],
            itemStyle: {
              normal: {
                color: "#3BA1FF", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#3BA1FF", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
          {
            name: "公厕B",
            type: "bar",
            barWidth: 20,
            data: [40, 50, 90, 110, 130, 160, 150],
            itemStyle: {
              normal: {
                color: "#4FCB74", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#4FCB74", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
          {
            name: "公厕C",
            type: "bar",
            barWidth: 20,
            data: [30, 40, 60, 100, 120, 140, 160],
            itemStyle: {
              normal: {
                color: "#FBD438", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#FBD438", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    tabJq() {
      $(".tab li").hover(
        function () {
          $(this).addClass("cur").siblings().removeClass("cur");
          $(this).find("i").css("right", "0px").animate({ right: "74px" }, 500);
          $(".tab_nr ul").eq($(this).index()).show().siblings().hide();
        },
        function () {
          $(this).find("i").css("right", "74px");
        }
      );
    },
    weekTab() {
      $(".bo_tab li").hover(
        function () {
          $(this).addClass("cur_").siblings().removeClass("cur_");
          $(this).find("i").css("right", "0px").animate({ right: "74px" }, 500);
          $(".tab_nr_1 ul").eq($(this).index()).show().siblings().hide();
        },
        function () {
          $(this).find("i").css("right", "74px");
        }
      );
    },
    oneEchartData() {
      var myChart = echarts.init(document.getElementById("oneEchart"));
      var option = {
        title: {
          show: true,
          text: "厕所数排名",
          x: "20px",
          y: "10px",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true,
        },
        legend: {
          data: [""],
          left: "6%",
          top: "top",
          itemWidth: 15, //图例图标的宽
          itemHeight: 15, //图例图标的高
          textStyle: {
            color: "#3a6186",
            fontSize: 20,
          },
        },
        toolbox: {
          show: false,
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
          },
          right: "6%",
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["A", "B", "C", "D", "E", "F", "G"],
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#e7e7e7", //轴线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              show: false, //去掉分割线
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#e7e7e7"], //分割线的颜色
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: [20, 35, 55, 60, 120, 150, 140],
            itemStyle: {
              normal: {
                color: "#3BA1FF", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#3BA1FF", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    twoEchartData() {
      var myChart = echarts.init(document.getElementById("twoEchart"));
      var option = {
        title: {
          show: true,
          text: "花费数排名",
          x: "20px",
          y: "10px",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true,
        },
        legend: {
          data: [""],
          left: "6%",
          top: "top",
          itemWidth: 15, //图例图标的宽
          itemHeight: 15, //图例图标的高
          textStyle: {
            color: "#3a6186",
            fontSize: 20,
          },
        },
        toolbox: {
          show: false,
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
          },
          right: "6%",
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["A", "B", "C", "D", "E", "F", "G"],
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#e7e7e7", //轴线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              show: false, //去掉分割线
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#e7e7e7"], //分割线的颜色
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: [120, 100, 90, 80, 70, 60, 50],
            itemStyle: {
              normal: {
                color: "#3BA1FF", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#3BA1FF", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    threeEchartData() {
      var myChart = echarts.init(document.getElementById("threeEchart"));
      var option = {
        title: {
          show: true,
          text: "报警数排名",
          x: "20px",
          y: "10px",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "6%",
          right: "6%",
          bottom: "6%",
          containLabel: true,
        },
        legend: {
          data: [""],
          left: "6%",
          top: "top",
          itemWidth: 15, //图例图标的宽
          itemHeight: 15, //图例图标的高
          textStyle: {
            color: "#3a6186",
            fontSize: 20,
          },
        },
        toolbox: {
          show: false,
          feature: {
            magicType: { show: true, type: ["line", "bar"] },
          },
          right: "6%",
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["A", "B", "C", "D", "E", "F", "G"],
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#e7e7e7", //轴线的颜色
                width: "2", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              show: false, //去掉分割线
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //线
              show: false,
            },
            axisTick: {
              //刻度
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#3a6186", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#e7e7e7"], //分割线的颜色
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: [220, 150, 90, 110, 140, 200, 100],
            itemStyle: {
              normal: {
                color: "#D9001B", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#D9001B", //值的颜色
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="stylus" scoped></style>