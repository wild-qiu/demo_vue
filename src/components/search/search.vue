<template>
    <div class="search">
        <div class="search-box" :class="isFocus?'':'active'">
            <input  class="search-ipt" :style="isFocus?'':'text-indent:0em;'" v-model="search" @focus="initPage" type="search" placeholder="搜索音乐、歌词、电台"/>
             <span class="text" @click="iptShearch">搜索</span>
        </div>
      <div class="history-panel" v-if="!isFocus">
            <p class="shistory history" v-if="historyxs">搜索历史</p>
            <ul class="his_ulcon" v-if="historyxs">  
                <li v-for="(item,index) in searches_list" :key="index" @click="historysearch(item)">{{item}}</li>
            </ul> 
            <p class="shistory clears" v-if="historyxs" @click="clearhis()">
				<img src="~assets/img/nav-bar/clear.png" />清空历史记录</p>  
        </div>
    </div>
</template>

<script>
import {saveSearch} from 'plugin/good-storage/cache.js'  //引用本地存储js  
import storage from 'good-storage'  //引入good-storage包  
export default {
    data(){
        return{
            search:'',
            isFocus:true,
            searches_list:[], //历史搜索记录列表
            historyxs:false
        }
    },
    methods:{
        //输入框获取焦点
        initPage(){
            this.isFocus = false;
            this.$emit('initSearchPage');
            //为避免重复先清空再添加  
            this.searches_list = [];
            let searches=storage.get('_search_');  
            this.searches_list = searches?searches:[];
            if (this.searches_list.length > 0 ) {
                
                this.historyxs=true;  
            }else{
                this.historyxs=false;  
                
            }
            
        },
        //点击搜索
        iptShearch(){
            this.isFocus = true;

            if(this.search!=''){ //搜索框不为空  
                
                saveSearch(this.search); // 本地存储搜索的内容 

                let params = {
                    majorInfo : this.search //零件号或零件名（中英文）或零件类型名称或责任人名称
                }
                this.$emit('handleSearch' , params)

                this.isFocus = true;  
                this.search='';  
            }    

            
        },
        //高级搜索按钮
        toggleDrawer() {
            this.$emit('initSearchPage')
            this.$emit('listenSlide')
        },
        //清空历史记录 
        clearhis(){   
            storage.remove('_search_');  
            this.searches_list = [];
            this.historyxs=false;  
            
        },
        //点击历史搜索把搜索的记录添加到good-storage中 
        historysearch(item){           
            saveSearch(item);  
            this.search = item; 
            this.iptShearch();
            this.historyxs = false;  
        } 
    }
}
</script>
<style scoped>
		.search{
			padding: 0;
			margin: 0;
            z-index: 999;
		}
		.search-box{
			position: relative;
		}
        .search-box input{
            background-image: url("~assets/img/nav-bar/sss.png");
            background-repeat:no-repeat;
            background-size: 13%;
        }
       .search-box input[type=search] {
            border:1px solid #A9A9A9;
            border-radius:15px;
            padding:5px 0px 7px 25px;
        }
      .search-box input[type=search]:hover {
            border:1px solid red;
        }
      .search-box input[type=search]:focus {
            border:1px solid red;
            box-shadow:0 0 10px red;
        } 
        .text{
        	padding-left: 3px;
			text-align: center;
            color: white;
        }
		.search-box input::-webkit-input-placeholder {
			color: #ccc;
			font-size: 13px;
		}
		.search-box input::-moz-input-placeholder {
			color: #ccc;
			font-size: 13px;
		}
		.search-box input::-ms-input-placeholder {
			color: #ccc;
			font-size: 13px;
		}
		.history-panel{
             z-index: 999;
			width: 100%;
			background-color:rgb(235, 196, 179) ;
			position: absolute;
			top: 52px;
			left: -42px;
		}
		.history-panel .shistory{
             z-index: 999;
			width: 100%;
			height: 100%;
			margin: 0 0 0 42px;
			padding: 0;
			background-color:rgb(235, 196, 179);
		}
		.history{
			text-align: left;
			color: #AB4036;
		}
		.clears{
			text-align: center;
			color: rgb(134, 130, 130);
		}
		.clears img {
			width: 5%;
			height: 5%;
			margin: 2px;
			vertical-align: middle;
		}
		.his_ulcon{
             z-index: 999;
			margin: 0 0 0 2px;
			display: block;
			background-color:rgb(235, 196, 179) ;
			height: 100%;
			width: 100%;
		}
		.his_ulcon li{
			height: 100%;
			color: #AB4036;
			line-height:33px;
			text-align: left;
			list-style:none;
			background-image: url("~assets/img/nav-bar/time.png") ;
			background-repeat:no-repeat;
			padding:0 0 0px 10%;
            background-size: 30px;
			border-bottom: solid 1px rgb(224, 133, 128);
		
		}

</style>