export default{
zIndex:     '|number|--|可选，指定包裹层的z-index，用于浮动的时候控制z轴的叠放|',
container:     '|HTMLElement|父容器|可选，触发的容器，可不同于父容器|',
view:     '|{top?:number,bottom?:number}|{top:0,bottom:0}|可选，用于可视区域的调整，比如顶部有固定位置的头部等，数值对应被遮挡的顶部或底部的高度|',
scrollTarget:     '|HTMLElement|document.documentElement|可选，设置要发生滚动的容器，一般为滚动条所在容器，为主页面的滚动条时候可以不设置|',
};
