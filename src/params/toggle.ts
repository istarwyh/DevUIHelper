export default{
size:     '|`small\|medium\|large`|small|可选，开关尺寸大小|',
color:     '|`string`|--|可选，开关打开时的自定义颜色|',
checked:     '|`boolean`|false|可选，开关是否打开，默认关闭|',
disabled:     '|`boolean`|false|可选，是否禁用开关|',
beforeChange:     '|`function\|Promise\|Observable`|(none)|可选，开关变化前的回调函数,返回boolean类型，返回false可以阻止开关的变化|',
};
