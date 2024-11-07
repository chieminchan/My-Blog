(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{362:function(t,a,s){"use strict";s.r(a);var n=s(25),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v8-工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-工作原理"}},[t._v("#")]),t._v(" 👉 V8 工作原理")]),t._v(" "),a("h2",{attrs:{id:"javascript-内存空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-内存空间"}},[t._v("#")]),t._v(" JavaScript 内存空间")]),t._v(" "),a("p",[t._v("JavaScript 是一门在运行过程中需要检查数据类型，并支持隐式类型转换的语言，即为一门弱类型的动态语言：")]),t._v(" "),a("p",[t._v("1）弱类型，意味支持隐式类型转换，你不需要告诉 JavaScript 引擎这个或那个变量是什么数据类型，JavaScript 引擎在运行代码的时候自己会计算出来。")]),t._v(" "),a("p",[t._v("2）动态，意味着你可以使用同一个变量保存不同类型的数据。")]),t._v(" "),a("p",[t._v("在 JavaScript 的执行过程中，主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。其中的代码空间主要是存储可执行代码的，栈空间主要拥有管理存储执行上下文，堆空间则是存储引用数据类型。")]),t._v(" "),a("h3",{attrs:{id:"栈空间和堆空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈空间和堆空间"}},[t._v("#")]),t._v(" 栈空间和堆空间")]),t._v(" "),a("h4",{attrs:{id:"栈空间-call-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈空间-call-stack"}},[t._v("#")]),t._v(" 栈空间（Call Stack）")]),t._v(" "),a("p",[t._v("栈空间就是调用栈，一种用来管理执行上下文的数据结构，符合后进先出的规则。(可以理解为是 《"),a("a",{attrs:{href:"https://chieminchan.vercel.app/articles/JavaScript/JavaScript%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 执行上下文"),a("OutboundLink")],1),t._v(" 》中的执行上下文栈。)")]),t._v(" "),a("p",[t._v("每调用一个函数，JavaScript 引擎会为其创建执行上下文，并把该执行上下文压入调用栈，然后 JavaScript 引擎开始执行函数代码。")]),t._v(" "),a("p",[t._v("如果在一个函数 A 中调用了另外一个函数 B，那么 JavaScript 引擎会为 B 函数创建执行上下文，并将 B 函数的执行上下文压入栈顶。当前函数执行完毕后，JavaScript 引擎会将该函数的执行上下文弹出栈。")]),t._v(" "),a("p",[t._v("不过有一点要注意，调用栈是有大小的，当入栈的执行上下文超过一定数目，JavaScript 引擎就会报错，我们把这种错误叫做栈溢出。（错位信息：超过了最大栈调用大小，"),a("code",[t._v("Uncaught RangeError: Maximum call stack size exceeded")]),t._v("）。")]),t._v(" "),a("p",[t._v("让我们来看一个栈空间存储数据的栗子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"极客时间"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"极客时间"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("这段代码执行时，首先会创建一个全局执行上下文，被压入栈中；")])]),t._v(" "),a("li",[a("p",[t._v("对全局执行上下文中的出现的变量，初始化到变量环境中，初始化值为 undefined；")])]),t._v(" "),a("li",[a("p",[t._v("执行阶段，变量 a 和变量 b 都被赋值为"),a("code",[t._v("极客时间")]),t._v("；此时变量 a 和变量 b 的值都被保存在执行上下文中，而执行上下文又被压入到栈中，所以可以认为变量 a 和变量 b 的值都是存放在栈中的。")])]),t._v(" "),a("li",[a("p",[t._v("执行第 4 行代码，由于 JavaScript 引擎判断右边的值是一个引用类型，这时候处理的情况就不一样了：JavaScript 引擎并不是直接将该对象存放到变量环境中，而是将它分配到堆空间里面，分配后该对象会有一个在“堆”中的地址，然后再将该数据的地址写进 c 的变量值，分配好内存的示意图如下所示：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/stash1.png",alt:"VM8-内存空间",title:"VM8-内存空间"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("执行第 5 行代码，将 c 赋值给 d，其实就是把 c 的引用地址赋值给 d，即 c 和 d 的值都是指向同一个在堆中的对象，所以如果通过 c 修改 name 的值，变量 d 的值也跟着改变。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/stash2.png",alt:"VM8-内存空间",title:"VM8-内存空间"}})]),t._v(" "),a("h4",{attrs:{id:"堆空间-memory-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆空间-memory-heap"}},[t._v("#")]),t._v(" 堆空间（Memory Heap）")]),t._v(" "),a("p",[t._v("由上述例子可知，引用类型是存放在堆空间的，在栈空间中只是保留了对象的引用地址，当 JavaScript 需要访问该数据的时候，是通过栈中的引用地址来访问的，相当于多了一道转手流程。")]),t._v(" "),a("p",[t._v("栈空间都不会设置太大，主要用来存放一些原始类型的小数据。")]),t._v(" "),a("p",[t._v("而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。")]),t._v(" "),a("h3",{attrs:{id:"闭包的内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的内存模型"}},[t._v("#")]),t._v(" 闭包的内存模型")]),t._v(" "),a("p",[t._v("在原始类型数据会被存储到栈空间，引用类型会被存到堆空间的基础上，再回来看一下闭包的例子。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 极客时间 "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" innerBar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            myName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" innerBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 极客邦 "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当一个外部函数包含一个内部函数，JavaScript 引擎会对内部函数做一次快速的词法扫描，如果发现内部函数引用了外部函数的变量，JavaScript 引擎会判断这是一个闭包，于是在堆空间创建换一个“closure(foo)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存 myName 变量。")]),t._v(" "),a("p",[t._v("接着继续扫描到 getName 方法时，发现该函数内部还引用变量 test1，于是 JavaScript 引擎又将 test1 添加到“closure(foo)”对象中。这时候堆中的“closure(foo)”对象中就包含了 myName 和 test1 两个变量了。")]),t._v(" "),a("p",[t._v("当产生了闭包时的核心有两步："),a("br"),t._v("\n第一步是需要预扫描内部函数；"),a("br"),t._v("\n第二步是把内部函数引用的外部变量保存到堆中。")]),t._v(" "),a("h2",{attrs:{id:"垃圾数据如何自动回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾数据如何自动回收"}},[t._v("#")]),t._v(" 垃圾数据如何自动回收")]),t._v(" "),a("h3",{attrs:{id:"调用栈的垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈的垃圾回收"}},[t._v("#")]),t._v(" 调用栈的垃圾回收")]),t._v(" "),a("p",[t._v("调用栈中，会有一个记录当前执行状态的指针（称为 ESP 指针） 指向当前正在执行的执行上下文。当执行时完毕，JS 会将 ESP 向下移动，指向另一个上下文。")]),t._v(" "),a("p",[t._v("这个下移操作就是销毁调用栈中执行上下文的过程。")]),t._v(" "),a("h3",{attrs:{id:"堆空间的垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆空间的垃圾回收"}},[t._v("#")]),t._v(" 堆空间的垃圾回收")]),t._v(" "),a("p",[t._v("在上下文销毁后，堆内存依然会被占用，V8 引擎对堆的数据采取垃圾回收器机制。")]),t._v(" "),a("p",[t._v("依据代际假说的两个准则："),a("br"),t._v("\n1）大部分对象在内存中存活时间短"),a("br"),t._v("\n2）不死的对象会活得更久")]),t._v(" "),a("p",[t._v("V8 会把堆分成新生区和老生区："),a("br"),t._v("\n对于新生区，用于存放大多数小的对象。支持 1-8M 容器，因为内存空间不算大，回收次数较为频繁。"),a("br"),t._v("\n对于老生区，用于存放大的对象和新生代晋升的对象。占用空间大，存活时间长。")]),t._v(" "),a("p",[t._v("对于这两块区域，V8 分别使用两个不同的垃圾回收器，以便更高效地实施垃圾回收："),a("br"),t._v("\n副垃圾回收器，主要负责新生代的垃圾回收。"),a("br"),t._v("\n主垃圾回收器，主要负责老生代的垃圾回收。")]),t._v(" "),a("h3",{attrs:{id:"主垃圾回收器和副垃圾回收器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主垃圾回收器和副垃圾回收器"}},[t._v("#")]),t._v(" 主垃圾回收器和副垃圾回收器")]),t._v(" "),a("p",[t._v("两类垃圾回收器在回收操作方式上有一定差异，但大体上都有一套共同的执行流程：")]),t._v(" "),a("ol",[a("li",[t._v("标记：标记空间中的活动对象和非活动对象，把非活动对象标记为可回收对象；")]),t._v(" "),a("li",[t._v("清除：清理回收非活动对象所占据的内存空间；")]),t._v(" "),a("li",[t._v("整理：非活动对象所占据的内存空间被回收后会产生不连续的内存碎片，为了后续分配较大连续内存，需对这些内存碎片进行整理。")])]),t._v(" "),a("h4",{attrs:{id:"新生代区域-副垃圾回收器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新生代区域-副垃圾回收器"}},[t._v("#")]),t._v(" 新生代区域 - 副垃圾回收器")]),t._v(" "),a("p",[t._v("新生代区域中采用 Scavenge 算法来处理，即把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域。")]),t._v(" "),a("p",[t._v("其流程是：")]),t._v(" "),a("ol",[a("li",[t._v("新加入的对象就被放至对象区，对象区快满的时候会触发一轮垃圾回收；")]),t._v(" "),a("li",[t._v("垃圾回收过程中，首先会对对象区的垃圾对象进行标记；")]),t._v(" "),a("li",[t._v("标记阶段完成后，进入清理阶段，副垃圾回收器会清理可回收对象，并将存活对象"),a("strong",[t._v("有序地连续复制")]),t._v("至空闲区（相当于完成了内存碎片整理那一步）；")]),t._v(" "),a("li",[t._v("复制完毕后，将对象区和空闲区进行角色翻转。这样就完成了新生代区的垃圾对象回收操作。")])]),t._v(" "),a("p",[t._v("为了保证新生代区的复制操作的执行效率，新生代区域的空间不会设置太大，避免执行效率低耗时长。")]),t._v(" "),a("p",[t._v("因为新生代的空间不大，容易被需长久存活的对象存满，为了解决这个问题，V8 引擎采用了晋升策略。对新生代区域中经过两轮垃圾回收后依然存活的对象，会晋升被放至老生代区域中。")]),t._v(" "),a("h4",{attrs:{id:"老生代区域-主垃圾回收器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老生代区域-主垃圾回收器"}},[t._v("#")]),t._v(" 老生代区域 - 主垃圾回收器")]),t._v(" "),a("p",[t._v("老生代区域主要存放大对象和新生代晋升对象，有着占用空间大、存活时间长的特点，所以不适用 Scavenge 算法，否则浪费空间且执行效率低。")]),t._v(" "),a("p",[t._v("老生代区域主要采用"),a("strong",[t._v("标记-清除")]),t._v("算法（Mark-Sweep），其流程是：")]),t._v(" "),a("ol",[a("li",[t._v("首先是标记阶段，会从根元素开始，遍历调用栈执行上下文，能达到的对象会被标记为活动对象，否则会被标记可回收数据。")]),t._v(" "),a("li",[t._v("进入清除阶段，会对可回收数据直接进行清理，因此会产出不连续的内存碎片。")]),t._v(" "),a("li",[t._v("进入整理阶段，采用**标记 - 整理(Mark-Compact)**方法（类似标记-清除法），只是不对可回收对象进行清理，而是让所有存活的对象都向一端移动，直接清理掉端边界以外的内存。")])]),t._v(" "),a("h3",{attrs:{id:"全停顿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全停顿"}},[t._v("#")]),t._v(" 全停顿")]),t._v(" "),a("p",[t._v("一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。这种行为叫做全停顿（Stop-The-World）。")]),t._v(" "),a("p",[t._v("对于新生代区，因其空间较小，且存活对象较少，全停顿影响不大。")]),t._v(" "),a("p",[t._v("对于老生代区，堆空间对象较大，整个全停顿过程会导致页面卡顿。")]),t._v(" "),a("p",[t._v("为了降低老生代的垃圾回收而造成的卡顿，V8 采用"),a("strong",[t._v("增量标记法")]),t._v("（Incremental Marking）算法，将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行，直到标记阶段完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/stop.png",alt:"stop",title:"stop"}})]),t._v(" "),a("h2",{attrs:{id:"v8-执行代码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-执行代码流程"}},[t._v("#")]),t._v(" V8 执行代码流程")]),t._v(" "),a("h3",{attrs:{id:"编译器和解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译器和解析器"}},[t._v("#")]),t._v(" 编译器和解析器")]),t._v(" "),a("blockquote",[a("p",[t._v("之所以存在编译器和解释器，是因为机器不能直接理解我们所写的代码，所以在执行程序之前，需要将我们所写的代码“翻译”成机器能读懂的机器语言。按语言的执行流程，可以把语言划分为编译型语言和解释型语言。")])]),t._v(" "),a("p",[t._v("对于编译型语言和解释型语言，都需要将源代码通过"),a("strong",[t._v("词法解析和语法解析生成抽象语法树（ AST）")]),t._v("，然后再分别对这个 AST 继续进行不同方式的解析。")]),t._v(" "),a("h4",{attrs:{id:"编译器处理-ast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译器处理-ast"}},[t._v("#")]),t._v(" 编译器处理 AST")]),t._v(" "),a("p",[t._v("对于编译型语言，有了 AST 之后，计算机可以能理解高级语言代码了，但是需要编译器产生低级语言，比如汇编代码才能被机器执行。直接从 AST 开始距离比较远。")]),t._v(" "),a("p",[t._v("因为 AST 是嵌套的、树形的；汇编代码是线性的、顺序的。所以需要先转成一种线性的代码，再生成低级代码。这里暂时不详细展开具体流程，大概的流程就是：")]),t._v(" "),a("ol",[a("li",[t._v("对 AST 树进行语法分析（代码语法正确性检查）、作用域分析（分析函数块）...；")]),t._v(" "),a("li",[t._v("对语法分析后的 AST 翻译和优化成线性代码（中间代码）；")]),t._v(" "),a("li",[t._v("将线性代码生成汇编代码；")]),t._v(" "),a("li",[t._v("通过汇编器生成处理器能识别的机器码；")]),t._v(" "),a("li",[t._v("如果编译成功，将会生成一个可执行的文件（二进制文件）。但如果编译过程发生了语法或者其他的错误，那么编译器就会抛出异常，最后的二进制文件也不会生成成功。")])]),t._v(" "),a("h4",{attrs:{id:"解释器处理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释器处理流程"}},[t._v("#")]),t._v(" 解释器处理流程")]),t._v(" "),a("p",[t._v("JavaScript 属于解释型语言，因此不需要生成线性代码和进行汇编过程，只需要在每次运行时通过解释器对程序进行动态解释和执行。它的流程主要有：")]),t._v(" "),a("h5",{attrs:{id:"_1-生成-ast-和执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成-ast-和执行上下文"}},[t._v("#")]),t._v(" 1. 生成 AST 和执行上下文")]),t._v(" "),a("p",[t._v("源代码通过词法解析和语法解析生成抽象语法树 AST，同时创建执行上下文。")]),t._v(" "),a("ul",[a("li",[t._v("分词/词法解析（tokenize）")])]),t._v(" "),a("p",[t._v("词法描述的是最小的单词格式，词法解析就是对源代码进行分词，将字符串拆分成一个个最小的不可再拆的单词，又叫 token，比如 if、else、break...，每个 token 识别完就可以抛出来，最终产出一个 token 数组。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/tokenize.png",alt:"tokenize",title:"tokenize"}})]),t._v(" "),a("ul",[a("li",[t._v("解析/语法解析（parse）")])]),t._v(" "),a("p",[t._v("语法解析就是将上一步的 token 数组按照语法规则进行组装，组装成 AST 树。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/ast.png",alt:"ast",title:"ast"}})]),t._v(" "),a("p",[t._v("有了 AST 以后， V8 就会生成该段代码的执行上下文。")]),t._v(" "),a("h5",{attrs:{id:"_2-生成字节码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成字节码"}},[t._v("#")]),t._v(" 2. 生成字节码")]),t._v(" "),a("p",[t._v("有了抽象语法树 AST 和执行上下文，通过"),a("strong",[t._v("解析器 Ignition")]),t._v("根据 AST 生成字节码；（之前没有字节码一说，而是直接将 AST 转成机器码，机器码执行效率高但占用内存大。）")]),t._v(" "),a("p",[t._v("字节码就是介于 AST 和机器码中间的一种代码，高级代码、字节码和机器码的关系如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/bytecode.png",alt:"bytecode",title:"bytecode"}})]),t._v(" "),a("blockquote",[a("p",[t._v("从图中可以看出，机器码所占用的空间远远超过了字节码，所以使用字节码可以减少系统的内存使用。")])]),t._v(" "),a("h5",{attrs:{id:"_3-执行字节码-机器码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行字节码-机器码"}},[t._v("#")]),t._v(" 3. 执行字节码（&机器码）")]),t._v(" "),a("p",[t._v("在生成了字节码以后，进入执行阶段，解析器会对字节码逐条解析执行。")]),t._v(" "),a("p",[t._v("如果在执行中，发现该段字节码被重复执行（也称为热点代码），这时候后台"),a("strong",[t._v("编译器 turbofan")]),t._v("登场，会将该热点代码编译成为高效的机器码。当再次执行到该段热点代码时，只需要直接执行编译后的机器码就可以了，这样就大大提升了代码的执行效率。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/chieminchan/chieminchan.github.io/master/images/articles/v8/JIT.png",alt:"JIT",title:"JIT"}})]),t._v(" "),a("blockquote",[a("p",[t._v("其实字节码配合解释器和编译器是最近一段时间很火的技术，比如 Java 和 Python 的虚拟机也都是基于这种技术实现的，我们把这种技术称为即时编译（JIT）。具体到 V8，就是指解释器 Ignition 在解释执行字节码的同时，收集代码信息，当它发现某一部分代码变热了之后，TurboFan 编译器便闪亮登场，把热点的字节码转换为机器码，并把转换后的机器码保存起来，以备下次使用。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);