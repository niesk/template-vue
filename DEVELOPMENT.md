## 前言
***
> ### 规范代码的好处
> 1、从根本上降低开发成本：\
> 提高代码整体的可读性、可维护性、可复用性。
>
> 2、保证代码的一致性：\
> 软件系统中最重要的因素之一就是编码的一致性。如果编码风格一致，也更加易于维护，因为团队内任何人都可以快速理解并修改。
>
> 3、提升团队整体效率：\
> 开发人员通常需要花费大量的时间来解决代码质量问题，如果都按照规范编写，也有助于团队尽早发现问题，这将提高整个交付过程的效率。
>
> ### 不规范代码的弊端
>
> 1、增加团队成员间的协作负担：\
> 由于缺乏规范，导致代码风格不一，极端情况下，某段代码只有某个人能修改。
>
> 2、团队间协作更加困难：\
> 由于开发人员要适应不同的风格，会导致效率低下。
>
> 3、回顾困难：\
> 在review期间，可能经常为类似的事情做过多的讨论。
>
> 4、影响降低团队整体效率：\
> 影响团队的生产力和质量，严重的甚至会影响团队和谐。


## HTML规范

***

### 页面头部

+ 文档类型统一使用 `html5` 的 `doctype`，编码使用 `UTF-8`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
</head>
</html>
```

+ `PC` 端 `Meta`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="robots" content="none">
  <meta name="keywords" content="your keywords">
  <meta name="description" content="your description">
  <meta name="Copyright" content="Company Name"/>
  <title>PC端HTML模版</title>
</head>
<body>

</body>
</html>
```

+ 移动端 `Meta`

```html
 <!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
  <!-- 为了防止页面数字被识别为电话号码，可根据实际需要添加： -->
  <meta name="format-detection" content="telephone=no">
  <!-- 让添加到主屏幕的网页再次打开时全屏展示，可添加：   -->
  <meta content="yes" name="mobile-web-app-capable">
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta name="robots" content="none">
  <meta name="Copyright" content="Company Name"/>
  <meta name="Description" content="页面的描述内容"/>
  <meta name="Keywords" content="页面关键字"/>
  <title>PC端HTML模版</title>
</head>
<body>

</body>
</html>
```

### ID属性

+ 如无特殊情况，禁用ID属性

### 标签间换行

+ 标签嵌套标签时，必须换行
+ 同一个标签可以不换行
+ 行级元素不允许嵌套块级元素

### 注释规范

#### 单行注释

+ 注释内容前后各一个空格字符
+ 注释位于对应代码的上方
+ 独占一行

```html
<!-- 正例 -->
<!-- Comment Text -->
<div>...</div>

<!-- 反例 -->
<div>...</div><!-- Comment Text-->
<div><!--Comment Text -->
  ...
</div>
```

####

#### 块级注释

用于描述模块的名称以及模块开始与结束的位置
注释内容前后各一个空格字符，`<!-- #region AAAA -->` 表示模块开始，`<!-- #endregion -->` 表示模块结束

```html
<!-- #region Text A -->
<div class="mod_a">
  ...
</div>
<!-- #endregion -->
<!--  此处空一行 -->
```

## CSS 规范

***

### 变量名

样式选择器，属性名，属性值关键字全部使用 `小写字母 + 下划线` 书写。

```css
/* 正例 */
.demo {
  display: block;
}

/* 反例 */
.demo {
  DISPLAY: BLOCK;
}
```

### 选择器
+ 尽量少用通用选择器 *
+ 禁止使用层级过深的选择器，最多3级。
+ 不使用 ID 选择器
+ 不使用无具体语义定义的标签选择器
```css
/* 正例 */
.demo {}
.demo li {}
.demo li p{}

/* 反例 */
*{}
#demo {}
.demo div{}
```
+ 除非是样式 reset 需要，禁止对纯元素选择器设置特定样式，避免样式污染
```css
/* 反例 */

/* 会导致页面所有的a标签都被加上背景 */
a {
  background:url("xxx.png");
}

/* 后期修改可能会添加一些span标签，如果刚好在div里面，会被污染；不利于维护 */
div span {
  display:block;
}
```

