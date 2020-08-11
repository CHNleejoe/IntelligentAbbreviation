
<template>
  <div class="main_index">
    <div class="heard_index">
      <img src="../assets/imgs/heardbc.png" alt />
      <span>智慧公厕</span>
      <p class="getCurrentDate">{{this.getCurrentDate()}}</p>
      <p class="getLocaleTime">{{this.getLocaleTime()}}</p>
      <div id="cweather"></div>
    </div>
    <div class="center_sty">
      <div class="d01">
        <div class="toilet_num">
          <div class="fist_01">当日能耗情况</div>
          <div class="fist_02">
            <div>
              <p class="title_01">电力消耗（千瓦时）</p>
              <p class="title_02">{{getByTodayObj.ele}}</p>
            </div>
            <div>
              <p class="title_01">水力消耗（m³）</p>
              <p class="title_02">{{getByTodayObj.water}}</p>
            </div>
          </div>
          <div
            style="text-align: center;font-size: 14px;color: #CFCFCF;padding:20px;"
          >统计时间截至：{{getByTodayObj.time}}</div>
        </div>

        <div class="toilet_num">
          <div class="fist_01">管理公厕数量/当月入厕人数统计</div>
          <div class="fist_02">
            <div>
              <p class="title_01">管理公厕数量</p>
              <p class="title_02">{{toiletNameObj.normalNumber+toiletNameObj.badNumber}}</p>
              <div style="display:flex">
                <p style="padding:10px;">
                  <span class="nomml">正常</span>
                  <span class="nomal_num">{{toiletNameObj.normalNumber}}</span>
                </p>
                <p style="padding:10px;">
                  <span class="nomml">异常</span>
                  <span class="nomal_num" style="color:red">{{toiletNameObj.badNumber}}</span>
                </p>
              </div>
            </div>
            <div>
              <p class="title_01">当月入厕人数</p>
              <p class="title_02">{{visitorsObj.maleNumber+visitorsObj.femaleNumber}}</p>
              <div style="display:flex">
                <p style="padding:10px;">
                  <span class="nomml">男性</span>
                  <span class="nomal_num" style="color:#fff">{{visitorsObj.maleNumber}}</span>
                </p>
                <p style="padding:10px;">
                  <span class="nomml">女性</span>
                  <span class="nomal_num" style="color:#fff">{{visitorsObj.femaleNumber}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="toilet_num">
          <div class="fist_01">当月能耗情况</div>
          <div class="fist_02">
            <div>
              <p class="title_01">当月电耗（千瓦时）</p>
              <p class="title_02">{{getByMonthObj.ele}}</p>
              <div style="text-align: center">
                <p style="padding:10px;">
                  <span class="nomml">同比</span>
                  <span class="nomal_num" style="color:rgb(1, 204, 75);">{{getByMonthObj.elePec}}%</span>
                </p>
              </div>
            </div>
            <div>
              <p class="title_01">当月水耗（m³）</p>
              <p class="title_02">{{getByMonthObj.water==null?0:getByMonthObj.water}}</p>
              <div style="text-align: center">
                <p style="padding:10px;">
                  <span class="nomml">同比</span>
                  <span class="nomal_num" style="color:red">{{getByMonthObj.waterPec}}%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d02">
        <div id="allmap" class="map_all"></div>
      </div>
      <div class="d01">
        <div class="toilet_num">
          <div class="fist_01">当日异常情况</div>
          <div style="width:88%;margin:20px auto">
            <p class="fist_ci">{{getExceptObj.total}}次</p>
            <Progress :percent="getExceptObj.total" status="active" style="color:#fff"></Progress>
            <div style="display:flex;justify-content: space-between;margin-top:12px;">
              <p style="font-size:14px;color:#fff;">
                已处理：
                <span style="color:#01CC4B;font-size:18px;">{{getExceptObj.dealed}}次</span>
              </p>
              <p style="font-size:14px;color:#fff;">
                未处理：
                <span
                  style="color:#B80203;font-size:18px;margin-right: 25px;"
                >{{getExceptObj.undealed}}次</span>
              </p>
            </div>
          </div>
        </div>
        <div class="toilet_num">
          <div class="fist_01">当日公厕报警情况</div>
          <!-- <div v-if="this.toiletName.length==0" class="noDataShow">暂无数据</div> -->
          <Tabs size="small" @on-click="handerTabPane">
            <Tab-pane label="全部">
              <div id="bing" style="width:100%;height:250px;margin-top: 10px;"></div>
            </Tab-pane>
            <Tab-pane :label="item" v-for="(item,index) in this.toiletName" :key="index">
              <div class="todayNone">{{onlyNoe.toiletName}}当日报警情况</div>
              <div class="onlyNoe">{{onlyNoe.total}}次</div>
            </Tab-pane>
          </Tabs>
        </div>
      </div>
    </div>
    <div class="bottom_sty">
      <div class="big_div">
        <div class="border_style border-width_01">
          <div class="color_bc">昨日人流量</div>
          <div class="card_sy">
            <div id="lineEchart" style="height:350px;margin: 30px;"></div>
            <!-- <Tabs size="small">
              <Tab-pane label="全部">
              </Tab-pane>
              <Tab-pane label="公厕A">标签二的内容</Tab-pane>
              <Tab-pane label="公厕B">标签三的内容</Tab-pane>
            </Tabs>-->
          </div>
          <!-- <div class="titile_st">
            平均时段人流量：
            <span style="color:#76FFFF;font-size:16px;">39</span>
          </div>-->
        </div>
        <div class="border_style border-width_02">
          <div class="line_02"></div>
          <div class="color_bc">
            <Tabs size="small" @on-click="handleTabClick">
              <Tab-pane label="评分数" name="score">
                <div id="getScore" style="width:500px;height:410px;padding:20px;"></div>
              </Tab-pane>
              <Tab-pane label="入厕数" name="gotoilet">
                <div id="goToilet" style="width:500px;height:410px;padding:20px;"></div>
              </Tab-pane>
              <Tab-pane label="报警数" name="callpolice">
                <div
                  id="callPolice"
                  style="width:500px;height:410px;padding:20px;"
                  v-if="isShowCall"
                ></div>
                <div
                  v-if="!isShowCall"
                  style="color:#76ffff;text-align:center;margin-right:260px;margin-top:110px;font-size:28px;"
                >暂无数据</div>
              </Tab-pane>
              <Tab-pane label="电耗数" name="powerele">
                <div id="powerConsumption" style="width:500px;height:410px;padding:20px;"></div>
              </Tab-pane>
              <Tab-pane label="水耗数" name="waterconsup">
                <div id="waterConsumption" style="width:500px;height:410px;padding:20px;"></div>
              </Tab-pane>
            </Tabs>
          </div>
          <div class="color_bc">
            <Tabs size="small" @on-click="handleTabClickWeek" ref="tabs">
              <Tab-pane label="今日" name="today">
                <div class="title_poinr">排名</div>
                <div v-for="(item,index) in callPoliceData" :key="item.id" class="conte_02">
                  <div :class="[index<3?'active_sty':'bottom_index','bot_index']">{{index+1}}</div>
                  <div class="bot_index">{{item.toiletName}}</div>
                  <div class="bot_index">{{item.usedValue}}</div>
                </div>
              </Tab-pane>
              <Tab-pane label="本周" name="weeks">
                <div class="title_poinr">排名</div>
                <div v-for="(item,index) in weeksData" :key="item.id" class="conte_02">
                  <div :class="[index<3?'active_sty':'bottom_index','bot_index']">{{index+1}}</div>
                  <div class="bot_index">{{item.toiletName}}</div>
                  <div class="bot_index">{{item.total}}</div>
                </div>
              </Tab-pane>
              <Tab-pane label="本月" name="month">
                <div class="title_poinr">排名</div>
                <div v-for="(item,index) in monthData" :key="item.id" class="conte_02">
                  <div :class="[index<3?'active_sty':'bottom_index','bot_index']">{{index+1}}</div>
                  <div class="bot_index">{{item.toiletName}}</div>
                  <div class="bot_index">{{item.number}}</div>
                </div>
              </Tab-pane>
              <Tab-pane label="全年" name="year">
                <div class="title_poinr">排名</div>
                <div v-for="(item,index) in yearData" :key="item.id" class="conte_02">
                  <div :class="[index<3?'active_sty':'bottom_index','bot_index']">{{index+1}}</div>
                  <div class="bot_index">{{item.toiletName}}</div>
                  <div class="bot_index">{{item.number}}</div>
                </div>
              </Tab-pane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import echarts from "echarts";
export default {
  data() {
    return {
      toiletName: [],
      mapInit: "",
      toiletNameObj: {},
      visitorsObj: {},
      getByMonthObj: {},
      getByTodayObj: {},
      getExceptObj: {},
      getAlarmArr: [],
      listOnly: [],
      onlyNoe: {},
      flowByConditionArr: [],

      monthData: [],
      weeksData: [],
      yearData: [],
      callPoliceData: [],
      peopleData: [],

      keyDate: 0,
      proInfo: {},
      isShowCall: true,
      isHsaName: "today",
      tabTypeName: "score",
    };
  },
  methods: {
    setCookie(value) {
      localStorage.setItem("jeeplus.session.id", value);
    },
    handleTabClick(key) {
      console.log(key, "第一个");
      this.tabTypeName = key;
      if (this.isHsaName == "today") {
        if (key == "score") {
          this.getScoreNums();
        } else if (key == "gotoilet") {
          this.usingToilet();
        } else if (key == "callpolice") {
          this.todayCall();
        } else if (key == "powerele") {
          this.todayElePort();
        } else if (key == "waterconsup") {
          this.flowByCondition();
        }
      } else if (this.isHsaName == "weeks") {
        if (key == "score") {
          this.weeksScoreNums();
        } else if (key == "gotoilet") {
          this.weeksUsingToilet();
        } else if (key == "callpolice") {
          this.weeksCall();
        } else if (key == "powerele") {
          this.weeksElePort();
        } else if (key == "waterconsup") {
          this.weeksWater();
        }
      } else if (this.isHsaName == "month") {
        if (key == "score") {
          this.monthScoreNums();
        } else if (key == "gotoilet") {
          this.monthUsingToilet();
        } else if (key == "callpolice") {
          this.monthCall();
        } else if (key == "powerele") {
          this.monthElePort();
        } else if (key == "waterconsup") {
          this.monthWater();
        }
      } else if (this.isHsaName == "year") {
        if (key == "score") {
          this.yearScoreNums();
        } else if (key == "gotoilet") {
          this.yearUsingToilet();
        } else if (key == "callpolice") {
          this.yearCall();
        } else if (key == "powerele") {
          this.yearElePort();
        } else if (key == "waterconsup") {
          this.yearWater();
        }
      }
    },
    handleTabClickWeek(name) {
      console.log(`${this.tabTypeName}-${name}`);
      this.isHsaName = name;
      if (this.tabTypeName == "score" && name == "today") {
        this.getScoreNums();
      } else if (this.tabTypeName == "score" && name == "weeks") {
        this.weeksScoreNums();
      } else if (this.tabTypeName == "score" && name == "month") {
        this.monthScoreNums();
      } else if (this.tabTypeName == "score" && name == "year") {
        this.yearScoreNums();
      } else if (this.tabTypeName == "gotoilet" && name == "today") {
        this.usingToilet();
      } else if (this.tabTypeName == "gotoilet" && name == "weeks") {
        this.weeksUsingToilet();
      } else if (this.tabTypeName == "gotoilet" && name == "month") {
        this.monthUsingToilet();
      } else if (this.tabTypeName == "gotoilet" && name == "year") {
        this.yearUsingToilet();
      } else if (this.tabTypeName == "callpolice" && name == "today") {
        this.todayCall();
      } else if (this.tabTypeName == "callpolice" && name == "weeks") {
        this.weeksCall();
      } else if (this.tabTypeName == "callpolice" && name == "month") {
        this.monthCall();
      } else if (this.tabTypeName == "callpolice" && name == "year") {
        this.yearCall();
      } else if (this.tabTypeName == "powerele" && name == "today") {
        this.todayElePort();
      } else if (this.tabTypeName == "powerele" && name == "weeks") {
        this.weeksElePort();
      } else if (this.tabTypeName == "powerele" && name == "month") {
        this.monthElePort();
      } else if (this.tabTypeName == "powerele" && name == "year") {
        this.yearElePort();
      } else if (this.tabTypeName == "waterconsup" && name == "today") {
        this.flowByCondition();
      } else if (this.tabTypeName == "waterconsup" && name == "weeks") {
        this.weeksWater();
      } else if (this.tabTypeName == "waterconsup" && name == "month") {
        this.monthWater();
      } else if (this.tabTypeName == "waterconsup" && name == "year") {
        this.yearWater();
      }
    },
    tt() {
      $.ajax({
        url: "http://ip.ws.126.net/ipquery?ie=utf-8",
        dataType: "script",
        async: false,
        success: function (data) {
          var url = encodeURI(
            "http://wthrcdn.etouch.cn/weather_mini?city=" + lc
          );
          $.get({
            url: url,
            dataType: "json",
            async: false,
            success: function (data) {
              // console.log(data, "温度数据");
              var todayWeather = data.data.forecast[0];
              var tomorrowWeather = data.data.forecast[1];
              $("#cweather").html(
                "<div style='color:#fff'>" +
                  data.data.wendu +
                  "℃" +
                  "</div>" +
                  "<div style='color:#fff'>" +
                  lc +
                  "天气：" +
                  todayWeather.type +
                  "</div><div style='color:#fff'>今日温度</div>" +
                  "<div style='color:#fff'>" +
                  todayWeather.high +
                  todayWeather.low +
                  "</div><div style='color:#fff'>明日</div>" +
                  "<div style='color:#fff'>" +
                  tomorrowWeather.high +
                  tomorrowWeather.low +
                  "</div>"
              );
            },
          });
        },
      });
    },
    getLocaleTime() {
      var time = new Date();
      var strTime = time.toLocaleTimeString();
      return strTime;
    },
    getCurrentDate() {
      var myDate = new Date();
      var year = myDate.getFullYear(); //年
      var month = myDate.getMonth() + 1; //月
      var day = myDate.getDate(); //日
      var days = myDate.getDay();
      switch (days) {
        case 1:
          days = "星期一";
          break;
        case 2:
          days = "星期二";
          break;
        case 3:
          days = "星期三";
          break;
        case 4:
          days = "星期四";
          break;
        case 5:
          days = "星期五";
          break;
        case 6:
          days = "星期六";
          break;
        case 0:
          days = "星期日";
          break;
      }

      var str = year + "/" + month + "/" + day + "/" + days;

      return str;
    },
    handerTabPane(key) {
      this.onlyNoe = this.listOnly[key - 1];
    },
    initMap(datasAtt) {
      var map = new BMap.Map("allmap"); // 创建Map实例 { mapType: BMAP_HYBRID_MAP }
      this.mapInit = map;
      map.centerAndZoom(new BMap.Point(114.063977, 22.54899), 12); // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      );
      map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      let markerArr = datasAtt;
      for (var i = 0; i < markerArr.length; i++) {
        var p0 = markerArr[i].lnglat.split(",")[0];
        var p1 = markerArr[i].lnglat.split(",")[1];
        var maker = this.addMarker(
          new window.BMap.Point(p0, p1),
          markerArr[i],
          i
        );
      }
    },
    addMarker(point, pro, index) {
      let _this = this;
      //http://api.map.baidu.com/img/markers.png
      var myIcon = new BMap.Icon(
        require("../assets/imgs/ping06.png"),
        new BMap.Size(33, 33),
        {
          offset: new BMap.Size(20, 25),
          imageOffset: new BMap.Size(0, 0 - index * 0),
        }
      );
      var marker = new BMap.Marker(point, {
        icon: myIcon,
      });
      this.mapInit.addOverlay(marker);
      var label = new BMap.Label(pro.name, { offset: new BMap.Size(20, -10) });
      // 设置label样式
      label.setStyle({
        color: "#CC3333",
        fontSize: "13px",
        backgroundColor: "#CCFFFF",
        border: "0",
        fontWeight: "bold",
      });
      marker.addEventListener("click", function (e) {
        let param = {
          toiletId: pro.toiletId,
        };
        _this.$api.getToiletInfo(param).then((res) => {
          if (res.h.code == 200) {
            console.log(res.b, "信息数据");
            let infoData = res.b;
            let content = `
            <span>管理单位名称：</span><span style="color:#57a3f3">${infoData.companyName}</span><br>
            <span>公厕名称：</span><span style="color:#57a3f3">${infoData.toiletName}</span><br>
            <span>设备数量：</span><span>${infoData.deviceNumber}</span><br>
            <span>异常设备：</span><span style="color:red">${infoData.deviceBadNumber}</span><br>
            <span>正常设备：</span><span style="color:green">${infoData.deviceNormalNumber}</span>
            `;
            _this.openInfo(content, e, pro);
          } else {
            this.error(res.h.msg);
          }
        });
      });
      // return marker;
    },
    openInfo(content, e, pro) {
      // console.log(pro,'margpro')
      var opts = {
        width: 250, // 信息窗口宽度
        height: 110, // 信息窗口高度
        title: "信息窗口", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
      };
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
      this.mapInit.openInfoWindow(infoWindow, point); //开启信息窗口
    },
    echartPicData(datas) {
      console.log(datas, "饼图数据");
      this.listOnly = datas;
      //  this.toiletName = [];
      for (let i = 0; i < datas.length; i++) {
        datas[i].name = datas[i].toiletName;
        datas[i].value = datas[i].total;
       this.toiletName.push(datas[i].toiletName);
      }
      var myChart = echarts.init(document.getElementById("bing"));
      var option = {
        color: ["#46A2FF", "#F04964", "#9961E5"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}次 ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: this.toiletName,
          textStyle: {
            color: "#fff",
          },
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
            data: datas,
          },
        ],
      };
      myChart.setOption(option);
    },
    lineEchartDatas(resDatas) {
      console.log(resDatas, "图标昨日流量");
      if (JSON.stringify(resDatas) == "{}") {
        console.log("昨日人流量数据空");
        var mychartDom = document.getElementById("lineEchart");
        mychartDom.innerHTML = "暂无数据";
        mychartDom.style.color = "#76ffff";
        mychartDom.style.fontSize = "28px";
        mychartDom.style.textAlign = "center";
        mychartDom.style.lineHeight = "350px";
        return;
      }
      console.log("过来了");
      // xData = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      let legendData = Object.keys(resDatas),
        productFlowData_items = Object.values(resDatas),
        xData = [],
        seriesData = [];
      productFlowData_items[0].map((item) => {
        xData.push(dayjs(item.time).hour() + "点");
      });
      productFlowData_items.map((pi_item, pi_index) => {
        // console.log(pi_item,'pi_item')
        var seriesDataItem = {};
        seriesDataItem.name = legendData[pi_index];
        seriesDataItem.type = "line";
        seriesDataItem.data = [];
        pi_item.map((item) => {
          // console.log(item,'iiiiii')
          seriesDataItem.data.push(item.number);
        });
        seriesData.push(seriesDataItem);
      });
      // let valData = Object.values(resDatas).forEach((res) => {
      //   console.log(res, "俩 个");

      //   res.map((val, index) => {
      //     console.log(val,'各一条')
      //     xData.push(dayjs(val.time).hour()+"点");
      //     // yData.push(val.number);
      //   });
      //   res.map((pi_item, pi_index) => {
      //   console.log(pi_item,'pi_item')
      //   var seriesDataItem = {};
      //   seriesDataItem.name = valRes[pi_index];
      //   seriesDataItem.type = "line";
      //   seriesDataItem.data = [];
      //   seriesDataItem.data.push(pi_item.number);
      //   // return
      //   // pi_item.map((item) => {
      //   //   // console.log(item,'iiiiii')

      //   // });
      //   seriesDatarr.push(seriesDataItem);
      // });

      //   // console.log(valRes,'名字调')
      //   // seriesDatarr.push({
      //   //   name: valRes,
      //   //   type: "line",
      //   //   areaStyle: {
      //   //     normal: {
      //   //       color: "#F94100",
      //   //     },
      //   //   },
      //   //   data: yData,
      //   // });
      // });

      console.log(seriesData, "seriesData");
      // console.log(valData,"值")
      var myChart = echarts.init(document.getElementById("lineEchart"));
      var option = {
        color: ["#767EFF", "#F65B62", "#43E97D", "#B620E0"],
        title: {
          text: ``,
          left: "0",
          top: "20",
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 15,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          icon: "stack",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3",
          },
          // data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          data: legendData,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisLabel: {
              color: "#fff",
              // interval: 'auto',
              interval: 3,
              showMaxLabel: true,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#787A7F",
              },
            },
          },
        ],
        series: seriesData,
        // series: [
        //   {
        //     name: "邮件营销",
        //     type: "line",
        //     stack: "总量",

        //     areaStyle: {
        //       normal: {
        //         color: "#F94100",
        //       },
        //     },
        //     data: [120, 132, 101, 134, 90, 230, 210],
        //   },
        //   {
        //     name: "联盟广告",
        //     type: "line",
        //     stack: "总量",
        //     areaStyle: {
        //       normal: {
        //         color: "#1EFEFE",
        //       },
        //     },
        //     data: [220, 182, 191, 234, 290, 330, 310],
        //   },
        //   {
        //     name: "视频广告",
        //     type: "line",
        //     stack: "总量",
        //     areaStyle: {
        //       normal: {
        //         color: "#76FF83",
        //       },
        //     },
        //     data: [150, 232, 201, 154, 190, 330, 410],
        //   },
        //   {
        //     name: "直接访问",
        //     type: "line",
        //     stack: "总量",
        //     areaStyle: {
        //       normal: {
        //         color: "#9961E5",
        //       },
        //     },
        //     data: [320, 332, 301, 334, 390, 330, 320],
        //   },
        //   {
        //     name: "搜索引擎",
        //     type: "line",
        //     stack: "总量",
        //     label: {
        //       normal: {
        //         show: true,
        //         position: "top",
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#00D128",
        //       },
        //     },
        //     data: [820, 932, 901, 934, 1290, 1330, 1320],
        //   },
        // ],
      };
      myChart.setOption(option);
    },

    echartGoToilet(datas) {
      let toiletNames = [],
        usedValues = [];
      // if (datas.length == 0) {
      //   var mychartDom = document.getElementById("waterConsumption");
      //   mychartDom.innerHTML = "暂无数据";
      //   mychartDom.style.color = "#76ffff";
      //   mychartDom.style.fontSize = "28px";
      //   mychartDom.style.textAlign = "center";
      //   mychartDom.style.lineHeight = "410px";
      //   console.log("本周水耗暂无数据");
      //   return false;
      // }
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].usedValue);
      }
      var myChart = echarts.init(document.getElementById("waterConsumption"));
      var option = {
        title: {
          show: true,
          text: "水耗数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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
    echartElePort(datas) {
      let toiletNames = [],
        usedValues = [];
      // if (datas.length == 0) {
      //   console.log("本周电耗暂无数据");
      //   let mychartDom = document.getElementById("powerConsumption");
      //   mychartDom.innerHTML = "暂无数据";
      //   mychartDom.style.color = "#76ffff";
      //   mychartDom.style.fontSize = "28px";
      //   mychartDom.style.textAlign = "center";
      //   mychartDom.style.lineHeight = "410px";
      //   return false;
      // }
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].usedValue);
      }
      var myChart = echarts.init(document.getElementById("powerConsumption"));
      var option = {
        title: {
          show: true,
          text: "电耗数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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
    echartUsingToilet(datas) {
      console.log(datas, "ruce");
      let toiletNames = [],
        usedValues = [];
      // if (datas.length == 0) {
      //   console.log("本周入厕数暂无数据");
      //   let mychartDom = document.getElementById("goToilet");
      //   mychartDom.innerHTML = "暂无数据";
      //   mychartDom.style.color = "#76ffff";
      //   mychartDom.style.fontSize = "28px";
      //   mychartDom.style.textAlign = "center";
      //   mychartDom.style.lineHeight = "410px";
      //   datas.length = 0;
      //   return false;
      // }
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].number);
      }
      console.log(toiletNames, "toiletNames");
      console.log(usedValues, "usedValues");
      var myChart = echarts.init(document.getElementById("goToilet"));
      var option = {
        title: {
          show: true,
          text: "入厕数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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
    echartScoreNums(datas) {
      let toiletNames = [],
        usedValues = [];
      // if (datas.length == 0) {
      //   console.log("今日评分数暂无数据");
      //   let myScoreDom = document.getElementById("getScore");
      //   myScoreDom.innerHTML = "暂无数据";
      //   myScoreDom.style.color = "#76ffff";
      //   myScoreDom.style.fontSize = "28px";
      //   myScoreDom.style.textAlign = "center";
      //   myScoreDom.style.lineHeight = "410px";
      //   return false;
      // }
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].total);
      }
      var myChart = echarts.init(document.getElementById("getScore"));
      var option = {
        title: {
          show: true,
          text: "评分数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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

    echartTodayCall(datas) {
      let toiletNames = [],
        usedValues = [];
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].total);
      }
      var myChart = echarts.init(document.getElementById("callPolice"));
      var option = {
        title: {
          show: true,
          text: "报警数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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
    echartWeeksCall(datas) {
      let toiletNames = [],
        usedValues = [];
      for (let i = 0; i < datas.length; i++) {
        toiletNames.push(datas[i].toiletName);
        usedValues.push(datas[i].total);
      }
      var myChart = echarts.init(document.getElementById("callPolice"));
      var option = {
        title: {
          show: true,
          text: "报警数排名",
          x: "20px",
          y: "0px",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
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
            data: toiletNames,
            splitLine: { show: false }, //去除网格分割线
            axisTick: {
              //刻度
              show: false, //不显示刻度线
            },
            axisLine: {
              //坐标线
              lineStyle: {
                type: "solid",
                color: "#fff", //轴线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值的具体的颜色
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
                color: "#fff", //坐标值的具体的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: ["#63656B"], //分割线的颜色
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            data: usedValues,
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
    error(msg) {
      this.$Notice.error({ title: msg });
    },
    success(msg) {
      this.$Notice.success({
        title: msg,
      });
    },
    toiletNumber() {
      this.$api.toiletNumber().then((res) => {
        if (res.h.code == 200) {
          this.toiletNameObj = res.b;
        } else {
          this.error(res.h.msg);
        }
      });
    },
    visitors() {
      this.$api.visitors().then((res) => {
        if (res.h.code == 200) {
          this.visitorsObj = res.b;
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getByMonth() {
      this.$api.getByMonth().then((res) => {
        if (res.h.code == 200) {
          this.getByMonthObj = res.b;
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getByToday() {
      this.$api.getByToday().then((res) => {
        if (res.h.code == 200) {
          this.getByTodayObj = res.b;
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getExcept() {
      this.$api.getExcept().then((res) => {
        if (res.h.code == 200) {
          this.getExceptObj = res.b;
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getAlarm() {
      this.$api.getAlarm().then((res) => {
        if (res.h.code == 200) {
          let getAlarmArr = res.b;
          this.echartPicData(getAlarmArr);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getLocation() {
      this.$api.getLocation().then((res) => {
        if (res.h.code == 200) {
          let points = res.b;
          this.initMap(points);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getFlow() {
      this.$api.getFlow().then((res) => {
        if (res.h.code == 200) {
          console.log(res.b, "昨日人流量");
          this.lineEchartDatas(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    getScoreNums() {
      //今日评分数
      let param = {
        queryType: "1",
        type: "0",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "usedValue", val.total);
          }
          this.callPoliceData = res.b;
          this.echartScoreNums(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    weeksScoreNums() {
      //本周评分
      let param = {
        queryType: "2",
        type: "0",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          // for (let val of res.b) {
          //   this.$set(val, "total", val.usedValue);
          // }
          this.weeksData = res.b;
          this.echartScoreNums(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    monthScoreNums() {
      //本月评分
      let param = {
        queryType: "3",
        type: "0",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.total);
          }
          this.monthData = res.b;
          this.echartScoreNums(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    yearScoreNums() {
      //本年评分
      let param = {
        queryType: "4",
        type: "0",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.total);
          }
          this.yearData = res.b;
          this.echartScoreNums(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    flowByCondition() {
      //今日水耗
      let param = {
        queryType: "1",
        type: "1",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          this.callPoliceData = res.b;
          this.echartGoToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    weeksWater() {
      //本周水耗
      let param = {
        queryType: "2",
        type: "1",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "total", val.usedValue);
          }
          this.weeksData = res.b;
          this.echartGoToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    monthWater() {
      //本月水耗
      let param = {
        queryType: "3",
        type: "1",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.usedValue);
          }
          this.monthData = res.b;
          this.echartGoToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    yearWater() {
      //本年水耗
      let param = {
        queryType: "4",
        type: "1",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.usedValue);
          }
          this.yearData = res.b;
          this.echartGoToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    todayElePort() {
      //今日电耗
      let param = {
        queryType: "1",
        type: "2",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          this.callPoliceData = res.b;
          this.echartElePort(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    weeksElePort() {
      //本周电耗
      let param = {
        queryType: "2",
        type: "2",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "total", val.usedValue);
          }
          this.weeksData = res.b;
          this.echartElePort(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    monthElePort() {
      //本月电耗
      let param = {
        queryType: "3",
        type: "2",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.usedValue);
          }
          this.monthData = res.b;
          this.echartElePort(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    yearElePort() {
      //本年电耗
      let param = {
        queryType: "4",
        type: "2",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.usedValue);
          }
          this.yearData = res.b;
          this.echartElePort(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    usingToilet() {
      //今日入厕数
      let param = {
        queryType: "1",
        type: "3",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "usedValue", val.number);
          }
          this.callPoliceData = res.b;
          this.echartUsingToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    weeksUsingToilet() {
      //本周入厕数
      let param = {
        queryType: "2",
        type: "3",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "total", val.number);
          }
          this.weeksData = res.b;
          this.echartUsingToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    monthUsingToilet() {
      //本月入厕数
      let param = {
        queryType: "3",
        type: "3",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "total", val.number);
          }
          this.monthData = res.b;
          console.log(res.b, "本月入厕数据002");
          this.echartUsingToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    yearUsingToilet() {
      //本年入厕数
      let param = {
        queryType: "4",
        type: "3",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "total", val.number);
          }
          this.yearData = res.b;
          this.echartUsingToilet(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    todayCall() {
      //今日报警
      let param = {
        queryType: "1",
        type: "4",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "usedValue", val.total);
          }
          this.callPoliceData = res.b;
          this.echartTodayCall(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    weeksCall() {
      //本周报警
      let param = {
        queryType: "2",
        type: "4",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "usedValue", val.total);
          }
          this.weeksData = res.b;
          this.echartTodayCall(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    monthCall() {
      //本月报警
      let param = {
        queryType: "3",
        type: "4",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.total);
          }
          this.monthData = res.b;
          this.echartTodayCall(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
    yearCall() {
      //本月报警
      let param = {
        queryType: "4",
        type: "4",
      };
      this.$api.flowByCondition(param).then((res) => {
        if (res.h.code == 200) {
          for (let val of res.b) {
            this.$set(val, "number", val.total);
          }
          this.yearData = res.b;
          this.echartTodayCall(res.b);
        } else {
          this.error(res.h.msg);
        }
      });
    },
  },
  mounted() {
    let jepSession = window.location.href.split("token=")[1] || "";
    let sessionId = this.$route.query.jepSessionId || jepSession;

    this.setCookie("e3260062f761457696ec755647be01ae");
    // this.setCookie(sessionId)

    this.toiletNumber();
    this.visitors();
    this.getByMonth();
    this.getByToday();
    this.getExcept();
    this.getAlarm();
    this.getLocation();
    this.getFlow();
    this.tt();
    this.getScoreNums();
  },
};
</script>

<style lang="stylus" scoped>
.main_index {
  background-color: #000;

  .heard_index {
    width: 100%;
    height: 164px;
    position: relative;

    img {
      width: 100%;
      height: 164px;
      margin-top: 45px;
    }

    span {
      font-family: SourceHanSansCN-Medium;
      font-size: 48px;
      color: #76FFFF;
      letter-spacing: 4.26px;
      position: absolute;
      top: 30%;
      left: 44%;
    }

    .getCurrentDate {
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 37%;
      left: 4%;
    }

    .getLocaleTime {
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 37%;
      left: 14%;
    }

    #cweather {
      position: absolute;
      right: 3%;
      top: 25%;
      width: 150px;
      height: 142px;
      background-color: rgba(255, 255, 255, 0.3);
      text-align: center;
      line-height: 20px;
      padding: 10px;
      border-radius: 4px;
    }
  }

  .center_sty {
    width: 100%;
    min-height: 300px;
    // height: calc(100vh - 220px);
    margin-top: 45px;
    display: flex;

    .d01 {
      width: 25%;

      // height: 600px;
      .toilet_num {
        width: 90%;
        // height: 190px;
        margin: 20px auto;
        border: 1px solid #1EFEFE;

        .noDataShow {
          font-size: 28px;
          color: #76ffff;
          text-align: center;
          margin: 50px;
        }

        .fist_01 {
          background: linear-gradient(90deg, #09698E 0%, rgba(6, 11, 87, 0) 100%);
          font-family: SourceHanSansCN-Medium;
          font-size: 16px;
          color: #76FFFF;
          letter-spacing: 1.42px;
          padding: 7px;
        }

        .fist_02 {
          display: flex;
          justify-content: space-around;

          .title_01 {
            font-family: SourceHanSansCN-Medium;
            font-size: 14px;
            color: #CFCFCF;
            letter-spacing: 1.24px;
            text-align: center;
          }

          .title_02 {
            ont-family: Arial-Black;
            font-size: 24px;
            color: #76FFFF;
            letter-spacing: 2.13px;
            text-align: center;
          }

          .nomml {
            font-family: SourceHanSansCN-Medium;
            font-size: 14px;
            color: #fff;
            letter-spacing: 0;
            line-height: 21px;
          }

          .nomal_num {
            font-family: SourceHanSansCN-Medium;
            font-size: 14px;
            color: #01B741;
            margin-left: 4px;
          }
        }

        .fist_ci {
          font-family: Arial-Black;
          font-size: 28px;
          color: #76FFFF;
          letter-spacing: 2.48px;
          text-align: center;
          padding: 10px;
        }

        .onlyNoe {
          font-size: 48px;
          color: #76ffff;
          text-align: center;
          margin-top: 30px;
        }

        .todayNone {
          font-size: 28px;
          color: #fff;
          text-align: center;
          margin-top: 20px;
        }
      }
    }

    .d02 {
      width: 50%;
      margin-top: 20px;
    }
  }
}

.bottom_sty {
  width: 100%;
  background-color: #000;

  // margin-top: -165px;
  .big_div {
    display: flex;

    .border_style {
      border: 1px solid #1efefe;
    }

    .border-width_01 {
      width: 100%;
      margin: 0 20px 20px 20px;
      position: relative;

      .color_bc {
        background: linear-gradient(90deg, #09698E 0%, rgba(6, 11, 87, 0) 100%);
        font-family: SourceHanSansCN-Medium;
        font-size: 16px;
        color: #76FFFF;
        letter-spacing: 1.42px;
        padding: 7px;
        border-bottom: 1px solid #6D6D6D;
      }

      .titile_st {
        position: absolute;
        top: 13%;
        right: 11%;
        color: #fff;
        font-size: 16px;
      }
    }

    .border-width_02 {
      width: 50%;
      margin: 0 20px 20px 20px;
      position: relative;
      display: flex;

      .color_bc {
        font-family: SourceHanSansCN-Medium;
        width: 70%;
        font-size: 16px;
        color: #76FFFF;
        letter-spacing: 1.42px;
        padding: 7px;
        font-weight: 600;

        .title_poinr {
          font-family: SourceHanSansCN-Bold;
          font-size: 20px;
          color: #F1F1F1;
          margin-top: 15px;
          opacity: 0;
        }

        .conte_02 {
          display: flex;
          font-size: 14px;
          color: #F1F1F1;
          margin-top: 5px;

          // div {
          // padding: 5px;
          // }
          .active_sty {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #F04964;
            color: #fff;
            text-align: center;
          }

          .bottom_index {
            margin: 10px 10px 10px 0px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #BCBCBC;
            color: #fff;
            text-align: center;
          }

          .bot_index {
            margin: 10px 10px 10px 0px;
          }
        }
      }

      .line_02 {
        position: absolute;
        top: 8.5%;
        width: 100%;
        height: 1px;
        background: #6D6D6D;
      }
    }
  }
}

/deep/ .ivu-tabs-bar {
  border-bottom: 0;
  margin: 0px;
  background: linear-gradient(90deg, rgba(6, 11, 87, 0) 0%, rgba(6, 11, 87, 0) 100%);
  color: #C68222;
}

/deep/ .ivu-tabs .ivu-tabs-tabpane {
  flex-shrink: 0;
  width: 100%;
  color: #fff;
  transition: opacity 0.3s;
  opacity: 1;
  outline: 0;
}
</style>