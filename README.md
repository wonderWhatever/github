- -|||||||||||||||


## 制作首页app组件
1.Header区域 使用mintUI中的header组件
2.制作底部的tab bar 使用的是MUI中的tab bar组件，在制作购物车小图标的时候用到使用到MUI扩展图标的css
+首先要拷贝到项目之中
+不止是css还要包含扩展的ttf字体文件到项目中

##制作首页（home）中间部分
1.中间部分由一个轮播图和一个六宫格组成
2.轮播图使用的是mint UI里面的swipe组件，在引入数据时使用了
+this.$http.get方法，后面接的then方法加载回调函数接收数据
3.六宫格是采用的mui中的九宫格变化而来，将mui中的span（字体字符）变成了对应的图片

##制作左滑效果
将app.vue中的占位符<router-view>放在了transition标签中，并通过.v-类加入了进入，离开时的样式

##制作新闻列表页面
1.封装了一个全局的根路径Vue.http.options.root
2.和之前一样获取到后台的值
3.将对应的数据渲染到页面上，因为这里的时间格式不对，
+使用了moment插件将其转化为对应的想要的格式，这个过滤器 被设置为了全局的


##制作新闻详情界面
方法基本同上,但有一点要特别注意的是，这里的地址是需要用字符串拼接加上点击的ID的
+不然没有办法通过id读取对应的页面。



##制作发表评论区域
静态的HTML使用了mint UI 中对应的button组件，使用$http获取和运送评论到数据库中，
+值得一提的是在设置时使用了全局的对象格式
+评论的时间也是使用对应的全局过滤器（时间格式为HH:mm:ss）此处的mm 和 ss 必须都是小写


##制作图片分享
使用了mui的区域滚动来制作导航栏。动态渲染了所有的图片分享，对于图片所在的div的样式进行了修改


##制作图片详情页面
1.该界面分为三个部分 标题 缩略图 和 评论
2.标题采用对应的ID从数据库中获取数据动态渲染
3.缩略图采用了vue-preview 插件完成
4.评论就是之前封装的comment组件


##制作商品购买界面
静态HTML搭建一个div之后设置全局为flex布局，之后使用v-for动态载入数据即可。

##制作商品详情界面
1.该界面分为三个部分 顶部的轮播图 中间的购买界面 以及尾部的详细参数和详情、评论
2.每个部分都是采用的MUI的卡片视图完成的，有些需要尾部有些不需要
3.轮播图是采用的将home中的轮播图拆分出来变成组件完成的，在这里因为两个地方一个是item.src一个是item.img所以需要手动转化一下
4.底部的详情界面是采用对应的ID从后台读取的数据完成的渲染
5.购买界面的计算是另一个组件，还通过计算坐标的方法计算了两个小红点之间的值，完成了一个动画效果
6.转跳到不同界面都是带ID一起转跳的，包括评论和商品描述

##制作商品描述 和 商品评论界面
通过对应的ID从接口处拿到值之后渲染即可。





###制作回退功能



go（-1）即可 判断一下主页不显示。