### 代码风格
样式书写一般有两种：一种是紧凑格式（Compact），约定统一使用***展开格式***（Expanded）书写样式。
+ *紧凑格式*（Compact）
```css
.demo{ display: block; width: 50px; }
```
+ *展开格式*（Expanded）
```css
.demo {
  display: block;
  width: 50px;
}
```

### 分号
每个属性声明末尾都要加分号；

### 空格与换行
+ 左括号与类名之间一个空格，冒号与属性值之间一个空格
```css
/* 正例 */
.demo { 
    width: 100%; 
}

/* 反例 */
.demo{ 
    width:100%;
}
```
+ 逗号分隔的取值，逗号之后一个空格
```css
/* 正例 */
.demo {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}

/* 反例 */
.demo {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```
+ 为单个 css 选择器或新声明开启新行
```css
/* 正例 */
.demo, 
.demo_logo, 
.demo_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}

/* 反例 */
.demo,.demo_logo,.demo_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

+ 颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0
```css
/* 正例 */
.demo {
    color: rgba(255,255,255,.5);
}

/* 反例 */
.demo {
    color: rgba( 255, 255, 255, 0.5 );
}
```

+ 属性值十六进制数值能用简写的尽量用简写
```css
/* 正例 */
.demo {
    color: #fff;
}

/* 反例 */
.demo {
    color: #ffffff;
}
```

+ 不要为 0 指明单位
```css
/* 正例 */
.demo {
    margin: 0 10px;
}

