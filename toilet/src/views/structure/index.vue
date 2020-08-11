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
            }
        },
        created() {
            console.log(Konva, 'Konva')
        },
        mounted() {
            const that = this;
            that.renderLegendsByRequest()
            that.stage = new Konva.Stage({
                container: "konvaContainer",
                width: 1800,
                height: 956,
            });
            that.legendLayer = new Konva.Layer();
            that.colorList = ["red", "orange", "yellow", "green", "blue", "purple"];
            for (var n = 0; n < that.colorList.length; n++) {
                // anonymous function to induce scope
                (function() {
                    var i = n;
                    var box = new Konva.Rect({
                        x: i * 30 + 150,
                        y: i * 18 + 40,
                        fill: that.colorList[i],
                        stroke: "black", 
                        name: `${i}${i}${i}${i}${i}`,
                        strokeWidth: 4,
                        draggable: true,
                        width: 100,
                        height: 50
                    });

                    box.on("dragstart", function(e) {
                        console.log('dragstart', e)

                        // box.moveToTop();
                        that.legendLayer.batchDraw();
                    });

                    box.on("dragmove", function() {
                        document.body.style.cursor = "pointer";
                    });
                    /*
                    * dblclick to remove box for desktop app
                    * and dbltap to remove box for mobile app
                    */
                    box.on("dblclick dbltap", function(e) {
                        console.log('dblclick dbltap', e)
                        that.legendLayer.remove(box);
                        that.legendLayer.batchDraw();
                    });

                    box.on("mouseover", function(e) {

                        document.body.style.cursor = "pointer";
                    });
                    box.on("mouseout", function() {
                        document.body.style.cursor = "default";
                    });

                    that.legendLayer.add(box);
                })();
            }

            that.stage.add(that.legendLayer);
            // that.createImageToLayer()
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