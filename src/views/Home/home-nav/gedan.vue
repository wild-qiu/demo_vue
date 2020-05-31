<template>
<div class='gedan'>
    <gtop></gtop>
    <div class="singlist"><p>歌曲列表/30</p></div>
    <glist></glist>
    <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
    <div class="player" >
        <div>
          <audio ref="audio"   @pause="onPause" @play="onPlay" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" :src="sing"
            controls="controls" @ended="end()"  style="display:none;"></audio>
              <!-- 音频播放控件 -->
            </div>  
        <div class="playshow" >
            <div class="left"><img  src="~assets/img/musicplay/2.jpg"></div>
            <div class="playtiao" >
               <div class="time">{{ audio.currentTime | formatSecond}}</div>
                <div class="slider" @touchstart="handleTouchStart">
                    <div class="slider-track"></div>
                    <div class="slider-fill" :style="'width:'+sliderTime+'%'"></div>
                    <div class="slider-thumb" :style="'left:'+sliderTime+'%'"></div>
                </div>
                <div class="time">{{ audio.maxTime | formatSecond}}</div>

             <div class="play">
                 <div class="singname">{{singname}}<p>易烊千玺</p></div>
                <div class="button"  @click="startPlayOrPause">
                    <img v-if="playimg" src="~assets/img/musicplay/bofang.png">
                    <img v-else src="~assets/img/musicplay/pause.png">
                </div>
                <div class="button" @click="last"><img src="~assets/img/musicplay/xiayishou.png"></div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Gtop from 'components/gedan/Gtop'