/* 反例 */
.demo {
    margin: 0px 10px;
}
```

+ 属性顺序

建议遵循以下顺序：
1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
```css
.demo {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

### 样式权重
+ 组件内部不写行类样式
```html
<!-- 反例 -->
<div style="background-color: red"></div>
```
+ 组件内部样式不加!important权重
```css
.demo {
  background-color: red !important;
}
```

### 变量名增强
+ class名都需小写
+ 命名使用英文，禁止使用特殊字符
+ 名称间隔使用-符号
+ 涉及数据、交互等需要联调的部分，禁止通过id选择器定义样式，以免开发过程中id名变化，引起页局错乱
+ 基于姓氏命名法（继承 + 外来）
  祖先模块不能出现`-`，除了是全站公用模块，如 `mod-` 系列的命名：
```html
<!-- 推荐 -->
<div class="modulename">
	<div class="modulename-info">
		<div class="modulename-son"></div>
		<div class="modulename-son"></div>
		...
	</div>
</div>
	
<!-- 这个是全站公用模块，祖先模块允许直接出现`-` -->
<div class="mod-info">
	<div class="mod-info-son"></div>
	<div class="mod-info-son"></div>
	...		
</div>

<!-- 不推荐 -->
<div class="modulename-info">
	<div class="modulename-info-son"></div>
	<div class="modulename-info-son"></div>
	...		
</div>
```
在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀
```html
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info"></div>
</div>
```
当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块
```html
<!-- 推荐 -->
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename-info-user-img 首字母缩写-->
    			<div class="miui-tit"></div>
    			<div class="miui-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>

<!-- 不推荐 -->
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<div class="modulename-info-user-img-tit"></div>
    			<div class="modulename-info-user-img-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>
```

### SASS规范
SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。
考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法
#### SASS注释规范
`SASS` 支持 `CSS` 标准的多行注释 `/* */`，同时也支持单行注释 `//`。
+ 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
+ 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
+ 当多行注释内容第一个字符是感叹号 “!” 的时候，即 `/*! */`，SASS 无论用哪一种编译方式编译注释都会保留
+ 注释内容可以加入 SASS 变量

`SCSS` 文件内
+ 全部遵循 CSS 注释规范
+ 不使用 /*! */ 注释方式
+ 注释内不放 SASS 变量

标准的注释规范如下：
```scss
/**
 * @desc File Info
 * @author niesk
 * @date 2022-09-01
 */

/* Module A */
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}


/* Module B */
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
```
#### 变量
可复用属性尽量抽离为页面变量，易于统一维护
```scss
// CSS
.demo {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.demo {
    color: $color;
    border-color: $color;
}
```

#### 混合(mixin)
共用变量，必须使用 `@include` 调用，避免编码时重复输入代码段
````scss
// CSS
.demo_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.demo_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.demo_1 {
    @include radius; //参数使用默认值
}
.demo_2 {
    @include radius(10px);
}


// CSS
.demo_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.demo_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.demo_1 {
    @include icon(-10px, 0);
}
.demo_2 {
    @include icon(-20px, 0);
}
````

#### 占位选择器 %
如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用
```scss
//scss
%border-box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.demo {
    @extend %border-box;
}
```

#### For 循环
```scss
// CSS
.demo_1 {background-position: 0 -20px;}
.demo_2 {background-position: 0 -40px;}
.demo_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .demo_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```
注意：`#{}` 是连接符，变量连接使用时需要依赖

#### Each 循环
```scss
// CSS
.demo_list {
    background-image: url(/img/demo_list.png);
}
.demo_detail {
    background-image: url(/img/demo_detail.png);
}

// SCSS
@each $name in list, detail {
    .demo_#{$name} {
        background-image: url(/img/demo_#{$name}.png);
    }
}

// CSS
.demo_list {
    background-image: url(/img/demo_list.png);
    background-color: red;
}
.demo_detail {
    background-image: url(/img/demo_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .demo_#{$name} {
        background-image: url(/img/demo_#{$name}.png);
        background-color: $color;
    }
}
```

#### function函数
```scss
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}

.demo {
    font-size: pxToRem(12px);
}
```

#### 运算规范
运算符之间空出一个空格
```scss
.demo {
    width: 100px - 50px;
    height: 30px / 5;
}
```
注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意
```scss
// 正确的运算格式
.demo {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```

### 重置样式

#### PC端
```css
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form,header,section,article,footer{margin:0;}
body,button,input,select,textarea{font:12px/1.5 tahoma,'\5FAE\8F6F\96C5\9ED1',sans-serif}
h1,h2,h3,h4,h5,h6{font-size:100%}
em,b{font-style:normal}
a{text-decoration:none} 
a:hover{text-decoration:underline}
img{border:0} 
button,input,select,textarea{font-size:100%;outline:none}
table{border-collapse:collapse;border-spacing:0}
body,td,th,ul,ol{padding:0}
```

#### 移动端
有较多文字的文章类页面：
```css
/* 移动端常用reset.css (文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;}
a {text-decoration:none;}
ul,li{list-style: none}
```
如果页面无文字，或者不希望文字被长按选中，可使用下面的reset；适合于大多数专题页面
```css
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75  -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;-webkit-tap-highlight-color: rgba(0,0,0,0);}
a {text-decoration:none;}
ul,li{list-style: none}
a, img {-webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */}
html, body {
    -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
    user-select: none;
}
```

### 媒体查询
#### 常用查询语句
+ 判断设备横竖屏
```css
  /* 横屏 */
  @media all and (orientation :landscape) {
  
  } 
  
  /* 竖屏 */
  @media all and (orientation :portrait) {
  
  }
```
+ 判断设备宽高
```css
 /* 设备宽度大于 320px 小于 640px */
@media all and (min-width:320px) and (max-width:640px) {    }
```
+ 判断设备像素比
```css
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {

}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {

}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {

}
```

## Javascript 规范
***

### 命名
+ 变量、函数使用 `camelCase` 规范
+ 类使用及类的构造函数 `PascalCase` 规范
> 在 JavaScript 中 `new` 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 `new` 来调用。约定构造函数的首字母要大写，以此来区分构造函数和普通函数。
```javascript
// 正例
const fooItem = new Foo()

// 反例
const fooItem = new foo()
```

### 声明与赋值
JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量
```javascript
// 正例
const a = 1
const b = 1
const c = 1

// 反例
const a = b = c = 1
const a, b, c
```

### 分号
+ 遵循 `Standard` 的规范，不使用分号。
> 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号
```javascript
// 正例
const test = 'good';

// 反例
const test = 'good'
```

### 空格与换行
+ 如果是大括号内为空，则简洁地写成 `{}` 即可，大括号中间无需换行和空格；
+ 如果是非空代码块则：
    + 左大括号前不换行。
    + 左大括号后换行。
    + 右大括号前换行。
    + 右大括号后还有 else 等代码则不换行；表示终止的右大括号后必须换行。
+ 左小括号和右边相邻字符之间不出现空格； 右小括号和左边相邻字符之间也不出现空
  格；而左大括号前需要加空格。
+ 任何二目、 三目运算符的左右两边都需要加一个空格。
> 包括赋值运算符 =、逻辑运算符 &&、加减乘除符号等。
+ 逗号后边参数或其他定义，必须加空格， 逗号前不加空格
+ 逗号不和正文内容一起换行
+ 拖尾换行
> 在非空文件中，存在拖尾换行是一个常见的 `UNIX` 风格，它的好处是可以方便在串联和追加文件时不会打断 `Shell` 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。
> 可以通过 .editorconfig 添加 EOL
+ if/for/while/switch/do 等保留字与括号之间都必须加空格
+ 在 for/while/do 语句中必须使用大括号， 即使只有一行代码，也必须加括号
+ 在 if 语句中，如果不换行，后面仅能接 『直接赋值语句』 或 『`return`、`break`、`continue`』 语句。否则，加大括号。
```javascript
// 反例
if (空格 a == b 空格)
```
+ 冒号左边不空格，右边空格
```javascript
// 正例
const obj = { 'foo': 'haha' }

// 反例
const obj = { 'foo'(不空格) : (空格)'haha' }
```
```javascript
// 逗号后边参数或其他定义，必须加空格， 逗号前不加空格
function test(args, args2, args3) {
    // 缩进 2 个空格
    const say = "hello"
    // 运算符的左右必须有一个空格
    const flag = 0
    // 关键词 if 与括号之间必须有一个空格，括号内的 f 与左括号， 0 与右括号不需要空格
    if (flag == 0) {
    	console.log(say)
    }
    
    // 上面需要空一行
    // 左大括号前加空格且不换行；左大括号后换行
    if (flag == 1) {
    	console.log("world");
    // 右大括号前换行，右大括号后有 else，不用换行
    } else {
    	console.log("ok");
    	// 在右大括号后直接结束，则必须换行
    }
    
    // 逗号不和后边的内容一起换行
	const foo = ['name',
            'age']
}
// 拖尾换行：若此处为文件的最后一行，必须空行
```
+ 不同的逻辑代码段，必须换行
+ 除此之外的情况，都没有多余的空格（即仅允许语法空格）
+ 单行最多 140 个文字，超过必须换行。

### 语言规范
#### 对象
+ 请使用字面量值创建对象，eslint: [no-new-object](https://eslint.org/docs/rules/no-new-object.html)
```javascript
// 正例
const obj = {}

// 反例
const obj = new Object()
```
+ 勿使用保留字作为对象的键值，这样在 IE8 下不会生效
```javascript
// 正例
const obj = {
  defaults: {},
  common: {}
}

// 反例
const obj = {
  default: {},  // default 是保留字
  common: {}
}
```
+ 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建
> 原因：因为这样做就可以让你在一个地方定义所有的对象属性
```javascript
function getKey(k) {
  return `a key named ${k}`
}

// 正例
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
};

// 反例
const obj = {
  id: 5,
  name: 'San Francisco'
};
obj[getKey('enabled')] = true
```
+ 尽量使用对象方法的简写方式，eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)
```javascript
// 正例
const item = {
  value: 1,

  addValue (val) {
    return item.value + val
  }
}

// 反例
const item = {
  value: 1,

  addValue: function (val) {
    return item.value + val
  }
}
```
+ 请使用对象属性值的简写方式，eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)
> 原因：这样更简短且描述更清楚
```javascript
const job = 'FrontEnd'

// 正例
const item = {
  job
}

// 反例
const item = {
  job: job
}
```
+ 将简写的对象属性分组后统一放到对象声明的开头
> 原因：这样更容易区分哪些属性用了简写的方式
```javascript
const job = 'FrontEnd'
const department = 'DEMO'

// 正例
const item = {
  job,
  department,
  sex: 'male',
  age: 25
}

// 反例
const item = {
  sex: 'male',
  job,
  age: 25,
  department
}
```

