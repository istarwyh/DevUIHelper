export default{
type:     '|tabs\|pills\|options|tabs|可选，选项卡组的类型|',
showContent:     '|boolean|true|可选，是否显示选项卡对应的内容|',
activeTab:     '|string|--|可选，当前激活的选项卡，值为选项卡的id|',
cssClass:     '|string|--|可选，自定义选项卡组的css类|',
customWidth:     '|string|--|可选，自定义选项卡的宽度|',
vertical:     '|boolean|false|可选，是否垂直显示|',
beforeChange:     '|function\|Promise\|Observable|--|tab切换前的回调函数,返回boolean类型，返回false可以阻止tab的切换|',
};