import Glist from 'components/gedan/Glist'
// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
    var secondType = typeof second
    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second)
        var mimute = Math.floor(second / 60)
        second = second - mimute * 60
        return  ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '00:00'
    }
}
export default {
    name:"gedan",
    components: {
        Gtop,
        Glist
    },
data(){
return {
        singname:'舒适圈',
        playimg:'true',
        mutedimg:'true',
        musicsrc:'',
        sliderTime: 0,
        index:0,//当前歌曲的索引
        sing:'http://mp.111ttt.cn/mp3music/57536522.mp3',
         audio: {
        // 该字段是音频是否处于播放状态的属性
            playing: false,
        // 音频当前播放时长
            currentTime: 0,
        // 音频最大播放时长
            maxTime: 0,
            minTime:0,
            step:0.1,
        
                }
};
}, methods:{
         // 控制音频的播放与暂停
        startPlayOrPause() {
            console.log(this.audio.playing)
            return this.audio.playing ? this.pause() : this.play()
        },
        // 播放音频
        play() {
            console.log('你的播放开启了')
            this.$refs.audio.play()
        },
        // 暂停音频
        pause() {
            this.$refs.audio.pause()
        },
        // 当音频播放
        onPlay() {
            console.log('检测到你播放中')
            this.audio.playing = true
            this.playimg= false
        },
        // 当音频暂停
        onPause() {
            this.audio.playing = false
             this.playimg= true
        },
        handleFocus() {
            console.log('focues')
        },
         end(){//当前歌曲是否播放完成处理
            console.log('end')
            this.sing = 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_84518940&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
            this.singname = '再一，再二，再三'
        },
        last(){
            this.sing = 'http://mp.111ttt.cn/mp3music/52800456.mp3'
            this.singname = '灾'
        },


        // 当加载语音流元数据完成后，会触发该事件的回调函数
        // 语音元数据主要是语音的长度之类的数据
        onLoadedmetadata(res) {
            console.log('loadedmetadata')
            // console.log(res)
            this.audio.maxTime = parseInt(res.target.duration)
        },
        // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
        // 当音频当前时间改变后，进度条也要改变
        onTimeupdate(res) {
            //console.log('timeupdate')
            // console.log(res)
            this.audio.currentTime = res.target.currentTime
            this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
        },

        // 进度条格式化toolTip
        formatProcessToolTip(index = 0) {
            index = parseInt(this.audio.maxTime / 100 * index)
            return '进度条: ' + realFormatSecond(index)
        },

        handleTouchStart(e) {
            this.setValue(e.touches[0]);
            document.addEventListener('touchmove', this.handleTouchMove);
            document.addEventListener('touchup', this.handleTouchEnd);
            document.addEventListener('touchend', this.handleTouchEnd);
            document.addEventListener('touchcancel', this.handleTouchEnd);

            // e.preventDefault();
            // this.onDragStart(e);
        },
        handleTouchMove(e){
            console.log(e.changedTouches[0])
            this.setValue(e.changedTouches[0]);
        },
        handleTouchEnd(e) {
            this.setValue(e.changedTouches[0]);
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('touchup', this.handleTouchEnd);
            document.removeEventListener('touchend', this.handleTouchEnd);
            document.removeEventListener('touchcancel', this.handleTouchEnd);
            // this.onDragStop(e);
        },
        // 从点击位置更新 value
        setValue(e) {
            const $el=this.$el;
            const {
                maxTime,
                minTime,
                step
            } = this.audio;
            let value = (e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth * (maxTime - minTime);
            value = Math.round(value / step) * step + minTime;
            value = parseFloat(value.toFixed(5));

            if (value > maxTime) {
                value = maxTime;
            } else if (value < minTime) {
                value = minTime;
            }
            this.$refs.audio.currentTime = value;
        },
        // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
        changeCurrentTime(index) {
            console.log('拖动进度条')
            // this.audio.playing && this.pause();
            // console.log('拖动了',index,this.sliderTime,this.audio.maxTime,parseInt(index / 100 * this.audio.maxTime))
            // !this.audio.playing && this.play();
            this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
        }
    },
    filters: {
        // 使用组件过滤器来动态改变按钮的显示
        // transPlayPause(value) {
        //     return value ? '暂停' : '播放'
        // },
        // 将整数转化成时分秒
        formatSecond(second = 0) {
            return realFormatSecond(second)
        }
    }
}
</script>
<style scoped>
.footer{
    height: 90px;
    width: 100%;
    background-color: rgb(247, 214, 209);
   
}
.footer p{
    margin:0px;
    padding: 0;
    font-size: 14px;
    color:rgba(112, 110, 110, 0.8);
    text-align: center;
}
.singlist{
    width: 100%;
    height: 25px;
    padding: 5px 0 5px 0;
    background-color: rgb(247, 214, 209);
    text-align: center;
    color: rgb(235, 50, 59);
}
.singlist p {
    width: 50%;
    margin: 0 auto;
    padding-bottom: 6px;
    border-bottom: 2px solid #E54047;
}
.playshow{
    display: flex;
    width: 100%;
    position:fixed;
    bottom: 0;
    z-index: 9999;
    background-color: #D94143;
}
.left img{
    width:60px;
    height:60px; 
    margin-left: 5px;
    border-radius:50%;
    border: 2px solid transparent;
    border-color: transparent;
    border-color: rgba(224, 224, 224, .8);
    animation: rotate 20s linear infinite;
}
@keyframes rotate{
    from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}
.playtiao{
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: cornsilk;
}

.time{
  display: none;
}
.slider {
    width: 88%;
    position: relative;
    height: 22px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    cursor: default;
    user-select: none;
    outline: none;
}

.slider-track {
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -1px;
    background-color: #bec2c1;
}

.slider-fill {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #FBD158;
    left: 0;
    top: 50%;
    margin-top: -1px;
}

.slider-thumb {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background-color: #FBD158;
    color: #e92e35;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}
.play{
    display: flex;
    justify-content: center;
}
.button{
    width: 35px;
    height: 35px;
    margin:5px 10px 0 0;
    border-radius: 50%;
    text-align: center;
    }
.play img{
    width: 70%;
    height: 70%;
    vertical-align: middle;
    margin-top: 5px;
    }
.singname{
    margin-right: 10%;
    color: ghostwhite;
    font-size: 14px;
}
.singname p{
    margin: 5px;
    padding: 0;
    font-size: 12px;
}
</style>