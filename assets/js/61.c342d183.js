(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{380:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-热替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-热替换"}},[t._v("#")]),t._v(" 👉 Webpack 热替换")]),t._v(" "),e("p",[t._v("热替换原理（HotModuleReplacementPlugin，HMR）")]),t._v(" "),e("p",[t._v("热替换是指在无需完全刷新整个页面的情况下更新模块，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态，比如复选框的选中状态、输入框的输入等。")]),t._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("p",[t._v("热替换的核心：")]),t._v(" "),e("ol",[e("li",[t._v("本地通过 express 搭建一个 dev-server 本地服务环境，启用 Websocket 和浏览器建立双向通信。当本地文件资源发生变化的时候，触发重新编译。")])]),t._v(" "),e("p",[t._v("本地服务会在完成编译后，通过 sendStats 向浏览器推送更新，带上构建时的 hash 值，浏览器会将这个 hash 值与上一次资源进行差异对比。")]),t._v(" "),e("p",[t._v("（编译后的文件会打包到内存。这就是为什么在开发的过程中，你会发现 dist 目录没有打包后的代码，因为都在内存中。原因就在于访问内存中的代码比访问文件系统中的文件更快，而且也减少了代码写入文件的开销，这一切都归功于 memory-fs。）")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("客户端在对比出差异后，会触发回调，这个回调会完成两件事情：")])]),t._v(" "),e("p",[t._v("（1）进入 HotCheck，调用 hotDownloadManifest 发送 /hash.hot-update.json 请求，通过 json 请求结果获取热更新文件，以及下次热更新的 Hash 标识，并进入热更新准备阶段；")]),t._v(" "),e("p",[t._v("（2） HotCheck 确认需要热更新之后，进入 hotAddUpdateChunk 方法。"),e("br"),t._v("\n该方法先检查 Hash 标识的模块是否已更新，如果没更新，则通过在 DOM 中添加 Script 标签的方式，以 jsonp 的方式动态请求 js： /fileChunk.hash.hot-update.js，获取最新打包的 js 内容；")]),t._v(" "),e("p",[e("strong",[t._v("Jsonp 方式请求的原因")]),t._v("："),e("br"),t._v("\n主要是因为 JSONP 获取的代码可以直接执行。")]),t._v(" "),e("p",[e("strong",[t._v("为什么要直执行原因")]),t._v("："),e("br"),t._v("\n新编译后的代码是在一个 webpackHotUpdate 函数体内部的，所以要立即执行 webpackHotUpdate 这个方法。")]),t._v(" "),e("p",[t._v("HotModuleReplacementPlugin 会在 /fileChunk.hash.hot-update.js 中立即执行 webpackHotUpdate，通过直接遍历 moreModules，执行 hotApply 方法进行更新。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("后续的部分，拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？"),e("br"),t._v("\n由 HotModuleReplacementPlugin 来完成。")])]),t._v(" "),e("h2",{attrs:{id:"具体步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("启动本地服务前，调用了 updateCompiler(this.compiler)方法。这个方法中有 2 段关键性代码。")]),t._v(" "),e("p",[t._v("一个是获取 websocket 客户端代码路径，另一个是根据配置获取 webpack 热更新代码路径。")])]),t._v(" "),e("li",[e("p",[t._v("修改 entry 配置，新增上面的 websocket 客户端代码路径（webpack-dev-server/client/index.js）和获取热更新代码路径（webpack/hot/dev-server.js）")]),t._v(" "),e("p",[t._v("其中的（webpack-dev-server/client/index.js）是用于建立本地与浏览器 websocket 通信")])]),t._v(" "),e("li",[e("p",[t._v("修改好入口配置后，调用了 setupHooks 方法。这个方法是用来注册监听事件的，监听每次 webpack 编译完成。")]),t._v(" "),e("p",[t._v("监听到 webpack 编译完成后，会调用 _sendStats 方法通过 websocket 给浏览器发送通知，ok 和 hash 事件，这样浏览器就可以拿到最新的 hash 值了，然后浏览器做检查更新逻辑。")])]),t._v(" "),e("li",[e("p",[t._v("每次修改代码就会触发编译。说明我们还需要监听本地代码的变化，主要是通过 setupDevMiddleware 方法实现的。")]),t._v(" "),e("p",[t._v("webpack-dev-server 只负责启动服务和前置准备工作，而所有文件相关的操作都抽离到 webpack-dev-middleware 库了，主要是本地文件的编译和输出以及监听。")]),t._v(" "),e("p",[t._v("webpack-dev-middleware 做的事情："),e("br"),t._v("\n（1）调用了 compiler.watch 方法监听本地文件的变化，主要是通过文件的生成时间是否有变化"),e("br"),t._v("\n（2）执行 setFs 方法，这个方法主要目的就是将编译后的文件打包到内存（而不用像发布生产环境那样子打包一个出 dist 文件夹），原因就在于访问内存中的代码比访问文件系统中的文件更快，而且也减少了代码写入文件的开销，这一切都归功于 memory-fs。")])]),t._v(" "),e("li",[e("p",[t._v("回到第四步，再完成编译以后会触发 _sendStats 方法通过 websocket 给浏览器发送通知，让浏览器判断是否需要热更新。")]),t._v(" "),e("p",[t._v("而此步骤相关联的就是第二步新增的入口文件路径：（webpack-dev-server/client/index.js）")]),t._v(" "),e("p",[t._v("这份代码里面会建立 websocket 和服务端的连接，并注册了 2 个监听事件。："),e("br"),t._v("\nhash 事件，更新最新一次打包后的 hash 值。"),e("br"),t._v("\nok 事件，进行热更新检查，热更新检查事件是调用 webpack 的 reloadApp 方法，利用 nodejs 的 EventEmitter 发出 webpackHotUpdate 消息。")]),t._v(" "),e("p",[t._v("在第二步入口另一新增文件路径（webpack/hot/dev-server.js），里面的代码会监听 webpackHotUpdate 事件，一旦触发就回调获取最新的 hash 值，并且进行检查更新（终于检查更新了....，这一步是在浏览器中操作，代码是在运行中的环境）。")]),t._v(" "),e("p",[t._v("检查更新呢，调用的是 module.hot.check 方法。那么问题又来了，module.hot.check 又是哪里冒出来了的！答案是 HotModuleReplacementPlugin 搞得鬼。")]),t._v(" "),e("p",[t._v("HotModuleReplacementPlugin 会类似第二步一样默默的塞很多代码到 bundle.js。")]),t._v(" "),e("p",[t._v("HotModuleReplacementPlugin 会给 moudle 新增了一个属性为 hot，值为 hotCreateModule（moudleId）的方法。")]),t._v(" "),e("p",[t._v("而 module.hot.check 就是来自于 hotCreateModule（moudleId）方法。")])]),t._v(" "),e("li",[e("p",[t._v("module.hot.check 开启热替换准备")]),t._v(" "),e("p",[t._v("（1）利用上一次保存的 hash 值，调用 hotDownloadManifest 发送 xxx/hash.hot-update.json 的 ajax 请求；")]),t._v(" "),e("p",[t._v("调用 hotDownloadUpdateChunk 发送 xxx/hash.hot-update.js 请求，通过 JSONP 方式。")]),t._v(" "),e("p",[t._v("为什么使用 JSONP 获取最新代码？主要是因为 JSONP 获取的代码可以直接执行。"),e("br"),t._v("\n为什么要直接执行？因为 /hash.hot-update.js 里面新编译后的代码格式是在一个 webpackHotUpdate 函数体内部的。也就是要立即执行 webpackHotUpdate 这个方法。")]),t._v(" "),e("p",[t._v("webpackHotUpdate 里面的代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpackHotUpdate"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunkId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moreModules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hotAddUpdateChunk")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunkId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moreModules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hotAddUpdateChunk")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hotAddUpdateChunk")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunkId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moreModules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新的模块moreModules赋值给全局全量hotUpdate")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" moduleId "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" moreModules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moreModules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            hotUpdate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("moduleId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moreModules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("moduleId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用hotApply进行模块的替换")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hotUpdateDownloaded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hotAddUpdateChunk方法会把更新的模块moreModules赋值给全局全量hotUpdate。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hotUpdateDownloaded方法会调用hotApply进行代码的替换。")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("（2）请求结果获取热更新模块，以及下次热更新的 Hash 标识，并进入热更新准备阶段。")]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[e("p",[t._v("hotApply 热更新模块替换")]),t._v(" "),e("p",[t._v("热更新的核心逻辑就在 hotApply 方法了："),e("br"),t._v("\n（1）删除过期的模块，就是需要替换的模块；"),e("br"),t._v("\n（2）将新的模块添加到 modules 中；"),e("br"),t._v("\n（3）通过 _webpack_require_ 执行相关模块的代码")])])]),t._v(" "),e("p",[t._v("此节主要参考文章："),e("br"),t._v(" "),e("a",{attrs:{href:"https://juejin.im/post/6844904008432222215#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻松理解 webpack 热更新原理"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/6844904094281236487",target:"_blank",rel:"noopener noreferrer"}},[t._v("「吐血整理」再来一打 Webpack 面试题"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("// TODO 待深入理解："),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/Jocs/jocs.github.io/issues/15",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Hot Module Replacement 的原理解析"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);