+ 只对非法标识符的属性使用引号，eslint: [quote-props](https://eslint.org/docs/rules/quote-props.html)
> 原因：因为通常来说我们认为这样主观上会更容易阅读，这样会带来代码高亮上的提升，同时也更容易被主流 `JavaScript` 引擎优化
```javascript
// 正例
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5
}

// 反例
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5
}
```

+ 不要直接使用 `Object.prototype` 的方法, 例如 `hasOwnProperty`, `propertyIsEnumerable` 和 `isPrototypeOf` 方法，eslint: [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
> 原因：这些方法可能会被对象自身的同名属性覆盖 - 比如 `{ hasOwnProperty: false }` 或者对象可能是一个 `null` 对象(`Object.create(null)`)
```javascript
// 反例
console.log(object.hasOwnProperty(key))

// 正例
console.log(Object.prototype.hasOwnProperty.call(object, key))

// 更优
const has = Object.prototype.hasOwnProperty // cache the lookup once, in module scope.
console.log(has.call(object, key))
```

+ 优先使用对象展开运算符 `...` 来做对象（深|浅）拷贝而不是使用 `Object.assign`
```javascript
// very bad
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 })
delete copy.a // so does this

// 反例
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// 正例
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }
```

#### 数组
+ 请使用字面量值创建数组，eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)
```javascript
// 反例
const items = new Array()

// 正例
const items = []
```

+ 使用展开运算符 `...` 复制数组
```javascript
// 反例
const items = []
const itemsCopy = []
const len = items.length
let i

// 反例
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i]
}

// 正例
itemsCopy = [...items]
```

+ 将可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`
```javascript
const foo = document.querySelectorAll('.foo')

// 正例
const nodes = Array.from(foo)

// 更优
const nodes = [...foo]
```

+ 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`
```javascript
// 正例
[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})

// 正例
[1, 2, 3].map(x => x + 1)

// 反例
const flat = {}
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item)
  flat[index] = flatten
})

// 正例
const flat = {}
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item)
  flat[index] = flatten
  return flatten
})

// 反例
inbox.filter((msg) => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  } else {
    return false
  }
})

// 正例
inbox.filter((msg) => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  }

  return false
})
```
+ 如果一个数组有多行则要在数组的开括号后和闭括号前使用新行
```javascript
// 反例
const arr = [
  [0, 1], [2, 3], [4, 5]
]

const objectInArray = [{
  id: 1
}, {
  id: 2
}]

const numberInArray = [
  1, 2
]

// 正例
const arr = [[0, 1], [2, 3], [4, 5]]

const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
]

const numberInArray = [
  1,
  2
]
```

#### 解构赋值
+ 当需要使用对象的多个属性时，请使用解构赋值，eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)
> 原因：解构可以避免创建属性的临时引用
```javascript
// 反例
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// 正例
function getFullName (user) {
  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}

// 更优
function getFullName ({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
```

