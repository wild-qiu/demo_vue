<template>
<div class="cart">
    <nav-bar class="navbar">
        <div class="left-img" slot="left" @click="back"><img src="~assets/img/nav-bar/fan.png" /></div>
        <div slot="center" class="center-text">我的动态</div>
         <div class="right-img" slot="right"><img src="~assets/img/nav-bar/caidan.png" /></div>
    </nav-bar>
    <div class="singlist">
        <div class="danqu">全部</div>
        <div>评论</div>
        <div>k歌</div>
        <div>视频</div>
    </div>
    <div >
        <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou1.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">选我我超甜</p>
               <p style="font-size:11px;">2020-5-3</p>
               <p style="font-size:15px;">我最近分享了《易烊千玺—Fall》</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/music1.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou2.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">踏雪寻你</p>
               <p style="font-size:11px;">2020-4-30</p>
               <p style="font-size:15px;">千玺的音乐风格越发突出了，有点慵懒的低音配着有点迷幻的音乐，太让人陶醉了吧……</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/music2.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou3.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">懒小柿</p>
               <p style="font-size:11px;">2020-4-28</p>
               <p style="font-size:15px;">公子人如玉，翩翩世无双。我想这样形容我心中的千玺……</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/3.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou4.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">易瘾少年</p>
               <p style="font-size:11px;">2020-4-27</p>
               <p style="font-size:15px;">你是落日弥漫的橘，天边透亮的星。 满月在散落自己，因为原本孤独宇宙里终是找到专属于他的默契应答……</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/4.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou5.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">瑶妹很可</p>
               <p style="font-size:11px;">2020-4-27</p>
               <p style="font-size:15px;">低调又踏实的他，同龄人少有的成熟气质，一个回眸一抹笑都让人心动，这个男孩子，就是我年少时期想象中遗世公子的模样啊。……</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/5.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou6.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">青玄</p>
               <p style="font-size:11px;">2020-4-26</p>
               <p style="font-size:15px;">他的歌声也如他的为人一样，给人实实在在的温柔与抚慰。温润磁性的千式苏音，带着丝丝不为人察的沙哑，莫名撩人心弦……</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/6.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

         <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou7.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">你的宝贝</p>
               <p style="font-size:11px;">2020-4-25</p>
               <p style="font-size:15px;">立麦配着，他纤细修长的手指握着立麦，一个邪魅的眼神加上一个微微的笑，真是绝配呀～/p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/7.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>

       <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou7.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">玺欢你</p>
               <p style="font-size:11px;">2020-4-24</p>
               <p style="font-size:15px;">每一个改变都是惊喜，惊的是他又开启了自己的新一面，喜的是新一面他驾驭得也很好，不突兀不做作，他特别的嗓音和演唱方式我真的太喜欢了！</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/7.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        </div>  
    </div>

     <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou8.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">川</p>
               <p style="font-size:11px;">2020-4-24</p>
               <p style="font-size:15px;">每一个改变都是惊喜，惊的是他又开启了自己的新一面，喜的是新一面他驾驭得也很好，不突兀不做作，他特别的嗓音和演唱方式我真的太喜欢了！</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/8.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        
    </div>
      <div class="dongtai">
            <div class="touxiang"><img src='~assets/img/dongtai/tou9.jpg'></div>
           <div class="text">
               <p style="font-size:18px;fontweight:800">南肆</p>
               <p style="font-size:11px;">2020-4-20</p>
               <p style="font-size:15px;">#易烊千玺《丹青千里》# 往日峥嵘，未来可期！老烊终于发歌了，与以前的风格不一样。是古风，啧啧啧，真是余音绕梁，配上和声，就真的是一首哼好听的歌了，期待了老烊这么就的新作，配上笛子，古筝，嗯哼。鹤鹤们真是有福气了，半世向丹青看，喜如今身在画中，果然把陆游的《恋绣衾》展现的尽致淋漓，苏音也是这首歌最好的衬托，更好的将这首歌给唱活了，难能可贵，可谓此曲只应天上有，恢宏了《千里江山图》的磅礴气势，又清新脱俗。期待我们大学生老烊的新作，给全世界最好的老烊打call，遇见你是安排。安排！</p>
               <div  class="text-img" @click="go"><img src="~assets/img/dongtai/9.png"></div>
               <div class="toalk">
                   <div><img  src="~assets/img/dongtai/pinglun.png">评论</div>
                   <div @click="add">
                       <img v-if="count.flag" src="~assets/img/dongtai/dianzan.png">
                         <img v-else src='~assets/img/dongtai/dianzan2.png'> 
                        {{count.num}}</div>
                   </div>
           </div>
        
    </div>
    
    <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
</div>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
export default {
    name:'cart',
    components:{
        NavBar
    },
    data(){
        return{
            flg:true,
            count:{
                num:5,
                flag:true
                },
           
        }
    },
    methods:{
         back(){
             this.$router.replace('/home')
        },
        go(){
            this.$router.replace('/home/gedan')
        },
        add(){
            this.count.num = this.count.flag ? this.count.num + 1 : this.count.num - 1;
            this.count.flag = !this.count.flag;
           
        }
    }
}
</script>
<style>
.cart{
    background-color: rgb(247, 214, 209);
}
.cart .navbar{
    background-color: rgb(219, 70, 72);
    }
.left-img img{
    width: 30px;
    height: 23px;
    vertical-align: middle;
    margin-left: 8px;
}
.center-text{
    color: whitesmoke;
}
.right-img img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
}
.singlist{
    width: 100%;
    height: 25px;
    padding: 5px 0 5px 0;
    background-color: rgb(247, 214, 209);
    text-align: center;
    color: rgb(235, 50, 59);
    display: flex;
    justify-content:space-between;
}
.singlist div{
    margin:0 10px 0 10px;
}
.danqu{
    width: 80px;
    border-bottom: 2px solid #E54047;
}

.dongtai{
    display: flex;
    margin: 10px auto;
    width: 95%;
}
.touxiang{
    width: 40px;
    height: 40px;
}
.touxiang img{
   width: 38px;
    height: 38px;
    border-radius: 50%;
}

.text p{
    margin:5px ;
    padding: 0;
    color: rgb(158, 12, 19);
}
.text-img{
    width: 100%;
}
.text-img img {
    width: 100%;
    height: 60%;
}
.toalk{
    display: flex;
    justify-content : flex-end;
    margin-right: 5px;
    color:  rgb(158, 12, 19);
}
.toalk img{
    width: 20px;
    height: 20px;
    margin: 5px;
    vertical-align: middle;
}

.footer{
    height: 75px;
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
</style>