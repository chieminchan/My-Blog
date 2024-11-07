(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{384:function(t,a,n){"use strict";n.r(a);var s=n(25),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"npm-包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-包管理"}},[t._v("#")]),t._v(" 👉 npm 包管理")]),t._v(" "),a("h2",{attrs:{id:"npm-进化史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-进化史"}},[t._v("#")]),t._v(" npm 进化史")]),t._v(" "),a("h3",{attrs:{id:"npm2-的嵌套地狱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm2-的嵌套地狱"}},[t._v("#")]),t._v(" npm2 的嵌套地狱")]),t._v(" "),a("p",[t._v("最早期的 npm 版本(npm v2)，npm 在安装依赖的时候会将依赖放到 node_modules 文件中；同时，如果某个直接依赖 A ，A 又依赖于其他的依赖包 B,那么依赖 B 会作为间接依赖,安装到依赖 A 的文件夹 node_modules 中，然后可能多个包之间也会有出现同样的依赖递归的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://npm.github.io/how-npm-works-docs/gitbook/images/deps4.png",alt:"依赖嵌套地狱"}})]),t._v(" "),a("p",[t._v("如果项目一旦过大,那么必然会形成一棵巨大的依赖树，依赖包会出现重复，从而形成嵌套地狱。")]),t._v(" "),a("h3",{attrs:{id:"npm3-的扁平依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm3-的扁平依赖"}},[t._v("#")]),t._v(" npm3 的扁平依赖")]),t._v(" "),a("p",[t._v("为了解决 npm2 的嵌套地狱，"),a("strong",[t._v("npm3 进行了依赖扁平化优化")]),t._v("，将共同的间接依赖也变成直接依赖，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://npm.github.io/how-npm-works-docs/gitbook/images/npm3deps2.png",alt:"npm2和npm3"}})]),t._v(" "),a("p",[t._v("但是，npm 3.x 版本并未完全解决老版本的模块冗余问题。如果上面例子中的依赖 A 和依赖 C 分别依赖 B 的不同版本，npm v3 并不会将两个不同的 B 版本都提出。而是会"),a("strong",[t._v("通过 localeCompare 方法对依赖进行一次排序，最终字典序在前面的 npm 包的底层依赖会被优先提出来")]),t._v("，其他版本的 B 依然会嵌套在原来依赖 B 的包下。上面的例子来说，就是依赖版本 Bv2.0 依然嵌套在 C 下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://npm.github.io/how-npm-works-docs/gitbook/images/npm3deps4.png",alt:"npm3依赖"}})]),t._v(" "),a("h2",{attrs:{id:"npm-install-过程做了啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-过程做了啥"}},[t._v("#")]),t._v(" npm install 过程做了啥")]),t._v(" "),a("p",[t._v("在我们敲下 npm install 的时候 , npm 会做以下几件事情：")]),t._v(" "),a("ul",[a("li",[t._v("检查 config"),a("br"),t._v("\nnpm 执行会先读取 "),a("code",[t._v("npm config list")]),t._v(" 和 npmrc 配置，而 npmrc 是有优先级之分的，后面会展开讲讲。")]),t._v(" "),a("li",[t._v("检查是否存在 "),a("code",[t._v("package-lock.json")]),t._v(" "),a("ul",[a("li",[t._v("存在 "),a("code",[t._v("package-lock.json")]),t._v("，将会检查跟当前 package-lock 里声明的版本是否一致\n"),a("ul",[a("li",[t._v("版本一致，是否有检查缓存")]),t._v(" "),a("li",[t._v("版本不一致 , 对应处理方法跟 npm 版本有关。在最新版本的 npm 中，会检查依赖包兼容版本, 如果版本能兼容，则按照 package-lock 版本安装，反之按照 package.json 版本安装")])])]),t._v(" "),a("li",[t._v("不存在 "),a("code",[t._v("package-lock.json")]),t._v("，将会执行以下步骤：\n"),a("ul",[a("li",[t._v("获取依赖包的信息")]),t._v(" "),a("li",[t._v("构建依赖树")]),t._v(" "),a("li",[t._v("扁平化")]),t._v(" "),a("li",[t._v("检查缓存")])])])])]),t._v(" "),a("li",[t._v("检查缓存\n"),a("ul",[a("li",[t._v("如果有缓存，将对应缓存解压到 node_modules 下，生成 package-lock")]),t._v(" "),a("li",[t._v("如果没有缓存：\n"),a("ul",[a("li",[t._v("下载资源包，检查资源包完整性")]),t._v(" "),a("li",[t._v("添加到缓存中")]),t._v(" "),a("li",[t._v("解压到 node_modules，生成 package-lock")])])])])])]),t._v(" "),a("p",[t._v("由上面的步骤可以看出，缓存功能在 npm 整个过程中起到非常关键的作用 ，每次安装依赖时都会对对应包创建缓存，那我们如何查看缓存呢？")]),t._v(" "),a("h2",{attrs:{id:"npm-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-缓存"}},[t._v("#")]),t._v(" npm 缓存")]),t._v(" "),a("p",[t._v("我们可以通过"),a("code",[t._v("npm config get cache")]),t._v("这个命令获取 npm 缓存在本地的路径，进入该目录后，访问"),a("code",[t._v("_cacache")]),t._v("目录 , npm 的缓存就放在该目录下。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("~      % npm config get cache\n/Users/chieminchan/.npm\n~      % cd /Users/chieminchan/.npm\n~/.npm % ls\n_cacache   _locks   _logs  _npx  anonymous-cli-metrics.json  index-v5\n")])])]),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/12/HBNgS0.png",alt:"HBJWOe.png"}})]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("content-v2")]),t._v(" 是缓存二进制文件 , "),a("code",[t._v("index-v5")]),t._v(" 是缓存对应索引 hash.")]),t._v(" "),a("h3",{attrs:{id:"npm-是如何利用缓存的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-是如何利用缓存的"}},[t._v("#")]),t._v(" npm 是如何利用缓存的")]),t._v(" "),a("p",[t._v("npm 在执行安装时，可以根据 "),a("code",[t._v("package-lock.json")]),t._v(" 中存储的 "),a("code",[t._v("integrity")]),t._v("、"),a("code",[t._v("version")]),t._v("、"),a("code",[t._v("name")]),t._v(" 生成一个唯一的 key 对应到 index-v5 目录下的缓存记录，从而找到依赖包"),a("code",[t._v("tar")]),t._v("的 hash，然后根据 hash 再去找缓存直接使用。")]),t._v(" "),a("h4",{attrs:{id:"举个例子-🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个例子-🌰"}},[t._v("#")]),t._v(" 举个例子 🌰")]),t._v(" "),a("p",[t._v("我们在缓存索引目录 "),a("code",[t._v("index-v5")]),t._v("  下搜索一个"),a("code",[t._v("clean-webpack-plugin-3.0.0.tgz")]),t._v("包测试一下。")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("grep")]),t._v(" 命令找到依赖包在 "),a("code",[t._v("index-v5")]),t._v(" 的位置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(".npm/_cacache % "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.npm.taobao.org/clean-webpack-plugin/download/clean-webpack-plugin-3.0.0.tgz"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" ./index-v5/\n\n./index-v5//d0/84/e30448aecdc817bb6a8706d91392"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("省略"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/23/bpdxoT.png",alt:"bpdxoT.png"}})])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("./index-v5//d0/84/")]),t._v("找到依赖包索引文件，格式化 json 得：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pacote:tag-manifest:https://registry.npm.taobao.org/clean-webpack-plugin/download/clean-webpack-plugin-3.0.0.tgz:sha1-qZ2Ow0wcYopFQVZ6p7RXRGRgxis="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"integrity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sha512-C2EkHXwXvLsbrucJTRS3xFHv7Mf/y9klmKDxPTE8yevCoH5h8Ae69Y+/lP+ahpW91crnzgO78elOk2E6APJfIQ=="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1598713645175")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadata"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean-webpack-plugin@3.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean-webpack-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"engines"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=8.9.0"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bundleDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peerDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deprecated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_resolved"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.npm.taobao.org/clean-webpack-plugin/download/clean-webpack-plugin-3.0.0.tgz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_integrity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sha1-qZ2Ow0wcYopFQVZ6p7RXRGRgxis="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_shasum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a99d8ec34c1c628a4541567aa7b457446460c62b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_shrinkwrap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean-webpack-plugin@3.0.0"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"finalized-manifest"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("code",[t._v("_shasum")]),t._v(" 属性 "),a("code",[t._v("a99d8ec34c1c628a4541567aa7b457446460c62b")]),t._v(" 即为 "),a("code",[t._v("tar")]),t._v(" 依赖包的  "),a("code",[t._v("hash")]),t._v("，"),a("code",[t._v("hash")]),t._v("的前几位 "),a("code",[t._v("a99d8")]),t._v("  即为缓存的前两层目录。")])]),t._v(" "),a("li",[a("p",[t._v("根据 "),a("code",[t._v("index-v5")]),t._v(" 索引文件中得到的目录路径，就可以在"),a("code",[t._v("content-v2")]),t._v("中找到对应的压缩后的依赖包： "),a("img",{attrs:{src:"https://s4.ax1x.com/2022/02/23/bp01CF.png",alt:"bp01CF.png"}})])])]),t._v(" "),a("blockquote",[a("p",[t._v("以上的缓存策略是从 npm v5 版本开始的，在 npm v5 版本之前，每个缓存的模块在 ~/.npm 文件夹中以模块名的形式直接存储，储存结构是{cache}/{name}/{version}。")])]),t._v(" "),a("h3",{attrs:{id:"如何生成缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何生成缓存"}},[t._v("#")]),t._v(" 如何生成缓存")]),t._v(" "),a("p",[t._v("npm 本身只提供清除缓存和验证缓存完整性的方法，不提供直接操作缓存的方法，可以通过 "),a("code",[t._v("npm cache")]),t._v(" 来操作这些缓存数据。")]),t._v(" "),a("p",[t._v("npm 是如何对依赖包进行本地化缓存的，即"),a("code",[t._v("_content_v2")]),t._v("和"),a("code",[t._v("index-v5")]),t._v("的缓存资源又是如何生成的？")]),t._v(" "),a("p",[t._v("上官方文档链接：https://docs.npmjs.com/cli/v8/commands/npm-cache#details")]),t._v(" "),a("p",[t._v("大概意思如下：npm 会将所有的缓存数据存储在已配置的 cache 路径下，命名为"),a("code",[t._v("_cacache")]),t._v(" 的目录中。"),a("strong",[a("code",[t._v("_cache")]),t._v("存这个目录主要是通过 "),a("code",[t._v("pacote")]),t._v("去获取到缓存资源，它存储所有的 http 请求数据以及其他包相关的数据。缓存的资源在插入和提取时都会经过完整验证，如果有损坏将会触发错误或者触发"),a("code",[t._v("pacote")]),t._v("，自动进行重新获取数据的信号")]),t._v("。因此，除非是需要回收磁盘空间，缓存文件没必要进行清除，npm 也不会自行删除数据，当我们"),a("code",[t._v("npm clean cache")]),t._v("时需要"),a("code",[t._v("--force")]),t._v("运行。")]),t._v(" "),a("p",[t._v("也由此可知，npm 主要是用 "),a("strong",[a("a",{attrs:{href:"https://www.npmjs.com/package/pacote",target:"_blank",rel:"noopener noreferrer"}},[t._v("pacote"),a("OutboundLink")],1)]),t._v(" 来处理依赖包的。那什么是 pacote ？pacote 是 npm 用来下载依赖包元数据的模块，大概的思路是结合网络请求和文件读写配置进行依赖包资源的写入和生成对应的压缩文件。")]),t._v(" "),a("p",[t._v("npm 主要有以下三个地方会用到 pacote：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当 "),a("code",[t._v("npm install xx")]),t._v(" 执行的时候，如果存在缓存时，将会通过 "),a("strong",[t._v("pacote.extract")]),t._v(" 把缓存包解压到对应的 "),a("strong",[t._v("node_modules")]),t._v(" 下面")])]),t._v(" "),a("li",[a("p",[t._v("当 "),a("code",[t._v("npm install xx")]),t._v(" 执行时，不存在缓存，将会先进行资源下载和完整性校验，接着运行"),a("code",[t._v("npm cache add xx")]),t._v("，通过"),a("code",[t._v("pacote.tarball.stream")]),t._v(" 往 "),a("code",[t._v(".npm/_cacache")]),t._v(" 里增加缓存数据")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("npm pack xxx")]),t._v(" 会通过 "),a("code",[t._v("pacote.tarball.toFile")]),t._v(" 在当前路径生成对应的压缩文件")])])]),t._v(" "),a("p",[t._v("而 pacote 又是依赖 "),a("code",[t._v("npm-registry-fetch")]),t._v(" 来下载包，在给指定路径下根据 "),a("strong",[a("a",{attrs:{href:"https://beyondstars.xyz/posts/rfc7234-read-and-think/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IETF RFC 7234"),a("OutboundLink")],1)]),t._v(" 生成缓存数据。")]),t._v(" "),a("h3",{attrs:{id:"npmrc-是啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npmrc-是啥"}},[t._v("#")]),t._v(" npmrc 是啥")]),t._v(" "),a("p",[t._v(".npmrc，可以理解成"),a("code",[t._v("npm running cnfiguration")]),t._v(", 即 npm 运行时配置文件。我们知道，npm 最大的作用就是帮助开发者安装需要的依赖包，但是要从哪里下载？下载哪一个版本的包，把包下载到电脑的哪个路径下？这些都可以在.npmrc 中进行配置。")]),t._v(" "),a("h4",{attrs:{id:"npmrc-是有权重的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npmrc-是有权重的"}},[t._v("#")]),t._v(" npmrc 是有权重的")]),t._v(" "),a("p",[t._v("npm 按照如下顺序读取这些配置文件：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("项目级的.npmrc 文件"),a("br"),t._v("\n可以在项目的根目录下创建一个.npmrc 文件，只用于管理这个项目的 npm 安装")])]),t._v(" "),a("li",[a("p",[t._v("用户级的 .npmrc 文件"),a("br"),t._v("\n在你使用一个账号登陆的电脑的时候，可以为当前用户创建一个.npmrc 文件，之后用该用户登录电脑，就可以使用该配置文件。可以通过 "),a("code",[t._v("npm config get userconfig")]),t._v(" 来获取该文件的位置")])]),t._v(" "),a("li",[a("p",[t._v("全局级的 .npmrc"),a("br"),t._v("\n一台电脑可能有多个用户，在这些用户之上，你可以设置一个公共的"),a("code",[t._v(".npmrc")]),t._v("文件，供所有用户使用。该文件的路径为："),a("code",[t._v("$PREFIX/etc/npmrc")]),t._v("，使用 "),a("code",[t._v("npm config get prefix")]),t._v(" 获取 "),a("code",[t._v("\\$PREFIX")]),t._v("。如果你不曾配置过全局文件，该文件不存在。")])]),t._v(" "),a("li",[a("p",[t._v("npm 内置的 .npmrc"),a("br"),t._v("\n基本上用不到，不用过度关注。")])])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.conardli.top/blog/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96-%E5%89%96%E6%9E%90npm%E7%9A%84%E5%8C%85%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6%EF%BC%88%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%89.html#%E4%B8%89%E3%80%81%E5%89%96%E6%9E%90-npm-install-%E5%8E%9F%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("剖析 npm install 原理 "),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/7060844948316225572",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节的一个小问题 npm 和 yarn 不一样吗？"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903785018425351",target:"_blank",rel:"noopener noreferrer"}},[t._v("记一次排错经历 —— npm 缓存浅析"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/articles/Project Management/ruanyifeng.com/blog/2019/02/npx.html"}},[t._v("npx 是啥")])],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);