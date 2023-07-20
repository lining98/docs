# this 关键字

## 执行期上下文

当**函数执行**时（准确来说，是在函数发生预编译的前一刻），会创建一个执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境。

每调用一次函数，就会创建一个新的上下文对象，他们之间是相互独立且独一无二的。当函数执行完毕，它所产生的执行期上下文会被销毁。

## this 指向

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是 this，this 指向的是一个对象，这个对象我们称为函数执行的 上下文对象。

### ES5 函数内 this 的指向【非常重要】

在 ES5 语法中，根据函数的调用方式的不同，this 会指向不同的对象：

- 1、以**函数**的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`

```javascript
function fun() {
  console.log(this) // Window
  console.log(this.name) // 全局的name属性
}

var obj1 = {
  name: 'smyh',
  sayName: fun
}

var obj2 = {
  name: 'vae',
  sayName: fun
}

var name = '全局的name属性'

//以函数形式调用，this是window
fun() //可以理解成 window.fun()
```

- 2、以**方法**的形式调用时，this 指向调用方法的那个对象

```javascript
function fun() {
  console.log(this) // Object
  console.log(this.name) // vae
}

var obj1 = {
  name: 'smyh',
  sayName: fun
}

var obj2 = {
  name: 'vae',
  sayName: fun
}

var name = '全局的name属性'

//以方法的形式调用，this是调用方法的对象
obj2.sayName()
```

- 3、以**构造函数**的形式调用时，this 指向实例对象

```js
function Person(name) {
  this.name = name
}

var person1 = new Person('zhangsan')
console.log(person1.name) // 输出 'zhangsan'
```

- 4、以**事件绑定函数**的形式调用时，this 指向**绑定事件的对象**

```html
<button id="myButton">Click Me</button>
```

```js
const button = document.getElementById('myButton')

button.addEventListener('click', function () {
  // 在这里，this指向绑定事件的按钮元素（也就是button对象）
  console.log(this) // 输出： <button id="myButton">Click Me</button>

  this.textContent = 'Clicked' // 修改按钮文本内容为"Clicked"
  this.style.backgroundColor = 'green' // 将按钮背景颜色设置为绿色
})
```

- 5、使用 **`call`** 和 **`apply`** 调用时，this 指向指定的那个对象

```js
function foo() {
  console.log(this)
}

var obj = { name: 'Object' }
foo.call(obj) // 输出 { name: 'Object' }
```

### ES6 箭头函数中 this 的指向

ES6 中的箭头函数并不使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。

```js
var obj = {
  foo: function () {
    var arrowFn = () => {
      console.log(this)
    }
    arrowFn()
  }
}

obj.foo() // 输出调用foo()的对象（此处是obj）
```

## 改变函数内部的 this 指向

JS 专门为我们提供了一些方法来改变函数内部的 this 指向。常见的方法有 call()、apply()、bind() 方法。

### call()

#### call() 方法的作用

call() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。

call() 方法的另一个应用：**可以实现继承**。之所以能实现继承，其实是利用了上面的作用。

语法：

```js
fn1.call(想要将this指向哪里, 函数实参1, 函数实参2)
```

备注：第一个参数中，如果不需要改变 this 指向，则传 null。

#### call() 方法举例

**举例 1**、通过 call() 调用函数：

```js
const obj1 = {
  nickName: 'zhangsan',
  age: 28
}
function fn1() {
  console.log(this) // window
  console.log(this.nickName) // undefined
}
fn1.call(this) // this的指向并没有被改变，此时相当于 fn1();
```

**举例 2**、通过 call() 改变 this 指向：

```js
var obj1 = {
  nickName: 'zhangsan',
  age: 28
}

function fn1(a, b) {
  console.log(this) // obj1
  console.log(this.nickName) // zhangsan
  console.log(a + b) // 6
}

fn1.call(obj1, 2, 4) // 先将 this 指向 obj1，然后执行 fn1() 函数
```

**举例 3**、通过 call() 实现继承：

```js
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
  this.name = myName
  this.age = myAge
}

function Son(myName, myAge) {
  // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
  Father.call(this, myName, myAge)
}

const son1 = new Son('张三', 28)
console.log(JSON.stringify(son1)) // {"myName":"张三","myAge":28}
```

上方代码中，通过 call() 方法，让 Son 继承了 Father 里面的 name 和 age 属性。

### apply() 方法

#### apply() 方法的作用

apply() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。这一点，和 call()类似。

apply() 方法的应用： 由于 apply()需要传递**数组**，所以它有一些巧妙应用，稍后看接下来的应用举例就知道了。

语法：

```js
fn1.apply(想要将this指向哪里, [函数实参1, 函数实参2])
```

备注：第一个参数中，如果不需要改变 this 指向，则传 null。

到这里可以看出， call() 和 apply() 方法的作用是相同的。唯一的区别在于，apply() 里面传入的**实参，必须是数组（或者伪数组）**。

#### apply() 方法举例

**举例**、通过 apply() 改变 this 指向：

```js
var obj1 = {
  nickName: 'zhangsan',
  age: 28
}

function fn1(a) {
  console.log(this) //obj1
  console.log(this.nickName) //zhangsan
  console.log(a) //hello
}

fn1.apply(obj1, ['hello']) // 先将 this 指向 obj1，然后执行 fn1() 函数
```

::: tip 注意:
apply() 里面传实参时，需要以数组的形式。即便是传一个实参，也需要传数组。
:::

#### apply() 方法的巧妙应用：求数组的最大值

我们知道，如果想要求数组中元素的最大值，数组本身是没有自带方法的。那怎么办呢？

虽然数组里没有获取最大值的方法，但是数值里有 `Math.max(数字1，数字2，数字3)` 方法，可以获取**多个数值中的最大值**。 另外，由于 apply() 方法在传递实参时，传的刚好是**数组**，所以我们可以 通过 Math.max() 和 apply() 曲线救国。

**举例**：求数组中多个元素的最大值：

```js
const arr1 = [3, 7, 10, 8]

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1) // 求数组 arr1 中元素的最大值
console.log(maxValue) // 10

const minValue = Math.min.apply(Math, arr1) // 求数组 arr1 中元素的最小值
console.log(minValue) //3
```

### bind() 方法

#### bind() 方法的作用

bind() 方法**不会调用函数**，但是可以改变函数内部的 this 指向。

把 call()、apply()、bind()这三个方法做一下对比，你会发现：实际开发中， bind() 方法使用得最为频繁。如果有些函数，我们不需要立即调用，但是又想改变这个函数内部的 this 指向，此时用 bind() 是最为合适的。

语法：

```js
新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2)
```

参数：

- 第一个参数：在 fn1 函数运行时，指定 fn1 函数的 this 指向。如果不需要改变 this 指向，则传 null。

- 其他参数：fn1 函数的实参。

解释：它不会调用 fn1 函数，但会返回 由指定 this 和指定实参的**原函数拷贝**。可以看出， bind() 方法是有返回值的。
