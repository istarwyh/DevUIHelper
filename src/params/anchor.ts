export default{
dAnchor:     '|`string`|--|必填，设置一个锚点的名字|',
anchorActive:     '|`string`|--|可选，锚点处于激活状态的时候，模块生效对应的css类名|',
anchor:     '-active-by-anchor-link|点击锚点链接激活|',
dAnchorLink:     '|`string`|--|必填，点击滑动的目标锚点的名字|',
view:     '|`{top?:number,bottom?:number}`|{top:0,bottom:0}|可选，用于可视区域的调整，比如顶部有固定位置的头部等，数值对应被遮挡的顶部或底部的高度|',
defaultAnchor:     '|`string`|--|可选，进入页面后默认被激活的锚点链接，一般设置为第一个锚点，如果不设置，那么第一个锚点需要在滑动到顶部位置的时候才能激活链接|',
scrollTarget:     '|`HTMLElment`|document.documentElement|可选，设置要发生滚动的容器，一般为滚动条所在容器，为主页面的滚动条时候可以不设置|',
};
