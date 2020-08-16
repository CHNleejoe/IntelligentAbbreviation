<template>
  <div class="structure"> 
        <!-- <div class="head">
        </div> -->
        <!-- <div class="left"> -->
            <div οnmοusedοwn="return false;">
                <div id="konvaContainer" border='1'></div>
            </div>
            <!-- <div class="charts">
                <div class="section-head">当前公厕环境情况</div>
            </div>
        </div> 
        <div class="right">
            <div class="space">
                <div class="section-head">当前公厕空闲情况</div>
                <div class="inner">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div class="use">
                <div class="section-head">今日公厕使用情况</div>
                <div class="inner">
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div class="energy">
                <div class="section-head">今日公厕能耗情况</div>
                <div class="inner">
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div> -->
  </div>
</template>

<script>
    import Konva from 'konva'
    import api from '../../httpApi/api';
    export default {
        data() {
            return {
                stage: null,
                stageInfo: {
                    width: 1800,
                    height:956
                },
                drawStageInfo: {
                    width: 1135,
                    height:616
                },
                //图点表对应数据
                legendPointTableDataList: [],
                // 有绑定设备的图例书籍
                hasEquipmentsImageIndex: [],
                apiList: [],

                legendLayer: null,
                colorList: null,
                legendImageList: []
            };
        },
        methods: {
            createImageToLayer() {
                const that = this;
                var layer = that.legendLayer
                let img = new Image();
                img.src = "../../../static/imgs/cat.png";
                var imgBox = new Konva.Image({
                    image: img,
                    x: 6 * 30 + 150,
                    y: 6 * 18 + 40,
                    name: `asdasdasdasd`,
                    draggable: true,
                    width: 100,
                    height: 50
                });

                imgBox.on("dragstart", function(e) {
                    console.log('dragstart', e)

                    // imgBox.moveToTop();
                    layer.batchDraw();
                });

                imgBox.on("dragmove", function(e) {
                    console.log('dragstart', e, e.target.attrs.name)

                    document.body.style.cursor = "pointer";
                });
                /*
                * dblclick to remove imgBox for desktop app
                * and dbltap to remove imgBox for mobile app
                */
                imgBox.on("dblclick dbltap", function(e) {
                    console.log('dblclick dbltap', e)
                    layer.remove(imgBox);
                    layer.batchDraw();
                });

                imgBox.on("mouseover", function(e) {

                    document.body.style.cursor = "pointer";
                });
                imgBox.on("mouseout", function() {
                    document.body.style.cursor = "default";
                });

                layer.add(imgBox);
                setTimeout(function() {
                    layer.batchDraw();
                },200)
                console.log(layer.batchDraw)
                that.legendImageList.push(imgBox)
            },
            removeImageFromLayer() {
                console.log('removeImageFromLayer', this.legendLayer.children)
                this.legendLayer.children[5].remove()
                this.legendLayer.batchDraw();
            },
            changeImageFromBox() {
                console.log('changeImageBFromBox', imgBox);
                let img = new Image();
                img.src = "test.jpg";
                imgBox.setImage(img);
                imgBox.draw();
            },
            renderLegendsByRequest() {
                const that = this;
                var params = {
                    toiletId: 6
                }
                that.$api.getGraphStyle(params).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(that.$util,'getGraphStyle')
                    })
                })
            },
            renderImageForRequest() {
                const that = this;
                let params_graphById = {
                    id: that.id
                }
                that.$api.graphById(params_graphById).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(res,'graphById')
                        // 底图添加
                        var layer = new Konva.Layer();
                        let img = new Image();
                        img.src = res.b.graphUrl;
                        
                        var imgBox = new Konva.Image({
                            image: img,
                            x: 0,
                            y: 0,
                            name: res.b.name,
                            draggable: false,
                            width: that.stageInfo.width,
                            height: that.stageInfo.height,
                            rotation: 0,
                            scaleX: 1,
                            scaleY: 1,
                            legendInfo: res.b
                        });
                        layer.add(imgBox);
                        that.stage.add(layer);


                        // 图例添加
                        that.legendLayer =  new Konva.Layer();
                        var imagesList = JSON.parse(res.b.graphJson)
                        imagesList.map(item =>{
                            if(item.legendType == 0) {
                                item.width = that.stageInfo.width/(that.drawStageInfo.width * 1.0) * item.width
                                item.height = that.stageInfo.width/(that.drawStageInfo.width * 1.0) * item.height
                                let tmpImg = new Image();
                                tmpImg.src = item.legendInfo.url
                                item.image = tmpImg
                            } else {
                                item.fontSize = that.stageInfo.width/(that.drawStageInfo.width * 1.0) * item.fontSize
                            }
                            item.draggable = false
                            item.x = that.stageInfo.width/(that.drawStageInfo.width * 1.0) * item.x
                            item.y = that.stageInfo.height/(that.drawStageInfo.height * 1.0) * item.y

                            if(item.legendType == 0) {
                                var lengedImgBox = new Konva.Image(item);
                            } else {
                                lengedImgBox = new Konva.Text(item);
                            }
                            that.legendLayer.add(lengedImgBox)
                        })
                        that.stage.add(that.legendLayer);
                        // 渲染
                        setTimeout(function() {
                            layer.batchDraw();
                            that.legendLayer.batchDraw()
                            layer.moveToBottom()
                        },200)
                        console.log(imagesList, 'imagesList');
                        that.renderEvaryHasDataChangedImageFromLayer()
                    })
                })
            },
            // 依据点表数据进行变更页中的每一个图例信息
            renderEvaryHasDataChangedImageFromLayer() {
                const that = this;
                let params = {
                    toiletId: that.toiletId
                }
                let apiList = []
                that.$api.deviceData(params).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(res,'deviceData')
                        let beforeLegendPointTableDataList = JSON.parse(JSON.stringify(that.legendPointTableDataList))

                        that.legendPointTableDataList = res.b
                        

                        // 第一次请求进行确定点表数据位置
                        if(beforeLegendPointTableDataList.length == 0) {
                            console.warn(that.legendLayer.children);
                            
                            that.legendLayer.children.map((item,index) => {
                                console.log(index, item);
                                if(item.attrs.legendInfo.equipmentInfo) {
                                    let lengedImageEqepeId = item.attrs.legendInfo.equipmentInfo.id
                                    that.hasEquipmentsImageIndex.push(index)

                                    for(let ptindex = 0;ptindex < that.legendPointTableDataList.length; ptindex ++) {
                                        if(that.legendPointTableDataList[ptindex].id == lengedImageEqepeId) {
                                            item.attrs.legendInfo.pointTabelDataIndex = ptindex
                                            return
                                        }
                                    }
                                }
                                if(item.attrs.legendInfo.api) {
                                    that.apiList.push({
                                        api: item.attrs.legendInfo.api,
                                        index: index
                                    })
                                }
                            })
                        }

                        // 进行渲染区分
                        that.hasEquipmentsImageIndex.map(lengedImgEquipIndex => {
                            let legend = that.legendLayer.children[lengedImgEquipIndex]
                            let ptdata = that.legendPointTableDataList[legend.attrs.legendInfo.pointTabelDataIndex]
                            if(legend.attrs.legendInfo.styleType == 1) {
                                if(legend.attrs.pointTabelData) {
                                    let imageUrl = ''
                                    imageUrl = legend.attrs.pointTabelData.value ? legend.attrs.legendInfo.urlForTrue : legend.attrs.legendInfo.urlForTrue
                                    let img = new Image();
                                    img.src = imageUrl;
                                    legend.setImage(img);
                                } else {

                                }
                                
                            } else {

                            }
                            console.warn(legend, ptdata, '绑定的设备的信息');
                        })

                        that.legendLayer.draw()
                    })
                })
            },
            getQueryVariable(variable){
                const that = this
                var query = window.location.href;
                var vars = query.split("?");
                vars = vars[1].split('&')
                for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                        that[pair[0]] = pair[1]
                        console.log(pair, 'getQueryVariable')
                }
            },
            renderBaseImageByRequest() {
                const that = this;
                
                let params_graphById = {
                    id: that.id
                }
                that.$api.graphById(params_graphById).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(res,'graphById')
                        var layer = new Konva.Layer();
                        let img = new Image();
                        img.src = res.b.graphUrl;
                        
                        var imgBox = new Konva.Image({
                            image: img,
                            x: 0,
                            y: 0,
                            name: res.b.name,
                            draggable: false,
                            width: that.stageInfo.width,
                            height: that.stageInfo.height,
                            rotation: 0,
                            scaleX: 1,
                            scaleY: 1,
                            legendInfo: res.b
                        });
                        layer.add(imgBox);
                        that.stage.add(layer);
                        setTimeout(function() {
                            layer.batchDraw();
                            layer.moveToBottom()
                        },200)
                    })
                })
            },
        },
        created() {
            console.log(Konva, 'Konva')
        },
        mounted() {
            const that = this;
            that.stage = new Konva.Stage({
                container: "konvaContainer",
                width: that.stageInfo.width,
                height: that.stageInfo.height,
            });
            that.legendLayer = new Konva.Layer();
            that.stage.add(that.legendLayer);
            that.getQueryVariable()
            // that.renderBaseImageByRequest()
            that.renderImageForRequest()
            
        }
    };
