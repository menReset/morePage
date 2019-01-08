<template>
  <div class="show">
		<img :src="showImg" alt="" class="show-img">
		<div class="load-wrap" v-if="showloading">
			<span><img src="../asserts/loading-ball.gif" alt="">生成图片中...</span>		
		</div>
		<div class="flap-hint">
			<span>长按图片保存</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'show',
		data () {
			return {
				imgUrl:'',
				showImg:'',
				showloading:true
			}
		},
		created () {
			
		},
		mounted () {
			this.imgUrl = this.$router.currentRoute.params.val;
			console.log("111111",this.imgUrl);
			this.goLoad();
		},
		methods:{
			goLoad () {
				var img = new Image();
				img.src = this.imgUrl;
				img.onerror = () => {
					this.showloading = true;
				}	
				img.onload = () => {
					console.log(111);
					this.showloading = false;
					this.showImg = this.$router.currentRoute.params.val;
				}
				console.log(this.showloading);
				console.log(this.imgUrl);
				var timer = setTimeout(() => {
					this.goLoad ();
				},1000);
				if(!this.showloading){
					clearTimeout(timer);
					return
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@px2rem: 37.5rem;
	.show{
		width: 100%;
		height: 100%;
		.show-img{
			width: 100%;
			// height: 100%;
		}
	}
	.load-wrap{
		position: absolute;
		top:45%;
		left:50%;
		transform: translateX(-50%);
		color: #fff;
		font-size: 14px;
		span{
			display: block;
			line-height: 40/@px2rem;
		}
		img{
			float: left;
			width: 40/@px2rem;
		}
	}
	.flap-hint{
		position: fixed;
		bottom: 0;
		text-align: center;
		font-size: 20px;
		width: 100%;
		height: 80/@px2rem;
		line-height: 80/@px2rem;
		// background-color: #610b46;
		background: rgba(0, 0, 0, .5);
		span{
			color: #e9e9be;
		}
	}
</style>

