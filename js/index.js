//<!-- banner轮播图  start-->
$(document).ready(function() {
				var images = $(".banner .bannerimg li"); //获取的是所有的li也就是所有的图片
				var imageCount = images.length; //图片的数量
				var index = 0; //图片显示索引。
				// 动态增加 状态显示的点点
				for(var i = 0; i < imageCount; i++) {
					$(".banner .points").append("<li data-index='" + i + "'></li>");
				}
				// 给以做外边距，让其居中
				$(".banner .points").css("margin-left", "-" + ($(".banner .points").width() / 2) + "px");
				var points = $(".banner .points li"); //获取所有的点
				points.eq(0).addClass("active");
				var timer = setInterval(function() {
					images.eq(index).fadeOut(500); //前一张淡出
					index = (index + 1) % imageCount; //下一张
					images.eq(index).fadeIn(500); //下一张淡入
					//先从整体上移除所有的active这个类，然后指定某一个添加上active
					points.removeClass("active").eq(index).addClass("active");
				}, 2000);
				
				// 悬停停止定时器自动播放，移开继续播放
				$(".banner").hover(function() {
					//进来
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						images.eq(index).fadeOut(500); //前一张淡出
						index = (index + 1) % imageCount; //下一张
						images.eq(index).fadeIn(500); //下一张淡入
						//先从整体上移除所有的active这个类，然后指定某一个添加上activefff
						points.removeClass("active").eq(index).addClass("active");
					}, 2000);
				});

				// 给状态点添加上一个hover事件，悬停的时候切换到当前这个点所表示的图片上来。
				points.hover(function() {
					var currentIndex = parseInt($(this).attr("data-index")); //获取当前索引值。
					points.removeClass("active").eq(currentIndex).addClass("active");
					$(":animated").stop(true, true);
					images.eq(index).fadeOut(200); //前一张淡出
					index = currentIndex;
					images.eq(index).fadeIn(200); //下一张淡入
				});
				
			});
			

//<!-- banner轮播图  end-->