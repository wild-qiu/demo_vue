<!--  -->
<template>
<div class='player'>
 <div>
    <!-- 此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素 -->
    <audio ref="audio" autoplay  @pause="onPause" @play="onPlay" @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" :src="sing"
        controls="controls" @ended="end()" style="display:none;"></audio>

    <!-- 音频播放控件 -->
    <div>
        <div class="playtiao" >
        <div >
            <img v-if="mutedimg" @click="muted" src="~assets/img/musicplay/shengyin.png">
            <img v-else @click="mutedplay" src="~assets/img/musicplay/jingyin.png">
            </div>
        <div class="time">{{ audio.currentTime | formatSecond}}</div>
            <div class="slider" @touchstart="handleTouchStart">
                <div class="slider-track"></div>
                <div class="slider-fill" :style="'width:'+sliderTime+'%'"></div>
                <div class="slider-thumb" :style="'left:'+sliderTime+'%'"></div>
            </div>
            <div class="time">{{ audio.maxTime | formatSecond}}</div>
        </div>

         <div class="play" @click="startPlayOrPause">
            <img v-if="playimg" src="~assets/img/musicplay/bofang.png">
            <img v-else src="~assets/img/musicplay/pause.png">
        </div>
        <button @click="next">下一曲</button>
        <button @click="last">上一曲</button>
    </div>
</div>
</div>
</template>

<script>
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
name:'player',
components: {},
data() {
return {
    sing:['http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_84518940&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
    'http://mp.111ttt.cn/mp3music/52800456.mp3','http://mp.111ttt.cn/mp3music/57536522.mp3','http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_73472734&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'],//歌曲路径数组
    sliderTime: 0,
    playimg:'true',
    mutedimg:'true',
    musicsrc:'',
    index:0,//当前歌曲的索引
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
},
  methods: {
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
        //静音
        muted(){
             console.log('muted')
             this.$refs.audio.muted = true;
             this.mutedimg = false
        },
        //取消静音
        mutedplay(){
            this.$refs.audio.muted = false;
            this.mutedimg = true
        },
        
         end(){//当前歌曲是否播放完成处理
            console.log('end')
            this.sing = 'http://mp.111ttt.cn/mp3music/52800456.mp3'
        },
        next(){
            this.sing = 'http://mp.111ttt.cn/mp3music/52800456.mp3'
        },
        last(){
            this.sing = 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_84518940&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
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
            console.log('timeupdate')
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
.playtiao{
    height: 100%;
    width: 96%;
    margin: 0 auto;
    display: flex;
    color: cornsilk;
    border: 1px solid red;
}
.playtiao img{
    margin-top: 7px;
    margin-left: 20px;
    width: 15px;
    height: 15px;
}
.time{
    height: 100%;
    font-size: 10px;
    margin: 0 5px 0 5px;
    padding-top: 8px;
    border: 1px solid blue;
}
.slider {
    border: 1px solid blue;
    width: 60%;
    position: relative;
    height: 24px;
    margin-bottom: 5px;
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
    background-color: #e92e35;
    left: 0;
    top: 50%;
    margin-top: -1px;
}

.slider-thumb {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background-color: #e92e35;
    color: #e92e35;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}
.play{
    width: 40px;
    height: 40px;
    border: 1px solid red;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
    background:rgba(121, 119, 119, 0.6);
    }
.play img{
    width: 70%;
    height: 70%;
    vertical-align: middle;
    margin-top: 5px;
    border: 1px solid darkgreen;
    }
</style>