+ 当需要使用数组的多个值时，请同样使用解构赋值，eslint: prefer-destructuring
```javascript
const arr = [1, 2, 3, 4]

// 反例
const first = arr[0]
const second = arr[1]

// 正例
const [first, second] = arr
```

+ 函数需要回传多个值时，请使用对象的解构，而不是数组的解构
> 原因：可以非破坏性地随时增加或者改变属性顺序
```javascript
// 反例
function doSomething () {
  return [top, right, bottom, left]
}

// 如果是数组解构，那么在调用时就需要考虑元素的顺序
const [top, xx, xxx, left] = doSomething()

// 正例
function doSomething () {
  return { top, right, bottom, left }
}

// 此时不需要考虑属性的顺序
const { top, left } = doSomething()
```

#### 字符串
+ 字符串统一使用单引号的形式 ``，eslint: [quotes](https://eslint.org/docs/rules/quotes.html)
```javascript
// 反例
const department = "DEMO"

// 正例
const department = 'DEMO'
```
+ 字符串太长的时候，请不要使用字符串连接符换行 `\`，而是使用 `+`
```javascript
const str = '凹凸实验室 凹凸实验室 凹凸实验室' +
  '凹凸实验室 凹凸实验室 凹凸实验室' +
  '凹凸实验室 凹凸实验室'
```

+ 程序化生成字符串时，请使用模板字符串，eslint: [prefer-template](http://eslint.org/docs/rules/prefer-template.html) [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)
```javascript
const test = 'test'

// 反例
const str = ['a', 'b', test].join()

// 反例
const str = 'a' + 'b' + test

// 正例
const str = `ab${test}`
```

+ 不要在字符串中使用不必要的转义字符， eslint: [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)
```javascript
// 反例
const foo = '\'this\' \i\s \"quoted\"'

// 正例
const foo = '\'this\' is "quoted"'
const foo = `my name is '${name}'`
```

#### 函数
+ 不要在非函数代码块（`if` , `while` 等）中声明函数，eslint：[no-loop-func](http://eslint.org/docs/rules/no-loop-func.html)
```javascript
// 反例
if (isUse) {
  function test () {
    // do something
  }
}

// 正例
let test
if (isUse) {
  test = () => {
    // do something
  }
}
```
+ 不要将参数命名为 `arguments`，会导致该参数的优先级高于每个函数作用域内原先存在的 `arguments` 对象
```javascript
// 反例
function foo (name, options, arguments) {
  // ...
}

// 正例
function foo (name, options, args) {
  // ...
}
```

+ 不要使用 `arguments`，使用 剩余运算符 `...`
> `arguments` 只是一个类数组，而 `...` 是一个真正的数组
```javascript
// 反例
function test () {
  const args = Array.prototype.slice.call(arguments)
  return args.join('')
}

// 正例
function test (...args) {
  return args.join('')
}
```

+ 使用参数默认值语法而不是修改函数参数
```javascript
// really bad
function handleThings (opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {}
  // ...
}

// still bad
function handleThings (opts) {
  if (opts === void 0) {
    opts = {}
  }
  // ...
}

// good
function handleThings (opts = { }) {
  // ...
}
```

+ 将参数默认值放在最后
```javascript
// 反例
function handleThings (opts = {}, name) {
  // ...
}

// 正例
function handleThings (name, opts = {}) {
  // ...
}
```

+ 不要更改参数，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)
```javascript
// 反例
function f1 (obj) {
  obj.key = 1
}

// 正例
function f2 (obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1
}
```

+ 不要给参数重新赋值，eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)
> 原因：参数重新赋值可能会导致无法预期的行为，尤其是当操作 `arguments` 对象时，也可能导致优化问题，尤其是在 V8 引擎中
```javascript
// 反例
function f1 (a) {
a = 1
}

function f2 (a) {
if (!a) { a = 1 }
}

// 正例
function f3 (a) {
const b = a || 1
}

function f4 (a = 1) {
}
```

+ 构造函数的参数
  在 JavaScript 中，通过 `new` 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号
```javascript
// 正例
const person = new Person()

// 反例
const person = new Person
```

#### 箭头函数
+ 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记. eslint: [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html), [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing.html)
> 原因：它将创建在 `this` 上下文中执行的函数版本，通常是您想要的，并且语法更简洁 \
> 如果你有一个相当复杂的函数，则可以将该逻辑移到其自己的命名函数表达式中
```javascript
// 反例
[1, 2, 3].map(function (x) {
  const y = x + 1
  return x * y
})

// 正例
[1, 2, 3].map((x) => {
  const y = x + 1
  return x * y
})
```

+ 如果函数体只包含一条没有副作用的返回表达式的语句，可以省略花括号并使用隐式的 `return`， 否则保留花括号并使用 `return` 语句，eslint: [arrow-parens](https://eslint.org/docs/rules/arrow-parens.html), [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style.html)
```javascript
// 反例
[1, 2, 3].map(number => {
  const nextNumber = number + 1
  `A string containing the ${nextNumber}.`
})

// 正例
[1, 2, 3].map(number => `A string containing the ${number}.`)

// 正例
[1, 2, 3].map((number) => {
  const nextNumber = number + 1
  return `A string containing the ${nextNumber}.`
})

// 正例
[1, 2, 3].map((number, index) => ({
  index: number
}))
```

+ 函数如果只接收一个参数并且没使用花括号，则省略圆括号，否则为了清晰明确则使用圆括号包裹参数，注意：总是使用圆括号也是可以接受的，eslint: [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)
```javascript
// 反例
[1, 2, 3].map((x) => x * x)

// 正例
  [1, 2, 3].map(x => x * x)

// 正例
  [1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we’ve broken it ` +
  'over multiple lines!'
))

// 反例
  [1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})

// 正例
  [1, 2, 3].map((x) => {
  const y = x + 1
  return x * y
})
```

#### 类&构造函数
+ 使用 `class`，避免直接操作 `prototype`
```javascript
// 反例
function Queue (contents = []) {
  this._queue = [...contents]
}
Queue.prototype.pop = function () {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// 正例
class Queue {
  constructor (contents = []) {javascript
    this._queue = [...contents]
  }

  pop () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}
```
+ 避免类成员重复，eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)
> 原因：重复的类成员声明会默认使用最后声明的，通常会导致 bug
```javascript
// 反例
class Foo {
  bar () { return 1 }
  bar () { return 2 }
}

// 正例
class Foo {
  bar () { return 1 }
}

// 正例
class Foo {
  bar () { return 2 }
}
```

#### 模块
+ 使用标准的 ES6 模块语法 `import` 和 `export`
```javascript
// 反例
const util = require('./util')
module.exports = util

// 正例
import Util from './util'
export default Util

// 更优
import { Util } from './util'
export default Util
```
+ 不要使用 `import` 的通配符 `*`，这样可以确保你只有一个默认的 `export`
```javascript
// 反例
import * as Util from './util'

// 正例
import Util from './util'
```
+ 同个文件每个模块只允许 `import` 一次，有多个 `import` 请书写在一起，eslint: [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)
```javascript
// 反例
import foo from 'foo'
// … some other imports … //
import { named1, named2 } from 'foo'

// 正例
import foo, { named1, named2 } from 'foo'

// 正例
import foo, {
  named1,
  named2
} from 'foo'
```
+ 将所有 `import` 语句放在文件最前方，eslint: [import/imports-first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
```javascript
// 反例
import foo from 'foo'
foo.init()

import bar from 'bar'

// 正例
import foo from 'foo'
import bar from 'bar'

foo.init()
```

+ 多行导入应该像多行数组和对象文字一样缩进
```javascript
// 反例
import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path'

// 正例
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE
} from 'path'
```

+ 在模块 `import` 声明中禁止使用 `Webpack` 的 `loader` 语法，eslint: [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
```javascript
// 反例
import fooSass from 'css!sass!foo.scss'
import barCss from 'style!css!bar.css'

// 正例
import fooSass from 'foo.scss'
import barCss from 'bar.css'
```

#### 对象属性
+ 使用 `.` 来访问对象属性
```javascript
const joke = {
  name: 'haha',
  age: 28
}

// 反例
const name = joke['name']

// 正例
const name = joke.name
```
+ 当访问的属性是变量时使用 `[]`
```javascript
const luke = {
  jedi: true,
  age: 28,
}

function getProp (prop) {
  return luke[prop]
}

const isJedi = getProp('jedi')
```

#### 变量声明
+ 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染。eslint: [no-undef](http://eslint.org/docs/rules/no-undef) [prefer-const](http://eslint.org/docs/rules/prefer-const)
```javascript
// 反例
demo = new Demo()

// 正例
const demo = new Demo()
```
+ 将所有的 `const` 和 `let` 分组
```javascript
// 反例
let a
const b
let c
const d
let e

// 正例
const b
const d
let a
let c
let e
```
+ 变量不要进行链式赋值
> 原因：变量链式赋值会创建隐藏的全局变量
```javascript
// 反例
(function example() {
let a = b = c = 1
}())

console.log(a) // throws ReferenceError
console.log(b) // 1
console.log(c) // 1

// 正例
(function example() {
let a = 1
let b = a
let c = a
}())

console.log(a) // throws ReferenceError
console.log(b) // throws ReferenceError
console.log(c) // throws ReferenceError
```

+ 不允许出现未被使用的变量，eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
> 原因：声明但未被使用的变量通常是不完全重构犯下的错误.这种变量在代码里浪费空间并会给读者造成困扰
```javascript
// 反例

var some_unused_var = 42

// Write-only variables are not considered as used.
var y = 10
y = 5

// A read for a modification of itself is not considered as used.
var z = 0
z = z + 1

// Unused function arguments.
function getX (x, y) {
  return x
}

// 正例

function getXPlusY (x, y) {
  return x + y
}

const x = 1
const y = a + 2

alert(getXPlusY(x, y))
```

#### 比较运算符&相等
+ 使用 `===` 和 `!==` 而非 `==` 和 `!=`，eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)
+ 条件声明例如 `if` 会用 `ToBoolean` 这个抽象方法将表达式转成布尔值并遵循如下规则
    + `Objects` 等于 `true`
    + `Undefined` 等于 `false`
    + `Null` 等于 `false`
    + `Booleans` 等于 `布尔值`
    + `Numbers` 在 `+0`, `-0`, 或者 `NaN` 的情况下等于 `false`, 其他情况是 `true`
    + `Strings` 为 `''`时等于`false`，否则是`true`
```javascript
if ([0] && []) {
  // true
  // 数组(即使是空数组)也是对象，对象等于true
}
```

## Typescript规范
***
### 命名
#### 变量和函数
变量和函数名使用 PascalCase 规范
```typescript
// 正例
var fooVar;
function barFunc() { }
```
#### 类
+ 类名使用 `PascalCase` 规范
+ 成员使用 `camelCase` 规范
+ 各成员 `private`、 `public`、 `protected` 属性需明确
```typescript
// 正例
class Employee  {
 	private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// 错误示例
class foo { }
```
#### 接口
+ 接口使用 `PascalCase` 规范
+ 成员使用 `camelCase` 规范

#### 命名空间
使用 `PascalCase` 规范
```typescript
// 正例
namespace Foo { }

// 反例
namespace foo { }
```

#### 枚举
+ 枚举名使用 `PascalCase` 规范
+ 成员使用 `camelCase` 规范
```typescript
// 正例
enum Color {
    Up = 1,
    Down,
    Left,
    Right
}

// 反例
enum color { }
```

### 数组声明
声明数组时使用 `foos: Foo[]` 而不是 `foos: Array<Foo>`，便于阅读

### 类型和接口
当你需要复合类型时，使用 `type`
```typescript
type Foo = number | { someProperty: number }
```
当你需要继承或实现时，使用 `interface`
```typescript
interface Foo {
  foo: string;
}

interface FooBar extends Foo {
  bar: string;
}

class X implements FooBar {
  foo: string;
  bar: string;
}
```
### 使用 ？代替 undefined 类型
```typescript
// 正例
interface  IData  {

 level?:  number;

}

// 反例
interface  IData  {

 level:  number  | undefined;

}
```
