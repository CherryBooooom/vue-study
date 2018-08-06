webpackJsonp([0],{"0Dqc":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("export")]),t._v(" "),s("p",{staticClass:"text"},[t._v("export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系")]),t._v(" "),s("p",{staticClass:"text"},[t._v("export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  // 变量\n  // 写法一\n  export var m = 1;\n\n  // 写法二\n  var m = 1;\n  export {m};\n\n  // 写法三\n  var n = 1;\n  export {n as m};\n\n  // 方法\n  // 1\n  export function f() {};\n\n  // 2\n  function f() {}\n  export {f};\n\n  function v1() { ... }\n  function v2() { ... }\n\n  export {\n      v1 as streamV1,\n      v2 as streamV2,\n      v2 as streamLatestVersion\n  };\n\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("import")]),t._v(" "),s("p",{staticClass:"text"},[t._v("建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  import { area, circumference } from './circle';\n\n  console.log('圆面积：' + area(4));\n  console.log('圆周长：' + circumference(14));\n\n  // 也可以用 *\n  import * as circle from './circle';\n\n  console.log('圆面积：' + circle.area(4));\n  console.log('圆周长：' + circle.circumference(14));\n              ")]),t._v("\n          ")])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("export 和 import 的复合写法")]),t._v(" "),s("p",{staticClass:"text"},[t._v("本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  export { foo, bar } from 'my_module';\n\n  // 可以简单理解为\n  import { foo, bar } from 'my_module';\n  export { foo, bar };\n\n  export { es6 as default } from './someModule';\n\n  // 等同于\n  import { es6 } from './someModule';\n  export default es6;\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("export default")]),t._v(" "),s("p",{staticClass:"text"}),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n\n              ")]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("p",{staticClass:"title"},[this._v("export default")]),this._v(" "),e("p",{staticClass:"text"},[this._v("本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字")])])}]};var a=s("vSla")({name:"module"},n,!1,function(t){s("vGus")},null,null);e.default=a.exports},"3SIk":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"text"},[t._v("yield命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器对象：")]),t._v(" "),s("p",{staticClass:"text"},[t._v("返回一个遍历器对象")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v('\n  function* gen(){\n  yield* ["a", "b", "c"];\n  }\n\n  gen().next() // { value:"a", done:false }\n              ')]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Generator：生成器")]),this._v("执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("yield：产出")]),this._v("yield表达式如果用在另一个表达式之中，必须放在圆括号里面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("yield*")]),this._v("用来在一个 Generator 函数里面执行另一个 Generator 函数")])}]};var a=s("vSla")({name:"generator"},n,!1,function(t){s("liRA")},null,null);e.default=a.exports},"43Qn":function(t,e,s){t.exports=s.p+"static/img/function.cda0a3b.jpg"},"4OjU":function(t,e,s){t.exports=s.p+"static/img/number.44b5453.jpg"},"6eO0":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("lC5x"),a=s.n(n),i=s("J0Oq"),r=s.n(i),c=s("rVsN"),l=s.n(c),v={name:"async",data:function(){return{time:0}},methods:{timeout:function(t){return new l.a(function(e){setTimeout(e,t)})},asyncPrint:function(t,e){var s=this;return r()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s.time="开始-",n.next=3,s.timeout(e);case 3:return s.time+="等待中-",n.next=6,s.timeout(e);case 6:return s.time+="等待1000ms-",n.next=9,s.timeout(e);case 9:s.time+=t;case 10:case"end":return n.stop()}},n,s)}))()}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("p",{staticClass:"text"},[t._v("async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Generator 函数的执行必须靠执行器，而async函数自带执行器。")]),t._v(" "),s("p",{staticClass:"text"},[t._v("返回值是 Promise")]),t._v(" "),s("p",{staticClass:"text"},[t._v("指定多少毫秒后输出一个值：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v('\n  timeout(ms){\n      return new Promise((resolve)=>{\n          setTimeout(resolve,ms);\n      })\n  }\n\n  asyncPrint:async function (value,ms){\n      this.time = "开始-"\n      await this.timeout(ms)\n      this.time += "等待中-"\n      await this.timeout(ms)\n      this.time += "等待1000ms-"\n      await this.timeout(ms)\n      this.time += value\n  }\n\n  @click="asyncPrint(\'finish\',500)"\n              ')]),t._v("\n          ")]),t._v(" "),s("button",{on:{click:function(e){t.asyncPrint("finish",500)}}},[t._v("开始")]),t._v(" "),s("p",{staticClass:"log"},[t._v(t._s(t.time))])]),t._v(" "),s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("async 函数的多种使用形式：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  // 函数声明\n  async function foo() {}\n\n  // 函数表达式\n  const foo = async function () {};\n\n  // 对象的方法\n  let obj = { async foo() {} };\n  obj.foo().then(...)\n\n  // Class 的方法\n  class Storage {\n  constructor() {\n      this.cachePromise = caches.open('avatars');\n  }\n\n  async getAvatar(name) {\n      const cache = await this.cachePromise;\n      return cache.match(`/avatars/${name}.jpg`);\n  }\n  }\n\n  const storage = new Storage();\n  storage.getAvatar('jake').then(…);\n\n  // 箭头函数\n  const foo = async () => {};\n\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[t._v("错误处理，执行多任务")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  async function main() {\n      // 错误处理\n      try {\n          // 继发，一个接一个\n          const val1 = await ajax1();\n          const val2 = await ajax2(val1);\n          const val3 = await ajax3(val1, val2);\n\n          // 并发执行\n          let a = ajax1()\n          let b = ajax2()\n          let c = ajax3()\n          let val1 = await ajax1();\n          let val2 = await ajax2();\n          let val3 = await ajax3();\n\n          console.log('Final: ', val3);\n      }\n      catch (err) {\n          console.error(err);\n      }\n  }\n\n  // 并发请求，按次序输出\n  async function logInOrder(urls) {\n      // 并发读取远程URL\n      const textPromises = urls.map(async url => {\n          const response = await fetch(url);\n          return response.text();\n      });\n\n      // 按次序输出\n      for (const textPromise of textPromises) {\n          console.log(await textPromise);\n      }\n  }\n              ")]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("async")]),this._v("async 函数是什么？一句话，它就是 Generator 函数的语法糖。")])}]};var _=s("vSla")(v,o,!1,function(t){s("JVbG")},null,null);e.default=_.exports},"9X2T":function(t,e,s){t.exports=s.p+"static/img/set.d24b1c6.jpg"},"Bo/m":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("p",{staticClass:"text"},[t._v("一是为各种数据结构，提供一个统一的、简便的访问接口；")]),t._v(" "),s("p",{staticClass:"text"},[t._v("二是使得数据结构的成员能够按某种次序排列；")]),t._v(" "),s("p",{staticClass:"text"},[t._v("三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费")]),t._v(" "),s("br"),t._v(" "),t._m(1),t._v(" "),s("p",{staticClass:"text"},[t._v("Array")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Map")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Set")]),t._v(" "),s("p",{staticClass:"text"},[t._v("String")]),t._v(" "),s("p",{staticClass:"text"},[t._v("TypedArray")]),t._v(" "),s("p",{staticClass:"text"},[t._v("函数的 arguments 对象")]),t._v(" "),s("p",{staticClass:"text"},[t._v("NodeList 对象")]),t._v(" "),s("br"),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"text"},[t._v("解构赋值")]),t._v(" "),s("p",{staticClass:"text"},[t._v("for...of")]),t._v(" "),s("p",{staticClass:"text"},[t._v("扩展运算符 ...")]),t._v(" "),s("p",{staticClass:"text"},[t._v("yield*")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Array.from()")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Map(),Set(),WeakMap(),WeakSet()")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Promise.all()")]),t._v(" "),s("p",{staticClass:"text"},[t._v("Promise.race()")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n              \n              ")]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Iterator：遍历器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("原生具备 Iterator 接口的数据结构如下")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("调用 Iterator 接口的场合")])])}]};var a=s("vSla")({name:"iterator"},n,!1,function(t){s("UaKj")},null,null);e.default=a.exports},Dkjo:function(t,e){},FrTS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("p",{staticClass:"text"},[t._v("一旦状态改变，就不会再变，Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）")]),t._v(" "),s("p",{staticClass:"text"},[t._v("一下用 Promise 对象实现 Ajax 操作")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v('\n  const getJSON = function(url) {\n      const promise = new Promise(function(resolve, reject){\n          const handler = function() {\n              if (this.readyState !== 4) {\n                  return;\n              }\n              if (this.status === 200) {\n                  resolve(this.response);\n              } else {\n                  reject(new Error(this.statusText));\n              }\n          };\n          const client = new XMLHttpRequest();\n          client.open("GET", url);\n          client.onreadystatechange = handler;\n          client.responseType = "json";\n          client.setRequestHeader("Accept", "application/json");\n          client.send();\n\n      });\n\n      return promise;\n  };\n\n  getJSON("/posts.json").then(function(json) {\n      console.log(\'Contents: \' + json);\n  }, function(error) {\n      console.error(\'出错了\', error);\n  });\n              ')]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",{staticClass:"text"}),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  promise\n      .then(function(data) { //cb\n          // success\n      })\n      .catch(function(err) {\n          // error\n      });\n\n  promise\n      .then(result => {···})\n      .catch(error => {···})\n      .finally(() => {···});\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[t._m(4),t._v(" "),s("p",{staticClass:"text"},[t._v("（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。")]),t._v(" "),s("p",{staticClass:"text"},[t._v("（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。")]),t._v(" "),t._m(5),t._v(" "),s("p",{staticClass:"text"},[t._v("只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n              \n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[t._m(8),t._v(" "),s("p",{staticClass:"text"}),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n              \n              ")]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise：承诺")]),this._v("有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.prototype.then()")]),this._v("为 Promise 实例添加状态改变时的回调函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.prototype.catch()")]),this._v("发生错误时的回调函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.prototype.finally()")]),this._v("用于指定不管 Promise 对象最后状态如何，都会执行的操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.all([p1, p2, p3])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.race([p1, p2, p3])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.resolve()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Promise.reject()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span")])}]};var a=s("vSla")({name:"promise"},n,!1,function(t){s("Prz0")},null,null);e.default=a.exports},JVbG:function(t,e){},KGsH:function(t,e,s){t.exports=s.p+"static/img/const.295a191.jpg"},MiAC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"second_router"},[s("router-link",{attrs:{to:"/home/es6/overview"}},[t._v("总览")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/code"}},[t._v("代码")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/promise"}},[t._v("Promise")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/iterator"}},[t._v("Iterator")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/generator"}},[t._v("Generator")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/async"}},[t._v("Async/Await")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/class"}},[t._v("Class")]),t._v(" "),s("router-link",{attrs:{to:"/home/es6/module"}},[t._v("Module")])],1),t._v(" "),s("div",[s("router-view")],1)])},staticRenderFns:[]};var a=s("vSla")({name:"ES6_content"},n,!1,function(t){s("xhCO")},null,null);e.default=a.exports},Od8E:function(t,e,s){t.exports=s.p+"static/img/map.249ed8d.jpg"},Prz0:function(t,e){},R8g7:function(t,e,s){t.exports=s.p+"static/img/let.ae3da32.jpg"},UaKj:function(t,e){},bfGO:function(t,e){},dJ7G:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("div",{staticClass:"box"},[e("p",{staticClass:"title"}),this._v(" "),e("p",{staticClass:"text"}),this._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[this._v("              "),e("code",[this._v("\n\n              ")]),this._v("\n          ")])])])])},staticRenderFns:[]};var a=s("vSla")({name:"es6class"},n,!1,function(t){s("fgD1")},null,null);e.default=a.exports},fgD1:function(t,e){},k4ce:function(t,e,s){t.exports=s.p+"static/img/Array.623efff.jpg"},liRA:function(t,e){},n405:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._m(0),t._v(" "),s("div",{staticClass:"box"},[t._m(1),t._v(" "),s("p",{staticClass:"text"},[t._v("暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  var a = [];\n  for (let i = 0; i < 10; i++) {\n  a[i] = function () {\n      console.log(i);\n  };\n  }\n  a[6](); // 6\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[t._m(2),t._v(" "),s("p",{staticClass:"text"},[t._v("默认值，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  let [foo = true] = [];\n  foo // true\n\n  let [x, y = 'b'] = ['a']; // x='a', y='b'\n  let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'\n  let [x = 1] = [null]; // x = null\n              ")]),t._v("\n          ")]),t._v(" "),s("p",{staticClass:"text"},[t._v("对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v('\n  let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };\n\n  let { foo: baz } = { foo: "aaa", bar: "bbb" };\n  baz // "aaa"\n  foo // error: foo is not defined\n              ')]),t._v("\n          ")])]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"box"},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n  for (let index of ['a', 'b'].keys()) {\n  console.log(index);\n  }\n  // 0\n  // 1\n\n  for (let elem of ['a', 'b'].values()) {\n  console.log(elem);\n  }\n  // 'a'\n  // 'b'\n\n  for (let [index, elem] of ['a', 'b'].entries()) {\n  console.log(index, elem);\n  }\n  // 0 \"a\"\n  // 1 \"b\"\n              ")]),t._v("\n          ")])]),t._v(" "),s("div",{staticClass:"box"},[t._m(12),t._v(" "),s("p",{staticClass:"text"}),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("              "),s("code",[t._v("\n              \n              ")]),t._v("\n          ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("p",{staticClass:"title"},[e("span",[this._v("Const")]),this._v("块级作用域，不存在变量提升，暂时性死区，不能重复声明，值不可变")]),this._v(" "),e("p",{staticClass:"text"},[this._v("实际上const保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动，例如可以给const定义的对象添加属性，")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("Let")]),this._v("块级作用域，不存在变量提升，暂时性死区，不能重复声明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("解构赋值")]),this._v("模式匹配，“:”前面是模式，“:”后面是变量")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[s("span",[t._v("字符串扩展")])]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("includes()")])]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("startsWith()")])]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("endsWith()")])]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("repeat()")])]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("模板字符串")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span",[this._v("数组的扩展")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("扩展运算符 ...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("Array.from()")]),this._v("将类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）装变成真正的数组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("Array.from()第二个参数")]),this._v("类似数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("Array.of()")]),this._v("方法用于将一组值，转换为数组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("fill()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("includes()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text"},[e("span",[this._v("entries(),keys(),values()")]),this._v("用于遍历数组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title"},[e("span")])}]};var a=s("vSla")({name:"code"},n,!1,function(t){s("Dkjo")},null,null);e.default=a.exports},nUjK:function(t,e,s){t.exports=s.p+"static/img/jiegou.359b041.jpg"},tQQA:function(t,e,s){t.exports=s.p+"static/img/object.e2bb547.jpg"},vGus:function(t,e){},voDf:function(t,e,s){t.exports=s.p+"static/img/promise.64dd1fd.jpg"},xaNY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("p",[t._v("Const声明常量")]),t._v(" "),n("img",{attrs:{src:s("KGsH"),alt:""}}),t._v(" "),n("p",[t._v("Let声明变量")]),t._v(" "),n("img",{attrs:{src:s("R8g7"),alt:""}}),t._v(" "),n("p",[t._v("解构赋值")]),t._v(" "),n("img",{attrs:{src:s("nUjK"),alt:""}}),t._v(" "),n("p",[t._v("数组的扩展")]),t._v(" "),n("img",{attrs:{src:s("k4ce"),alt:""}}),t._v(" "),n("p",[t._v("函数的扩展")]),t._v(" "),n("img",{attrs:{src:s("43Qn"),alt:""}}),t._v(" "),n("p",[t._v("数值的扩展")]),t._v(" "),n("img",{attrs:{src:s("4OjU"),alt:""}}),t._v(" "),n("p",[t._v("对象的扩展")]),t._v(" "),n("img",{attrs:{src:s("tQQA"),alt:""}}),t._v(" "),n("p",[t._v("Set")]),t._v(" "),n("img",{attrs:{src:s("9X2T"),alt:""}}),t._v(" "),n("p",[t._v("Map")]),t._v(" "),n("img",{attrs:{src:s("Od8E"),alt:""}}),t._v(" "),n("p",[t._v("Promise")]),t._v(" "),n("img",{attrs:{src:s("voDf"),alt:""}})])])}]};var a=s("vSla")({name:"content"},n,!1,function(t){s("bfGO")},null,null);e.default=a.exports},xhCO:function(t,e){}});
//# sourceMappingURL=0.289341983f4528cb39e4.js.map