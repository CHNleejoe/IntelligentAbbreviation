<template>
  <div class="structure"> 
        <div class="head">
            <div class="title">
                <div class="home">公厕管理</div>
                <div class="page">平面图上传设置</div>
            </div>
            <div class="buttons">
                <Button size='large' class="width Button-btn">取消</Button>
                <Button type="primary" size='large' class="width Button-btn" @click="submitAllLegendImageInfo">确定</Button>
            </div>
        </div>
        <div class="main">
            <div class="legend-checks">
                <div class="label">
                    选择设备类型
                </div>
                <div class="types">
                    <div class="type-item" v-for="item in legendList">
                        <img :src="item.url" alt="">
                        <div class="img-label">{{item.name}}</div>
                        <div class="type-add" @click="createLegendImage(item)"></div>
                        <!-- <div class="type-add" @click="createImageToLayer(item)"></div> -->
                    </div>
                    <!-- <div class="type-item">
                        <img src="../../../static/imgs/cat.png" alt="">
                        <div class="img-label">文本标签</div>
                        <div class="type-add" @click="createLabelToLayer"></div>
                    </div>
                    <div class="type-item">
                        <img src="../../../static/imgs/cat.png" alt="">
                        <div class="img-label">特殊文本</div>
                        <div class="type-add" @click="createSpecicalLabelToLayer"></div>
                    </div> -->
                </div>
            </div>
            <div class='canvas' οnmοusedοwn="return false;">
                <div class="konva-functions">
                    <Button class="Button-btn" type="primary" size='large' @click="scaleImageFromLayer(1)">设备图标放大</Button>
                    <Button class="Button-btn" type="primary" size='large' @click="scaleImageFromLayer(0)">设备图标缩小</Button>
                    <Button class="Button-btn" type="success" size='large' @click="spinImageFromLayer">旋转</Button>
                    <!-- <Button class="Button-btn" type="success" size='large' @click="changeImageFromBox">改变</Button> -->

                    <!-- <button @click="removeImageFromLayer">移除</button>
                    <button @click="changeImageFromBox">改变图片</button>
                    <button @click="createImageToLayer">添加</button> -->
                </div>
                <div id="konvaContainer"></div>
            </div>
            <div class="set image" v-show="legendType == 0">
                <!-- <div class="label">
                    已添加设备
                </div> -->
                <div class="search">
                    <Input search enter-button="确定" placeholder="请输入点表名称" v-model="keyword" @on-search='requestPointTables(0)'/>
                    <div class="select">
                        设备类型
                        <Select v-model="equipmentType" style="width:237px" @on-change='requestEquipmentNames'>
                            <Option v-for="item in equipmentTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="select">
                        设备名称
                        <Select v-model="equipmentName" style="width:237px" @on-change='requestPointTables(1)'>
                            <Option v-for="(item,index) in equipmentNameList" :value="item.id" :key="index">{{ item.name }}</Option>
                        </Select>
                    </div>
                    <div class="select">
                        点表名称
                        <Select v-model="pointTableId" style="width:237px" @on-change='selectPointTable'>
                            <Option v-for="(item,index) in pointTableList" :value="item.id" :key="index" >{{ item.name }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="set-infos">
                    <div class="info-name">地址码：{{selectedInfo.addressCode}}</div>
                    <div>设备类型：{{selectedInfo.type}}</div>
                    <div>设备名称：{{selectedInfo.name}}</div>
                    <div>设备序列号：{{selectedInfo.serialNo}}</div>
                    <div>设备标签：{{selectedInfo.tag}}</div>
                    <div>厕位表识：{{selectedInfo.sex}}</div>
                    <div class="btns">
                        <Button class="bnt-item" size='small' type="success" @click="editLengedInfoForImage">完成</Button>
                        <Button class="bnt-item" size='small' type="error" @click="removeImageFromLayer">移除</Button>
                    </div>
                </div>
            </div>
            <div class="set label" v-show="legendType == 1">
                <div class="search">
                    <div class="p">请选择字体颜色  &nbsp;&nbsp;<ColorPicker v-model="labelColor" alpha />
                    <Button class="bnt-item"  type="error" @click="removeImageFromLayer">移除</Button></div>
                    <Input search enter-button="确定" placeholder="请输入文本标签内容" v-model="keyword" @on-search='editLabel'/>
                </div>
            </div>
            <div class="set specical" v-show="legendType == 2">
                <div class="search">
                    <div class="select">
                        文本类型
                        <Select v-model="labelType" style="width:237px" >
                            <Option v-for="(item,index) in labelTypeList" :value="item.id" :key="index" >{{ item.name }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="search" v-show="labelType == 0">
                    <Input search enter-button="确定" placeholder="请输入点表名称" v-model="keyword" @on-search='requestPointTables(0)'/>
                    <div class="select">
                        设备类型
                        <Select v-model="equipmentType" style="width:237px" @on-change='requestEquipmentNames'>
                            <Option v-for="item in equipmentTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="select">
                        设备名称
                        <Select v-model="equipmentName" style="width:237px" @on-change='requestPointTables(1)'>
                            <Option v-for="(item,index) in equipmentNameList" :value="item.id" :key="index">{{ item.name }}</Option>
                        </Select>
                    </div>
                    <div class="select">
                        点表名称
                        <Select v-model="pointTableId" style="width:237px" @on-change='selectPointTable'>
                            <Option v-for="(item,index) in pointTableList" :value="item.id" :key="index" >{{ item.name }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="set-infos" v-show="labelType == 0">
                    <div class="info-name">地址码：{{selectedInfo.addressCode}}</div>
                    <div>设备类型：{{selectedInfo.type}}</div>
                    <div>设备名称：{{selectedInfo.name}}</div>
                    <div>设备序列号：{{selectedInfo.serialNo}}</div>
                    <div>设备标签：{{selectedInfo.tag}}</div>
                    <div>厕位表识：{{selectedInfo.sex}}</div>
                    <div class="btns">
                        <Button class="bnt-item" size='small' type="success" @click="editLengedInfoForImage">完成</Button>
                        <Button class="bnt-item" size='small' type="error" @click="removeImageFromLayer">移除</Button>
                    </div>
                </div>
                <div class="set-url" v-show="labelType == 1">
                    <Input search enter-button="确定" placeholder="请输入请求地址" v-model="apiKeyword" @on-search='editSpecicalLabel'/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
    import Konva from 'konva'
    import api from '../../httpApi/api';
    export default {
        data() {
            return {
                // 公厕id
                toiletId: 13,
                // 平面图id
                id: 1,

                // 结构图基础数据和图层数据
                stage: null,
                stageInfo: {
                    width: 1135,
                    height:616
                },
                legendLayer: null,
                legendImageList: [],
                legendList: [],
                onClickedIndex: null,
                //图点表对应数据
                legendPointTableDataList: [],
                keyword: '',

                //设备类型选择
                equipmentType: '',
                equipmentTypeList: [],
                //设备名称选择
                equipmentName: '',
                equipmentNameList: [],
                //点表选择
                pointTableId: '',
                pointTableList:[],

                labelTypeList:[
                    {name: '设备点表', id: '0'},
                    {name: '请求地址', id: '1'},
                ],
                labelType: '0',

                //选中数据
                selectedInfo: {

                },

                labelColor: 'rgba(250,252,255,1)',
                
                //  0 是图例   1 是纯文本   2 是特殊文本
                legendType: 2,

                apiKeyword: ''
            };
        },
        methods: {
            createLegendImage(item) {
                const that = this;
                if(item.styleType == 1) { // 布尔 -- 图片
                    that.createImageToLayer(item)
                } else if(item.styleType == 2) { // 文本 -- 纯文本
                    that.createLabelToLayer(item)
                } else if(item.styleType == 3) { // 数值 -- 特殊文本
                    that.createSpecicalLabelToLayer(item)
                }
            },
            createImageToLayer(item) {
                const that = this;
                var layer = that.legendLayer
                let img = new Image();
                img.src = item.url;
                
                var imgBox = new Konva.Image({
                    image: img,
                    x: that.stageInfo.width/2,
                    y: that.stageInfo.height/2,
                    name: item.name,
                    draggable: true,
                    width: img.width,
                    height: img.height,
                    rotation: 0,
                    scaleX:.5,
                    scaleY: .5,
                    legendInfo: item,
                    legendType: 0
                });

                imgBox.on("dragstart", function(e) {
                    console.log('dragstart', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 0
                            that.selectedInfo = layer.children[i].attrs.legendInfo.equipmentInfo? layer.children[i].attrs.legendInfo.equipmentInfo: {} 
                            that.keyword = ''
                            return
                        }
                    }
                });

                imgBox.on("dragmove", function(e) {
                    document.body.style.cursor = "pointer";
                });
                
                imgBox.on("click", function(e) {
                    console.log('click', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 0
                            that.selectedInfo = layer.children[i].attrs.legendInfo.equipmentInfo? layer.children[i].attrs.legendInfo.equipmentInfo: {} 
                            that.keyword = ''
                            return
                        }
                    }
                });
             
                imgBox.on("mouseover", function(e) {
                    document.body.style.cursor = "pointer";
                });
                imgBox.on("mouseout", function() {
                    document.body.style.cursor = "default";
                });

                if(!layer.children.length) {
                    imgBox.attrs.legendInfo.id = 0
                }else {
                    imgBox.attrs.legendInfo.id = layer.children[layer.children.length - 1].attrs.legendInfo.id + 1
                }
                that.onClickedIndex = layer.children.length?layer.children.length:0
                that.legendType = 0
                that.keyword = ''

                layer.add(imgBox);
                setTimeout(function() {
                    layer.batchDraw();
                },200)
                

                that.legendImageList.push(imgBox)
            },
            createLabelToLayer(item) {
                const that = this;
                var layer = that.legendLayer
                var textBox = new Konva.Text({
                    x: that.stageInfo.width/2,
                    y: that.stageInfo.height/2,
                    text: '请输入文本',
                    fontSize: 30,
                    name: '普通文本',
                    fontFamily: 'Calibri',
                    draggable: true,
                    fill: 'white',
                    legendType: 1,
                    legendInfo: {
                        ...item
                    }
                });

                textBox.on("dragstart", function(e) {
                    console.log('dragstart', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 1
                            that.keyword = layer.children[i].attrs.text
                            return
                        }
                    }
                });

                textBox.on("dragmove", function(e) {
                    document.body.style.cursor = "pointer";
                });
                
                textBox.on("click", function(e) {
                    console.log('click', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 1
                            that.keyword = layer.children[i].attrs.text
                            return
                        }
                    }
                });
             
                textBox.on("mouseover", function(e) {
                    document.body.style.cursor = "pointer";
                });
                textBox.on("mouseout", function() {
                    document.body.style.cursor = "default";
                });

                if(!layer.children.length) {
                    textBox.attrs.legendInfo.id = 0
                }else {
                    textBox.attrs.legendInfo.id = layer.children[layer.children.length - 1].attrs.legendInfo.id + 1
                }

                that.onClickedIndex = layer.children.length?layer.children.length:0
                that.legendType = 1
                that.keyword = ''

                layer.add(textBox);
                setTimeout(function() {
                    layer.batchDraw();
                },200)
            },
            createSpecicalLabelToLayer(item) {
                const that = this;
                var layer = that.legendLayer
                var textBox = new Konva.Text({
                    x: that.stageInfo.width/2,
                    y: that.stageInfo.height/2,
                    text: '0',
                    fontSize: 30,
                    name: '特殊文本',
                    fontFamily: 'Calibri',
                    draggable: true,
                    fill: 'white',
                    legendType: 2,
                    legendInfo: {
                        ...item
                    }
                });

                textBox.on("dragstart", function(e) {
                    console.log('dragstart', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 2
                            that.keyword = ''
                            return
                        }
                    }
                });

                textBox.on("dragmove", function(e) {
                    document.body.style.cursor = "pointer";
                });
                
                textBox.on("click", function(e) {
                    console.log('click', layer.children, e.target.attrs.legendInfo)
                    let id = e.target.attrs.legendInfo.id
                    for(let i = 0; i < layer.children.length; i++) {
                        if(layer.children[i].attrs.legendInfo.id == id ) {
                            that.onClickedIndex = i
                            that.legendType = 2
                            that.keyword = ''
                            return
                        }
                    }
                });
             
                textBox.on("mouseover", function(e) {
                    document.body.style.cursor = "pointer";
                });
                textBox.on("mouseout", function() {
                    document.body.style.cursor = "default";
                });

                if(!layer.children.length) {
                    textBox.attrs.legendInfo.id = 0
                }else {
                    textBox.attrs.legendInfo.id = layer.children[layer.children.length - 1].attrs.legendInfo.id + 1
                }

                that.onClickedIndex = layer.children.length?layer.children.length:0
                that.legendType = 2
                that.keyword = ''

                layer.add(textBox);
                setTimeout(function() {
                    layer.batchDraw();
                },200)
            },
            removeImageFromLayer() {
                console.log('removeImageFromLayer', this.legendLayer.children)
                this.legendLayer.children[this.onClickedIndex].remove()
                this.legendLayer.batchDraw();
            },
            scaleImageFromLayer(flag) {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                var imgBox = that.legendLayer.children[that.onClickedIndex]
                console.log(imgBox.attrs.scaleX)
                switch(flag) {
                    case 0: {
                        if(imgBox.attrs.scaleX < 0.19) return
                        imgBox.scaleX(imgBox.attrs.scaleX - 0.1)
                        imgBox.scaleY(imgBox.attrs.scaleY - 0.1)
                    }
                    break;
                    case 1: {
                        if(imgBox.attrs.scaleX > 2) return
                        imgBox.scaleX(imgBox.attrs.scaleX + 0.1)
                        imgBox.scaleY(imgBox.attrs.scaleY + 0.1)
                    }
                    break
                }
                setTimeout(function() {
                    that.legendLayer.draw()
                }, 0)
            },
            spinImageFromLayer() {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                var imgBox = that.legendLayer.children[that.onClickedIndex]
                imgBox.rotation(imgBox.attrs.rotation + 22.5)

                setTimeout(function() {
                    that.legendLayer.draw()
                }, 0)
            },
            changeImageFromBox() {
                const that = this;

                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                var imgBox = that.legendLayer.children[that.onClickedIndex]
                let img = new Image();
                img.src = "https://jhzh.epipe.cn/call43825261263553536.jpg";
                imgBox.setImage(img);
                setTimeout(function() {
                    that.legendLayer.draw()
                }, 0)
            },
            renderLegendsByRequest() {
                const that = this;
                let params_getGraphStyle = {
                    toiletId: that.toiletId
                }
                that.$api.getGraphStyle(params_getGraphStyle).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(res,'getGraphStyle')
                        that.legendList = res.b

                    })
                })
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
            renderEvaryHasDataChangedImageFromLayer() {
                const that = this;
                let params = {
                    toiletId: that.toiletId
                }
                let apiList = []
                that.$api.pointTables(params).then(res => {

                    that.$util.parseRequest(res,function() {

                        console.log(res,'pointTables')
                        let beforeLegendPointTableDataList = JSON.parse(JSON.stringify(that.legendPointTableDataList))

                        that.legendPointTableDataList = res.b

                        that.legendLayer.children.map(item => {
                            item.attrs.legendInfo.equipmentData 

                        })
                        that.legendLayer.draw()
                    })
                })
            },
            requestEquipments() {
                const that = this;
                let params = {
                    toiletId: that.toiletId
                }
                that.$api.type(params).then(res => {

                    that.$util.parseRequest(res,function() {
                        console.log(res,'type')
                        Object.keys(res.b).map(item => {
                            let section = {}
                            section.label = res.b[item]
                            section.value = item
                            that.equipmentTypeList.push(section)
                        })
                    })
                })
            },
            requestEquipmentNames() {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                let params = {
                    toiletId: that.toiletId,
                    type: that.equipmentType
                }
                that.$api.deviceByType(params).then(res => {

                    that.$util.parseRequest(res,function() {
                        console.log(res,'deviceByType')
                        that.equipmentNameList = res.b
                    })
                })
            },
            requestPointTables(flag) {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                let params = {
                    toiletId: 13
                }
                flag == 0?params.key = that.keyword:''
                flag == 1?params.deviceId = that.equipmentName:''

                that.$api.pointTables(params).then(res => {

                    that.$util.parseRequest(res,function() {
                        console.log(res,'pointTables')

                        flag == 0?that.selectedInfo = (res.b[0]? res.b[0]:{}):''
                        flag == 1?that.pointTableList = res.b:''
                    })
                })
            },
            selectPointTable(e) {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                let tag = {}
                for(let item of this.pointTableList) {
                    if(item.id == e) {
                        tag = item
                    }
                }
                console.warn(tag)
                this.selectedInfo = tag
            },
            editLengedInfoForImage() {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                } 
                that.legendLayer.children[that.onClickedIndex].attrs.legendInfo.equipmentInfo = that.selectedInfo
            },
            editLabel() {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                that.legendLayer.children[that.onClickedIndex].fill(that.labelColor)
                that.legendLayer.children[that.onClickedIndex].setAttr('text', that.keyword)
                that.legendLayer.children[that.onClickedIndex].attrs.legendInfo.equipmentInfo = that.selectedInfo
                setTimeout(function() {
                    that.legendLayer.batchDraw();
                },200)
            },
            editSpecicalLabel() {
                const that = this;
                if(that.onClickedIndex == null) {
                    this.$Message.warning('未选中图例');
                    return
                }
                that.legendLayer.children[that.onClickedIndex].attrs.legendInfo.api = that.keyword
                setTimeout(function() {
                    that.legendLayer.batchDraw();
                },200)
            },
            
            submitAllLegendImageInfo() {
                const that = this;
                let dataList = []
                that.legendLayer.children.map(item => {
                    dataList.push(item.attrs)
                })

                let params = {
                    id: that.id,
                    graphJson: JSON.stringify(dataList)
                }
                that.$api.saveGraph(params).then(res => {

                    that.$util.parseRequest(res,function() {
                        console.log(res,'saveGraph')
                        that.$Message.success('保存成功');
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
                width: that.stageInfo.width,
                height: that.stageInfo.height,
            });
            that.legendLayer = new Konva.Layer();
            

            that.stage.add(that.legendLayer);
            // that.createImageToLayer()
            console.log(that.legendImageIndex,that.legendLayer.children)
            that.getQueryVariable()
            that.renderBaseImageByRequest()
            that.requestEquipments()
            that.renderEvaryHasDataChangedImageFromLayer()
        }
    };
</script>

<style lang="less" scoped>
    .structure{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin: auto;
        height: 100%;
        .Button-btn{
            width: 125px;
            height: 42px;
            font-family:Source Han Sans CN;
            font-weight:400;
        }
        .head{
            height: 66px;
            width: 100%;
            background:rgba(255,255,255,1);
            box-shadow:0px 1px 3px 0px rgba(8,9,38,0.07);
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title{
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(128,128,128,1);
                height: 100%;
                line-height: 66px;
                padding-left: 47px;
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .page{
                    margin-left: 50px;
                }
                &::before{
                    content: '';
                    width:15px;
                    height:15px;
                    background: url('../../../static/imgs/home.png');
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left:27px;
                    background-size: 100%;
                }
                &::after{
                    content: '';
                    width:1px;
                    height:21px;
                    position: absolute;
                    top: 50%;
                    background: #DADADA;
                    transform: translateY(-50%);
                    left:131px;
                }
            }
            .buttons{
                margin-right: 32px;
                Button{
                    margin-left: 68px;
                }
            }
        }
        .main{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            margin: auto;
            height: 100%;
            .legend-checks{
                // background: rebeccapurple;
                box-sizing: border-box;
                height: 100%;
                width: 152px;
                overflow: scroll;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-right: 25px;
                .label{
                    height: 83px;
                    line-height: 83px;
                    text-align: center;
                    font-size:16px;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(51,51,51,1); 
                    background: white;
                    width: 100%;
                }
                .types{
                    flex: 1;
                    width: 100%;
                    background: #0A2037;
                    .type-item{
                        height: 78px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        &:hover{
                            background: #356FE3;
                        }
                        >img{
                            height: 30px;
                            width: 37px;
                            margin-bottom: 7px;
                        }
                        .img-label{
                            font-size:14px;
                            font-family:Source Han Sans CN;
                            font-weight:500;
                            color:rgba(255,255,255,1);
                        }
                        .type-add{
                            position: absolute;
                            right: -12px;
                            top: 50%;
                            transform: translateY(-50%);
                            height: 24px;
                            width: 24px;
                            background:white url('../../../static/imgs/add.png') no-repeat center center;
                            background-size: 110%;
                            cursor: pointer;
                            transition: all .3s;
                            z-index: 2;
                            border-radius: 50%;
                            &:active{
                                opacity: .7;
                            }
                        }
                    }
                }
            }
            .canvas{
                background: #F9F9F9;
                height: 100%;
                .konva-functions{
                    height: 83px;
                    width: 100%;
                    line-height: 83px;
                    box-sizing: border-box;
                    padding-left: 73px;
                    >Button{
                        margin-right: 27px;
                    }

                }
                #konvaContainer{
                    border: 1px rgba(102,102,102,.3) solid;
                }
            }
            
            .set{
                width: 364px;
                background: white;
                box-sizing: border-box;
                .search{
                    box-sizing: border-box;
                    width: 100%;
                    padding: 22px 32px 0;
                    .select{
                        line-height: 32px;
                        font-size:14px;
                        font-family:Source Han Sans CN;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        margin-top: 16px;
                        display: flex;
                        justify-content: space-between;
                        Select{
                            width: 237px;
                        }
                        &:nth-child(2){
                            margin-top: 20px;
                        }
                    }
                }
                .set-infos{
                    box-sizing: border-box;
                    padding: 9px 31px 20px;
                    font-size:14px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    position: relative;
                    .info-name{
                        font-size:16px;
                        font-family:Source Han Sans CN;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height: 46px;
                    }
                    .btns{
                        position: absolute;
                        top: 17px;
                        right: 32px;
                        >Button{
                            margin-left: 30px;
                        }
                    }
                }
            }
            .label{
                .search{
                    .p{
                        padding-bottom: 20px;
                    }
                }
                
            }
            .specical{
                .set-url{
                    box-sizing: border-box;
                    padding: 23px 31px 20px;
                    font-size:14px;
                    font-family:Source Han Sans CN;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    position: relative;
                }
            }
        }
        
    }
</style>