</script>

<style lang="less" scoped>
    .structure{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
        // height: 100%;
        background: #01011F;
        padding: 0 22px 24px;
        box-sizing: border-box;
        .section-head{
            width:100%;
            height: 33px;
            background: linear-gradient(to right,#09698E,transparent);
            text-indent: 26px;
            font-size:16px;
            font-family:SourceHanSansCN-Medium,SourceHanSansCN;
            font-weight:500;
            color:rgba(118,255,255,1);
            line-height:33px;
            letter-spacing:1px;
        }
        .head{
            width: 100%;
            height: 164px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            background: url('../../../static/imgs/head.png') no-repeat center center;
            background-size: 75% 100%;
            &::after{
                content: '智慧公厕';
                font-size:48px;
                font-family:SourceHanSansCN-Medium,SourceHanSansCN;
                font-weight:500;
                color:rgba(118,255,255,1);
                letter-spacing:4px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 16px;
            }
        }
        .left{
            width: 1135px;
            height: 100%;
            display: flex; 
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            #konvaContainer{
                border: 1px #333 solid;
                box-sizing: border-box;
                z-index: 1;
                position: relative;
                background: #01011F;
            }
            .charts{
                width: 100%;
                height: 304px;
                border: 1px solid #118388;
                box-sizing: border-box;
                margin-top: 25px;
                
            }
        }
        .right{
            height: 100%;
            flex: 1;
            padding-left: 19px;
            position: relative;
            z-index: 1;
            >div{
                box-sizing: border-box;
                border: 1px solid #118388;
                .inner{
                    height: calc(100% - 33px);
                    width: 100%;
                    background: red;
                }
            }
            .space{
                height: 242px;
                margin-bottom: 24px;
            }
            .use{
                height: 328px;
                margin-bottom: 25px;
            }
            .energy{
                height: 304px;
            }
        }
        .legend-checks{
            // background: rebeccapurple;
            border: 1px #333 solid;
            border-radius: 10px;
            box-sizing: border-box;
            height: 80%;
            width: 100px;
            overflow: scroll;
        }
        
    }
</style>