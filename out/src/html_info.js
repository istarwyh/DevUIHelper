"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const SCHEMA = [
    "accordion",
    "data||Array<any>或AccordionMenuType||'|Array<any>或AccordionMenuType|--|必选，数据源，可以自定义数组或者使用预设的AccordionMenuType|',",
    "titleKey||string||'|string|\'title\'|可选，标题的属性名，item[titleKey]类型为string，为标题显示内容|',",
    "loadingKey||string||'|string|\'loading\'|可选，子菜单是否加载中的判断属性名，item[loadingKey]类型为boolean|',",
    "childrenKey||string||'|string|\'children\'|可选，子菜单的属性名，item[childrenKey]类型为Array<any>|',",
    "disabledKey||string||'|string|\'disabled\'|可选，是否禁用的属性名，item[disabledKey]类型为boolean|',",
    "activeKey||string||'|string|\'active\'|可选，子菜单是否激活的属性名，item[activeKey]类型为boolean|',",
    "openKey||string||'|string|\'open\'|可选，菜单是否展开的属性名，item[openKey]类型为boolean|',",
    "restrictOneOpen||boolean||'|boolean|false|可选，限制一级菜单同时只能打开一个，默认不限制|',",
    "menuItemTemplate||TemplateRef<any>||'|`TemplateRef<any>`|内置|可选，一级菜单内容条模板，可用变量值见下|',",
    "itemTemplate||TemplateRef<any>||'|`TemplateRef<any>`|内置|可选，二级菜单内容条模板，可用变量值见下|',",
    "noContentTemplate||TemplateRef<any>||'|`TemplateRef<any>`|内置|可选，没有内容的时候使用自定义模板，可用变量值见下|',",
    "loadingTemplate||TemplateRef<any>||'|`TemplateRef<any>`|内置|可选，加载中使用自定义模板，可用变量值见下|',",
    "innerListTemplate||TemplateRef<any>||'|`TemplateRef<any`>|内置|可选，二级菜单内容完全自定义，用做折叠面板，可用变量值见下|',",
    "linkType||'routerLink'||'|`\'routerLink\'\|\'hrefLink\'\|\'dependOnLinkTypeKey\'\|\'\'`|\'\'|可选，`\'routerLink\'`为路由场景；`\'hrefLink\'`为外部链接场景；`\'dependOnLinkTypeKey\'`为动态路由或外部链接场景；`\'\'`为默认非链接类型（无法右键打开新标签页）|',",
    "linkTypeKey||string||'|`string`|\'linkType\'|可选，链接内容的类型的key值，用于linkType为`\'dependOnLinkTypeKey\'`时指定对象链接类型属性名，item[linkTypeKey]类型为`\'routerLink\'|\'hrefLink\'\|string`，其中`\'routerLink\'`为路由链接，`\'hrefLink\'`为外部链接，其他为默认非链接类型|',",
    "linkKey||string||'|`string`|\'link\'|可选，链接内容的key，用于linkType为连接类型记非`\'\'`时，链接的取值的属性值，item[linkKey]为路由地址或者超链接地址|',",
    "linkTargetKey||string||'|`string`|\'target\'|可选，链接目标窗口的key，用于链接类型，item[linkTargetKey]为单个链接的目标窗口|',",
    "linkDefaultTarget||string||'|`string`|\'_self\'|可选，不设置target的时候target默认值，用于链接类型|',",
    "alert",
    "type||'success'||'|\'success\'\|\'danger\'\|\'warning\'\|\'info\'|\'info\'|必选，指定警告提示的样式',",
    "cssClass||string||'|string|--|可选，自定义class名|',",
    "closeable||boolean||'|boolean|true|可选，默认显示关闭按钮|',",
    "dismissTime||number||'|number|--|可选，自动关闭alert的延迟时间(单位：ms)|',",
    "showIcon||boolean||'|boolean|true|可选，是否使用默认的类型图标|',",
    "anchor",
    "dAnchor||string||'|string|--|必选，设置一个锚点的名字|',",
    "anchorActive||string||'|string|--|可选，锚点处于激活状态的时候，模块生效对应的css类名|',",
    "auto-complete",
    "source||Array<any>||'|Array<any>|--|必选，有searchFn的情况下可以不必选|',",
    "disabled||boolean||'|boolean|false|可选，是否禁止指令|',",
    "cssClass||string||'|string|--|可选，自定义class名|',",
    "delay||number||'|number|300|可选，只有在delay时间经过后并且输入新值，才做搜索查询|',",
    "disabledKey||string||'|string|--|可选，禁用单个选项;当传入资源source选项类型为对象,比如设置为\'disabled\',则当对象的disable属性为true时，比如{label",
    "itemTemplate||TemplateRef||'|TemplateRef|--|可选，自定义展示模板|',",
    "noResultItemTemplate||TemplateRef||'|TemplateRef|--|可选，没有匹配项的展示结果|',",
    "formatter||Function||'|Function|--|可选，格式化函数|',",
    "searchFn||Function||'|Function|(term",
    "selectValue||Function||'|Function|--|可选，选择选项之后的回调函数|',",
    "transInputFocusEmit||Function||'|Function|--|可选，inputfocus和blur标志|',",
    "sceneType||string||'|string|--|可选，值为select、suggest|',",
    "tipsText||string||'|string|--|可选，提示文字|',",
    "overview||border||'|border\|none\|multiline\|single|--|可选|',",
    "latestSource||Array<any>||'|Array<any>|--|可选，最近输入|',",
    "enableLazyLoad||boolean||'|boolean|false|可选，是否允许懒加载|',",
    "avatar",
    "customText||string||'|string|--|可选，传入自定义显示文字|',",
    "breadcrumb",
    "showMenu||boolean||'|boolean|false|可选，是否需要显示下拉箭头及下拉列表内容|',",
    "menuList||Array<MenuConfig>||'|Array<MenuConfig>|--|可选，showMenu为true时传入，下拉列表的显示内容|',",
    "isSearch||boolean||'|boolean|false|可选，showMenu为true时传入，下拉列表是否需要搜索功能|',",
    "customMenuTemplate||TemplateRef<any>||'|TemplateRef<any>|--|可选，showMenu为true时传入，自定义下拉列表|',",
    "button",
    "id||string||'|string|--|可选，buttonid|',",
    "type||IButtonType||'|IButtonType|button|可选，类型\'button\'\|\'submit\'\|\'reset\'|',",
    "bsStyle||IButtonStyle||'|IButtonStyle|primary|可选，风格\'primary\'\|\'common\'\|\'text\'\|\'text-dark\'|',",
    "bsSize||IButtonSize||'|IButtonSize|\'md\'|可选，大小\'lg\'\|\'md\'\|\'sm\'\|\'xs\'|',",
    "bordered||boolean||'|boolean|false|可选，是否有边框|',",
    "icon||string||'|string|--|可选，自定义按钮图标|',",
    "showLoading||boolean||'|boolean|false|可选，是否显示加载提示|',",
    "width||number||'|number|--|可选，button宽度|',",
    "disabled||boolean||'|boolean|false|可选，是否禁用button|',",
    "autofocus||boolean||'|boolean|false|可选，按钮加载时是否自动获得焦点|',",
    "checkbox",
    "name||string||'|string|--|可选，表单域名，input原生name属性|',",
    "label||string||'|string|--|可选，显示标签|',",
    "isShowTitle||boolean||'|boolean|true|可选，是否显示title提示|',",
    "disabled||boolean||'|boolean|false|可选，是否禁用|',",
    "labelTemplate||TemplateRef||'|TemplateRef|--|可选，标签的自定义模板|',",
    "halfchecked||boolean||'|boolean|false|可选，半选状态|',",
    "color||string||'|string|--|可选，复选框颜色|',",
    "showAnimation||boolean||'|boolean|true|可选，控制是否显示动画|',",
    "data-table",
    "checkable||【可选】Datatable是否提供勾选行的功能||'|【可选】Datatable是否提供勾选行的功能|`boolean`|--|',",
    "showDetail||【可选】是否提供显示行详情的功能||'|【可选】是否提供显示行详情的功能|`boolean`|--|',",
    "fixHeader||【可选】是否固定表头（在表格超过容器最大高度时，表格可滚动时生效）||'|【可选】是否固定表头（在表格超过容器最大高度时，表格可滚动时生效）|`boolean`|--|',",
    "showSortIcon||【可选】是否显示排序未激活图标，默认显示||'|【可选】是否显示排序未激活图标，默认显示|`boolean`|true|',",
    "dataSource||数据源，用于渲染表格数据||'|数据源，用于渲染表格数据|`any[]`|--|',",
    "hideColumn||【可选】用于隐藏列||'|【可选】用于隐藏列|`string[]`|--|',",
    "lazy||【可选】是否懒加载数据||'|【可选】是否懒加载数据|`boolean`|false|',",
    "pageAllChecked||【可选】选中当前页所有row||'|【可选】选中当前页所有row|`boolean`|--|',",
    "pager||【可选】内置分页||'|【可选】内置分页|`DataTablePager`|--|',",
    "scrollable||【可选】表格在超出容器时，是否可以通过滚动查看表格内容||'|【可选】表格在超出容器时，是否可以通过滚动查看表格内容|`boolean`|--|',",
    "maxWidth||【可选】限制表格最大宽度，默认撑满父容器||'|【可选】限制表格最大宽度，默认撑满父容器|`string`|--|',",
    "maxHeight||【可选】限制最大高度，默认||'|【可选】限制最大高度，默认|`string`|--|',",
    "type||【可选】表格类型||'|【可选】表格类型|`\'striped\'`|\'\'|',",
    "hover||【可选】表格是否开启鼠标hover行高亮效果||'|【可选】表格是否开启鼠标hover行高亮效果|`boolean`|true|',",
    "cssClass||【可选】表格自定义样式||'|【可选】表格自定义样式|`string`|--|',",
    "tableWidth||【可选】表格宽度||'|【可选】表格宽度|`string`|100%|',",
    "columnDefs||【可选】列引用，用于列渲染||'|【可选】列引用，用于列渲染|`ColumnDefs[]`|--|',",
    "onlyOneColumnSort||【可选】是否限制多列排序的输出限制为一项||'|【可选】是否限制多列排序的输出限制为一项|`boolean`|--|',",
    "datepicker",
    "cssClass||string||'|string|--|可选，自定义class|',",
    "locale||string||'|string|\'zh-cn\'|可选，时区|',",
    "showTime||boolean||'|boolean|false|可选，是否显示时分秒|',",
    "yearNumber||number||'|number|12|可选，下拉年份显示数量|',",
    "disabled||boolean||'|boolean|false|可选，禁用选择|',",
    "direction||'up'||'|\'up\'\|\'down\'|\'down\'|可选，日期弹出方向|',",
    "dateConverter||function||'|function|DefaultDateConverter|可选，日期格式化、解析函数|',",
    "dateConfig||any||'|any|见下方介绍|可选，配置参数|',",
    "dateFormat||any||'|any|\'YYYY-MM-DD\'\|\'YYYY-MM-DDHH",
    "minDate||Date||'|Date|newDate(\'01/01/190000",
    "maxDate||Date||'|Date|newDate(\'11/31/209923",
    "autoOpen||boolean||'|boolean|false|可选，初始化是否直接展开|',",
    "customViewTemplate||template||'|template|--|可选，自定义快捷设置日期或自定义操作区内容，用法见demo|',",
    "dragdrop",
    "drawer",
    "drawerContentComponent||Type<any>||'|Type<any>|--|必要参数，传入自定义的component|',",
    "componentFactoryResolver||ComponentFactoryResolver||'|ComponentFactoryResolver|组件库provider提供|可选，一般不需要设置|',",
    "injector||Injector||'|Injector|default|可选，一般不需要设置|',",
    "width||string||'|string|\'300px\'|可选，设置drawer的宽度|',",
    "isCover||boolean||'|boolean|true|可选，是否有遮罩层|',",
    "fullScreen||boolean||'|boolean|false|可选，设置默认是否全屏|',",
    "data||any||'|any|--|可选，可以传入任意对象给drawerContentComponent使用|',",
    "backdropCloseable||boolean||'|boolean|true|可选，设置可否通过点击背景来关闭drawer层|',",
    "escKeyCloseable||boolean||'|boolean|true|可选，设置可否通过esc按键来关闭drawer层|',",
    "onClose||Function||'|Function|--|可选，关闭drawer时候调用|',",
    "afterOpened||Function||'|Function|(none)|7.23.0版本新增\可选，打开drawer后时候调用|',",
    "beforeHidden||Function||'|Function|--|可选,关闭drawer前调用，返回boolean类型，返回false可以阻止关闭drawer层，类型为\()=>boolean\或者\Promise<boolean>\或者\Observable<boolean>\|',",
    "clickDoms||array||'|array|[]|可选，isCover为false的情况下，点击Dom关闭侧滑栏',",
    "destroyOnHide||boolean||'|boolean|true|可选，关闭drawer时是否销毁DrawerComponent，默认销毁',",
    "position||string||'|string|\'right\'|可选，抽屉板出现的位置，\'left\'或者\'right\'',",
    "bodyScrollable||boolean||'|boolean|false|可选，drawer打开body是否可滚动，默认不可滚动',",
    "drawerInstance||DrawerComponent||'|DrawerComponent|返回Drawer对象|',",
    "drawerContentInstance||Type<any>||'|Type<any>|返回Drawer的承载内容的对象，包括传入的data|',",
    "dropdown",
    "editable-select",
    "ngModel||any||'|any|--|可选，绑定选中对象，可双向绑定|',",
    "form",
    "layout||'horizontal'||'|\'horizontal\'\|\'vertical\'\|\'columns\'|\'horizontal\'|可选，设置表单的排列方式|',",
    "labelSize||'sm'||'|\'sm\'\|\'\'\|\'lg\'|\'\'|可选，设置label的占宽，未设置默认为100px,\'sm\'对应80px,\'lg\'对应150px|',",
    "required||boolean||'|boolean|false|可选，表单选项是否必填|',",
    "hasHelp||boolean||'|boolean|false|可选，表单项是否需要帮助指引|',",
    "helpTips||string||'|string|\'\'|可选，表单项帮助指引提示内容，需配合hasHelp使用|',",
    "fullscreen",
    "fullscreen||HTMLElement||'-target|HTMLElement|--|必选，内容投影，设置需要全屏的元素|'+'\n'+'-launch|HTMLElement|--|必选，内容投影，设置触发进入全屏的按钮|',",
    "mode||'immersive'||'|\'immersive\'\|\'normal\'|\'immersive\'|可选，设置全屏模式|',",
    "zIndex||number||'|number|10|可选，设置全屏层级|',",
    "input-number",
    "max||number||'|number|100|可选，最大值|',",
    "min||number||'|number|0|可选，最小值|',",
    "step||number||'|number|1|可选，步进值|',",
    "disabled||boolean||'|boolean|false|可选，禁止输入态开关|',",
    "size||''||'|\'\'\|\'sm\'\|\'lg\'|\'\'|可选，组件大小|',",
    "ngModel||number||'|number|--|可选，组件的值|',",
    "decimalLimit||number||'|number|--|可选，限制小数点后的位数|',",
    "autoFocus||boolean||'|boolean|false|可选，自动获取焦点|',",
    "allowEmpty||boolean||'|boolean|false|可选，是否允许值为空|',",
    "placeholder||string||'|string|--|可选，要显示的placeholder|',",
    "maxLength||number||'|number|0|可选，限制最大输入的长度，0为不限制|',",
    "reg||RegExp||'|RegExp\|string|--|用于限制输入的正则或正则字符串|',",
    "loading",
    "loading||LoadingType||'|LoadingType|--|可选，控制loading状态|',",
    "message||string||'|string|--|可选，loading时的提示信息|',",
    "loadingTemplateRef||TemplateRef<any>||'|TemplateRef<any>|--|可选，自定义loading模板|',",
    "backdrop||boolean||'|boolean|--|可选，loading时是否显示遮罩|',",
    "showLoading||boolean||'|boolean|--|可选，手动启动和关闭loading状态,与loading参数不能同时使用|',",
    "positionType||string||'|string|\'relative\'|可选，指定dLoading宿主元素的定位类型,取值与cssposition属性一致|',",
    "view||Unknown||'|{top?",
    "modal",
    "id||string||'|string|--|必选，弹出框id|',",
    "width||string||'|string|--|可选，弹出框宽度(e.g300px)|',",
    "component||Component||'|Component|--|可选，弹出框组件，弹出框会显示组件内容|',",
    "injector||Injector||'|Injector|true|可选，可以选择指定将用作组件的父级的注射器。|',",
    "data||object||'|object|--|可选，传递到弹出框组件的对象，|',",
    "showAnimate||boolean||'|boolean|--|可选，是否显示动画，|',",
    "backdropCloseable||boolean||'|boolean|true|可选，点击空白处是否能关闭弹出框，|',",
    "componentFactoryResolver||ComponentFactoryResolver||'|ComponentFactoryResolver|--|可选，自定义动态渲染组件解析器，|',",
    "onClose||function||'|function|--|可选，弹出框关闭之后回调的函数，|',",
    "beforeHidden||function、Promise、Observable||'|function、Promise、Observable|--|可选，关闭窗口之前的回调|',",
    "placement||enum('center','top','bottom')||'|enum(\'center\',\'top\',\'bottom\')|\'center\'|可选，弹出框出现的位置|',",
    "offsetX||string||'|string|\'0px\'|可选，弹出框横向偏移|',",
    "offsetY||string||'|string|\'0px\'|可选，弹出框纵向偏移|',",
    "bodyScrollable||boolean||'|boolean|false|可选，modal打开body是否可滚动，默认不可滚动',",
    "maxHeight||string||'|string|--|可选，弹出框最大高度(e.g600px)|',",
    "title||string||'|string|--|可选，弹出框title|',",
    "content||string、Component||'|string、Component|--|可选，弹出框内容，支持字符串和组件|',",
    "html||boolean||'|boolean|--|可选，弹出框内容是否是html|',",
    "dialogtype||string||'|string|\'standard\'|可选，弹出框类型，有四种选择[[standard、success、failed、warning、info]]|',",
    "draggable||boolean||'|boolean|true|可选，弹出框是否可拖拽|',",
    "multi-auto-complete",
    "cssClass||string||'|string|--|可选，自定义class|',",
    "disabled||boolean||'|boolean|--|可选，是否禁用|',",
    "source||Array<any>||'|Array<any>|--|可选，数据列表|',",
    "isOpen||boolean||'|boolean|--|可选，未使用|',",
    "term||string||'|string|--|可选，未使用|',",
    "itemTemplate||TemplateRef||'|TemplateRef|--|可选，未使用|',",
    "noResultItemTemplate||TemplateRef||'|TemplateRef|--|可选,结果不存在时的显示模板|',",
    "dropdown||boolean||'|boolean|--|可选，未使用|',",
    "minLength||number||'|number|--|可选，未使用|',",
    "delay||number||'|number|300|可选，输入结束dalay毫秒后启动查询|',",
    "searchFn||Function||'|Function|(term",
    "formatter||Function||'|Function|(item",
    "valueParser||Function||'|Function|(item",
    "overview||border||'|border\|none\|multiline\|single|\'border\'|可选|',",
    "tipsText||string||'|string|--|可选，提示文字|',",
    "placeholder||string||'|string|(请输入关键字)|可选，placeholder|',",
    "latestSource||Array<any>||'|Array<any>|--|可选，最近输入，最多支持5个，超过5个，截取最后5个|',",
    "autoSubmit||Function||'|Function|--|可选，自动保存|',",
    "pagination",
    "pageSize||number||'|number|10|可选，每页显示最大条目数量|',",
    "total||number||'|number|0|可选，显示的总条目数|',",
    "pageSizeOptions||number[]||'|number[]|10|可选，分页每页最大条目数量的下拉框的数据源，默认有四种选择5,10,20,50|',",
    "pageIndex||number||'|number|1|可选，初始化页码|',",
    "maxItems||number||'|number|10|可选，分页最多显示几个按钮|',",
    "preLink||string||'|string|--|可选，pre按钮文字,默认设置为左箭头图标|',",
    "nextLink||string||'|string|--|可选，next按钮文字,默认设置为右箭头图标|',",
    "size||number||'|number|\'\'|可选，分页组件尺寸，有三种选择lg,,sm,分别代表大，中，小|',",
    "canJumpPage||boolean||'|boolean|true|可选，是否显示分页输入跳转|',",
    "canChangePageSize||boolean||'|boolean|false|可选，是否显示用于选择更改分页每页最大条目数量的下拉框|',",
    "canViewTotal||boolean||'|boolean|true|可选，是否显示总条目|',",
    "totalItemText||string||'|string|\'所有条目\'|可选，总条目文本|',",
    "goToText||string||'|string|\'跳至\'|可选，跳转文本|',",
    "showJumpButton||boolean||'|boolean|false|可选，是否显示跳转按钮|',",
    "showTruePageIndex||boolean||'|boolean|false|可选，页码超出分页范围时候也显示当前页码的开关|',",
    "selectDirection||string||'|string|\'auto\'|可选，下拉菜单默认方向,有三种选择\'auto\',\'up\',\'down\'|',",
    "lite||boolean||'|boolean|false|可选，是否切换为极简模式|',",
    "showPageSelector||boolean||'|boolean|true|可选，极简模式下是否显示页码下拉|',",
    "haveConfigMenu||boolean||'|boolean|false|可选，极简模式下是否显示配置|',",
    "panel",
    "type||string||'|string|\'default\'|可选，面板的类型|',",
    "heading||string||'|string|--|可选，面板的头部标题|',",
    "cssClass||string||'|string|--|可选，自定义class名|',",
    "isCollapsed||boolean||'|boolean|false|可选，是否展开|',",
    "popover",
    "content||string||'|string|--|必选，弹出框的显示内容|',",
    "visible||boolean||'|boolean|false|可选，弹框的初始化弹出状态|',",
    "trigger||'hover'||'|\'hover\'\|\'click\'|\'click\'|弹框触发方式|',",
    "controlled||boolean||'|boolean|false|可选，是否通过trigger方式触发弹框|',",
    "position||'top'||'|\'top\'\|\'right\'\|\'bottom\'\|\'left\'|\'top\'|可选，内容弹出方向|',",
    "popType||'success'||'|\'success\'\|\'error\'\|\'warning\'\|\'info\'\|\'default\'|\'default\'|可选，弹出框类型，样式不同|',",
    "showAnimate||boolean||'|boolean|false|可选，是否显示动画|',",
    "appendToBody||boolean||'|boolean|true|可选，默认为true，仅当popover绑定元素外层宽高不够时，overflow为hidden，popover的弹出框不会被一并隐藏掉。|',",
    "zIndex||number||'|number|1060|可选，z-index值，用于手动控制层高|',",
    "scrollElement||Element||'|Element|window|可选，在这里默认是window,只有当页面的滚动不在window上且appendToBody的属性为true时候才需要传值|',",
    "hoverToContent||boolean||'|boolean|false|可选，是否允许鼠标从宿主移动到内容上，仅需要在trigger为hover的时候设置|',",
    "progress",
    "percentage||number||'|number|0|可选，进度条的值最大为100|',",
    "percentageText||string||'|string|--|可选，进度条当前值的文字说明比如：\'30%\'\|\'4/5\'|',",
    "barbgcolor||string||'|string|\'#5170ff\'|可选，进度条的颜色显示，默认为天蓝色|',",
    "height||string||'|string|\'20px\'|可选，进度条的高度值，默认值为20px|',",
    "isCircle||boolean||'|boolean|false|可选，显示进度条是否为圈形|',",
    "strokeWidth||number||'|number|6|可选，设置圈形进度条宽度，单位是进度条与画布宽度的百分比|',",
    "radio",
    "name||string||'|string|--|必选，单选项名称|',",
    "values||array||'|array|--|必选，单选数据组|',",
    "disabled||boolean||'|boolean|false|可选，是否禁用该单选项组|',",
    "rate",
    "character||string||'|string|--|可选，评分图标的样式，icon与character只能设置其中一个|',",
    "search",
    "size||string||'|string|\'\'|可选，搜索框尺寸，有三种选择lg、\'\'、sm|',",
    "placeholder||string||'|string|\'PleaseInputkeywords\'|可选，输入框的placeholder|',",
    "maxLength||number||'|number|Number.MAX_SAFE_INTEGER|可选，输入框的max-length|',",
    "delay||number||'|number|300|可选，debounceTime的延迟|',",
    "isKeyupSearch||boolean||'|boolean|false|可选，是否支持输入值立即出发searchFn|',",
    "select",
    "options||array||'|array|[]|可选,和searchFn互斥，两者必须有且只有一个。下拉选项资源stringobject|',",
    "isSearch||boolean||'|boolean|false|可选,是否支持过滤搜索|',",
    "scrollHight||string||'|string|\'300px\'|可选,下拉菜单高度,建议使用px作为高度单位|',",
    "hightLightItemClass||string||'|string|\'bg-grey\'|可选,下拉高亮css|',",
    "filterKey||string||'|string|--|当传入资源options类型为object时,必选,针对传入资源options的每项对应字段做过滤操作|',",
    "multiple||boolean||'|boolean|false|可选,是否支持多选|',",
    "isSelectAll||boolean||'|boolean|false|可选,是否显示全选|',",
    "readonly||boolean||'|boolean|true|可选,是否可以输入|',",
    "size||string||'|string|\'\'|可选,下拉选框尺寸,有三种选择\'lg\',\'\',\'sm\'|',",
    "disabled||boolean||'|boolean|false|可选,是否禁用下拉框|',",
    "placeholder||string||'|string|\'PleaseInputkeywords\'|可选,输入框的placeholder|',",
    "searchFn||function||'|function|--|可选,搜索函数,当需要自定义下拉选择过滤规则时可以使用|',",
    "valueParser||function||'|function|--|可选,决定选择框文字如何显示,默认显示filterKey字段或者本身的值|',",
    "formatter||function||'|function|--|可选,决定下拉框每项文字如何显示,默认显示filterKey字段或者本身的值|',",
    "direction||string||'|string|\'\'|可选,下拉选框尺寸,有三种选择\'up\',\'down\',\'auto\'|',",
    "overview||string||'|string|\'border\'|可选,决定选择框样式显示,默认有边框\'border\',\'underlined\'|',",
    "enableLazyLoad||boolean||'|boolean|false|可选,是否支持数据懒加载，用于滚动到底部时动态请求数据|',",
    "extraConfig||object||'|object|N/A|可选,可输入配置项参考示例|'+'\n'+'.labelization|object|N/A|可选,标签化多选结果的配置项,参考示例|'+'\n'+'.labelization.enable|boolean|false|可选下的必填参数,是否启用标签化,使用必须置为true,参考示例|'+'\n'+'.labelization.overflow|string|\'\'|可选,多个标签超出容器时候的预处理行为,值为\'normal\'\|\'scroll-y\'\|\'multiple-line\'\|\'string\'对应默认隐藏,纵向滚动、自动变多行和自定义类|'+'\n'+'.labelization.containnerMaxHeight|string|\'1.8em\'|可选,限制容器最高高度。多行模式下默认不限制高度,单行模式下默认为1.8em|'+'\n'+'.labelization.labelMaxWidth|string|\'100%\'|可选下,限制标签宽度,默认值为行宽的100%|'+'\n'+'.selectedItemWithTemplate|object|N/A|可选,在单选情况下,显示选项使用了template的情况下,顶部选中的内容是否也以template展示,参考示例|'+'\n'+'.selectedItemWithTemplate.enable|boolean|--|可选下的必填参数,是否启用选中项使用模板,使用必须置为true,参考示例|',",
    "optionDisabledKey||string||'|string|\'\'|可选,禁用单个选项;当传入资源options类型为objectObj,比如设置为\'disabled\',则当对象的disable属性为true时,该选项将禁用;当设置为\'\'时不禁用单个选项|',",
    "optionImmutableKey||string||'|string|\'\'|可选,禁用单个选项;当传入资源options类型为objectObj,比如设置为\'immutable\',则当对象的immutable属性为true时,该选项将禁被禁止变更;当设置为\'\'时不生效|',",
    "noResultItemTemplate||TemplateRef||'|TemplateRef|--|可选,没有匹配项的展示结果|',",
    "keepMultipleOrder||string||'|string|\'user-select\'|可选,\'user-select\'\|\'origin\',配置多选的时候是否维持原数组排序还是用户选择的顺序排序,默认是用户顺序|',",
    "customViewTemplate||TemplateRef||'|TemplateRef|--|可选,支持自定义区域显示内容定制,可以使用choose来选择某项,choose需要传两个必填参数,第一个为选择的选项,第二个为选项在列表的index值,event参数选填,若不填请自行处理冒泡,详见demo|',",
    "customViewDirection||'bottom'||'|\'bottom\'\|\'right\'|\'bottom\'|customViewTemplate所处的相对下拉列表的位置|',",
    "appendToBody||boolean||'|boolean|false|可选,true会被附加到body|',",
    "width||number||'|number|--|可选,搭配appendToBody使用，设置下拉宽度',",
    "virtualScroll||boolean||'|boolean|false|可选,是否虚拟滚动，大数据量场景试用|',",
    "allowClear||boolean||'|boolean|false|可选,配置是否允许清空选值，仅单选场景适用|',",
    "inputItemTemplate||TemplateRef||'|TemplateRef|--|可选参数,自定义模板，若传入，会忽略ContentChild|',",
    "slider",
    "min||number||'|number|0|可选，滑动输入条的最小值|',",
    "max||number||'|number|100|可选，滑动输入条的最大值|',",
    "step||number||'|number|1|可选，滑动输入条的步长，取值必须大于等于0，且必须可被(max-min)整除|',",
    "disabled||boolean||'|boolean|false|可选，值为true时禁止用户输入|',",
    "tipsRenderer||function||'|function\|null|(value)=>String(value)|可选，渲染Popover内容的函数，传入null时不显示Popover|',",
    "splitter",
    "orientation||'vertical'||'|\'vertical\'\|\'horizontal\'|\'horizontal\'|可选，指定Splitter分割方向,可选值\'vertical\'\|\'horizontal\'|',",
    "splitBarSize||string||'|string|\'2px\'|可选，分隔条大小，默认2px|',",
    "disabledBarSize||string||'|string|\'1px\'|可选，pane设置不可调整宽度时生效|',",
    "size||string||'|string|--|可选，指定pane宽度，设置像素值或者百分比|',",
    "minSize||string||'|string|--|可选，指定pane最小宽度，设置像素值或者百分比|',",
    "maxSize||string||'|string|--|可选，指定pane最大宽度，设置像素值或者百分比|',",
    "resizable||boolean||'|boolean|true|可选，指定pane是否可调整大小，会影响相邻pane|',",
    "collapsible||boolean||'|boolean|false|可选，指定pane是否可折叠收起|',",
    "collapseDirection||'before'||'|\'before\'\|\'after\'\|\'both\'|\'both\'|可选，指定非边缘pane收起方向，配合collapsible使用|',",
    "status",
    "type||string||'|string|\'invalid\'|必选，类型，值有invalid、running、waiting、important、less-important、error|',",
    "sticky",
    "zIndex||number||'|number|--|可选，指定包裹层的z-index，用于浮动的时候控制z轴的叠放|',",
    "container||HTMLElement||'|HTMLElement|父容器|可选，触发的容器，可不同于父容器|',",
    "view||Unknown||'|{top?",
    "scrollTarget||HTMLElement||'|HTMLElement|document.documentElement|可选，设置要发生滚动的容器，一般为滚动条所在容器，为主页面的滚动条时候可以不设置|',",
    "tabs",
    "type||tabs||'|tabs\|pills\|options|tabs|可选，选项卡组的类型|',",
    "showContent||boolean||'|boolean|true|可选，是否显示选项卡对应的内容|',",
    "activeTab||string||'|string|--|可选，当前激活的选项卡，值为选项卡的id|',",
    "cssClass||string||'|string|--|可选，自定义选项卡组的css类|',",
    "customWidth||string||'|string|--|可选，自定义选项卡的宽度|',",
    "vertical||boolean||'|boolean|false|可选，是否垂直显示|',",
    "beforeChange||function||'|function\|Promise\|Observable|--|tab切换前的回调函数,返回boolean类型，返回false可以阻止tab的切换|',",
    "tags-input",
    "tags||Array||'|Array|[]|必选，记录输入的标签和选择的标签列表|',",
    "displayProperty||string||'|string|\'name\'|可数，列表项使用的属性名|',",
    "placeholder||boolean||'|boolean|\'\'|可选，输入框的placeholder|',",
    "minLength||number||'|number|3|可选，输入标签内容的最小长度|',",
    "maxLength||number||'|number|Number.MAX_SAFE_INTEGER|可选，输入标签内容的最大长度|',",
    "maxTags||number||'|number|Number.MAX_SAFE_INTEGER|可选，可输入标签的最大个数|',",
    "caseSensitivity||boolean||'|boolean|false|可选，大小写敏感，默认忽略大小写|',",
    "spellcheck||boolean||'|boolean|true|可选，input输入框的spellcheck|',",
    "isAddBySpace||boolean||'|boolean|true|可选，是否支持空格键输入标签|',",
    "suggestionList||Array||'|Array|[]|可选，下拉选项，默认可选择的标签列表|',",
    "checkBeforeAdd||Function||'|Function\|Promise\|Observable|无|可选，自定义校验函数，类型为(newTag",
    "tags",
    "tag||string||'|string|--|必选，记录输入的标签和选择的标签|',",
    "titleContent||string||'|string|--|可选，设置鼠标悬浮时title的显示内容|',",
    "labelStyle||string||'|string|\'\'|可选，标签的样式可使用\'blue-w98\'、\'green-w98\'、\'yellow-w98\'、\'orange-w98\'、\'pink-w98\'、\'purple-w98\'、\'turquoise-w98\',\'olivine-w98\',或可传入自定义class|',",
    "deletable||boolean||'|boolean|false|可选，设置标签是否可删除|',",
    "customViewTemplate||TemplateRef||'|TemplateRef|--|可选，自定义标签模板|',",
    "text-input",
    "id||string||'|string|--|可选，文本框id|',",
    "placeholder||string||'|string|--|可选，文本框placeholder|',",
    "disabled||boolean||'|boolean|false|可选，文本框是否被禁用|',",
    "error||boolean||'|boolean|false|可选，文本框是否出现输入错误|',",
    "textarea",
    "id||string||'|string|--|可选，文本框id|',",
    "placeholder||string||'|string|--|可选，文本框placeholder|',",
    "disabled||boolean||'|boolean|false|可选，文本框是否被禁用|',",
    "error||boolean||'|boolean|false|可选，文本框是否出现输入错误|',",
    "resize||none||'|none\|vertical\|horizontal\|both\|inherit|none|可选，文本框是否可调整大小，可选项：不可调整，水平调整，垂直调整，自由调整，默认继承|',",
    "toast",
    "value||Array<Message>||'|Array<Message>|--|必选，消息内容数组，Message对象定义见下文|',",
    "life||number||'|number|5000/10000|可选，超时时间，超时后自动消失，鼠标悬停可以阻止消失，单位毫秒，成功、提示类默认为5000毫秒，错误、警告类默认为10000毫秒|',",
    "sticky||boolean||'|boolean|false|可选，是否常驻，默认自动关闭|',",
    "style||string||'|string|--|可选，样式|',",
    "styleClass||string||'|string|--|可选，类名|',",
    "toggle",
    "size||'small'||'|\'small\'\|\'medium\'\|\'large\'|small|可选，开关尺寸大小|',",
    "color||string||'|string|--|可选，开关打开时的自定义颜色|',",
    "checked||boolean||'|boolean|false|可选，开关是否打开，默认关闭|',",
    "disabled||boolean||'|boolean|false|可选，是否禁用开关|',",
    "beforeChange||Function||'|Function\|Promise\|Observable|--|可选，开关变化前的回调函数,返回boolean类型，返回false可以阻止开关的变化|',",
    "tooltip",
    "content||string||'|string|--|必选，tooltip显示内容|',",
    "position||'left'||'|\'left\'\|\'right\'\|\'top\'\|\'bottom\'|\'bottom\'|可选，tooltip显示位置|',",
    "showAnimate||boolean||'|boolean|false|可选，是否显示划出动画|',",
    "transfer",
    "sourceOption||array||'|array|[]|可选参数，穿梭框源数据|',",
    "targetOption||array||'|array|[]|可选参数，穿梭框目标数据|',",
    "titles||array||'|array|[]|可选参数，穿梭框标题|',",
    "height||string||'|string|320px|可选参数，穿梭框高度|',",
    "isSearch||number||'|number|false|可选参数，是否可以搜索|',",
    "isSourceDroppable||boolean||'|boolean|false|可选参数，源是否可以拖拽|',",
    "isTargetDroppable||boolean||'|boolean|false|可选参数，目标是否可以拖拽|',",
    "disabled||boolean||'|boolean|false|可选参数穿梭框禁止使用|',",
    "tree-select",
    "*@Author||Unknown||yourname",
    "*@Date||Unknown||2020-03-2719",
    "*@LastEditTime||Unknown||2020-03-2810",
    "*@LastEditors||Unknown||yourname",
    "*@Description||Unknown||InUserSettingsEdit",
    "*@FilePath||Unknown||\DevUIHelper\src\params\tree-select.ts",
    "placeholder||string||'|string|--|可选，占位字符串|',",
    "disabled||boolean||'|boolean|false|可选，禁止输入态|',",
    "expandTree||boolean||'|boolean|false|可选，是否自动展开树|',",
    "multiple||boolean||'|boolean|false|可选，多选开关|',",
    "treeNodeIdKey||string||'|string|\'id\'|可选，id键值名|',",
    "treeNodeChildrenKey||string||'|string|\'children\'|可选，children子节点键值名|',",
    "disabledKey||string||'|string|\'disabled\'|可选，disabled节点禁选键值名|',",
    "leafOnly||boolean||'|boolean|false|可选，仅叶节点可选开关|',",
    "delimiter||string||'|string|,|可选，选中结果分隔符（用于多选）|',",
    "iconParentOpen||string||'|string|DefaultIcons.iconParentOpen|可选，树节点打开时图标|',",
    "iconParentClose||string||'|string|DefaultIcons.iconParentClose|可选，树节点关闭时图标|',",
    "iconLeaf||string||'|string|DefaultIcons.iconLeaf|可选，节点图标|',",
    "closeOnNodeSelected||boolean||'|boolean|true|可选，选中节点时关闭下拉框的开关（仅用于单选）|',",
    "width||'auto'||'|\'auto\'\|\'~px\'\|\'~%\'|--|可选，下拉框宽度|',",
    "searchable||boolean||'|boolean|false|可选，是否可搜索树|',",
    "readyEvent||function||'|function|(treeSelect",
    "appendTo||string||'|string|--|可选，将下拉框附着到输入值的DOM选择器节点中，值为空时下拉框在此组件内|',",
    "allowUnselect||boolean||'|boolean|true|可选，是否允许单选模式下反选已选中的项目|',",
    "iconTemplatePosition||'before-checkbox'||'|\'before-checkbox\'\|\'after-checkbox\'|\'before-checkbox\'|可选，自定义template的位置|',",
    "allowClear||boolean||'|boolean|false|可选，是否允许单选模式下点击输入框上的清除按钮来清空已选中的项目。allowUnselect必须为true，否则将破坏体验一致性规则。|',",
    "tree",
    "tree||Array<ITreeItem>||'|Array<ITreeItem>|--|必选，根据传入的数据进行树的渲染|',",
    "treeNodeIdKey||string||'|string|\'id\'|可选，id键值名，用来标识节点的唯一性|',",
    "treeNodeChildrenKey||string||'|string|\'items\'|可选，子节点数组的键值名|',",
    "treeNodeTitleKey||string||'|string|\'title\'|可选，节点显示数据的键值名|',",
    "checkboxDisabledKey||string||'|string|\'disabled\'|可选，节点禁止点选的键值名|',",
    "iconParentOpen||string||'|string|--|可选，自定义父节点展开时的图标|',",
    "iconParentClose||string||'|string|--|可选，自定义父节点收起时的图标|',",
    "iconLeaf||string||'|string|--|可选，自定义叶子节点图标|',",
    "treeNodesRef||TemplateRef<any>||'|TemplateRef<any>|--|可选，自定义节点的显示模板|',",
    "upload",
    "preloadFilesRef||TemplateRef<any>||'|TemplateRef<any>|--|可选，用于创建自定义已选择文件列表模板|',",
    "uploadedFilesRef||TemplateRef<any>||'|TemplateRef<any>|--|可选，用于创建自定义已上传文件列表模板|',",
];
class Attribute {
    constructor(name, valueType, description, completionKind, hasValueSet = false, ValueSet = []) {
        this.name = name;
        this.valueType = valueType;
        this.description = description;
        this.completionKind = completionKind;
        this.hasValueSet = hasValueSet;
        this.ValueSet = ValueSet;
    }
    getName() {
        return this.name;
    }
    getDescription() { return this.description; }
    getcompletionKind() { return this.completionKind; }
    getValueType() { return this.valueType; }
}
exports.Attribute = Attribute;
class Element {
    constructor(name, attritubes = [], description = "") {
        this.name = name;
        this.attritubes = attritubes;
        this.description = description;
    }
    ;
    getElement(s) {
        if (s === this.name) {
            return this;
        }
    }
    addAttritube(attribute) {
        this.attritubes.push(attribute);
    }
    setDescription(description) {
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getAttributes() {
        return this.attritubes;
    }
    getDescription() {
        return this.description;
    }
    getAttribute(attrname) {
        return this.attritubes.filter(attr => {
            return attr.getName() === attrname;
        });
    }
    getcompletionKind() { return vscode_1.CompletionItemKind.Class; }
}
exports.Element = Element;
const EVENT = "event";
const BOOLEAN = "boolean";
const NUMBER = "number";
const STRING = "string";
const OBJECT = "object";
const FUNCTION = "function";
class CParams {
    // result:Element[]=[];
    // elementSet:string[]=[];
    constructor() {
        this.schema = {};
        let _elementName;
        SCHEMA.forEach(elementInfo => {
            const parts = elementInfo.split("||");
            if (parts.length === 1) {
                _elementName = parts[0];
                this.schema[_elementName.toLowerCase()] = new Element(_elementName);
                console.log(_elementName);
            }
            else {
                console.log(_elementName);
                const _element = this.schema[_elementName];
                if (_element) {
                    _element.addAttritube(new Attribute(parts[0], parts[1], parts[2], this.changeToCompletionKind(parts[1])));
                    // console.log(_element.getAttributes()); 
                }
                else {
                    throw Error(`Something wrong with ${_elementName}`);
                }
            }
        });
    }
    findElement(elemenetName) {
        return this.schema[elemenetName.toLowerCase()];
    }
    changeToCompletionKind(type) {
        if (type.startsWith("EventEmitter")) {
            return vscode_1.CompletionItemKind.Function;
        }
        switch (type) {
            case STRING:
                return vscode_1.CompletionItemKind.Text;
            case BOOLEAN:
                return vscode_1.CompletionItemKind.Value;
            case FUNCTION:
                return vscode_1.CompletionItemKind.Function;
            default:
                return vscode_1.CompletionItemKind.Variable;
        }
    }
}
exports.CParams = CParams;
exports.htmlSource = new CParams();
//# sourceMappingURL=html_info.js.map