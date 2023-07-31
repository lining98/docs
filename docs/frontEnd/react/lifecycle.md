# React 组件 — 生命周期

React 生命周期是指组件在不同阶段经历的一系列方法调用，这些方法允许我们在特定时间点执行代码，控制组件的行为，并进行必要的操作。理解 React 生命周期对于优化性能、处理副作用以及在开发过程中更好地掌握组件的行为至关重要。

## 生命周期阶段

React 生命周期可以分为三个阶段：组件创建、组件更新和组件销毁。

1. 组件创建阶段：

   - constructor：组件被创建时调用，用于初始化状态和绑定方法。
   - static getDerivedStateFromProps：在组件创建和更新阶段调用，用于根据 props 更新状态。
   - render：渲染组件的内容。
   - componentDidMount：组件挂载到 DOM 后调用，用于进行副作用操作，如网络请求、DOM 操作等。

2. 组件更新阶段：

   - static getDerivedStateFromProps：在组件创建和更新阶段调用，用于根据 props 更新状态。
   - shouldComponentUpdate：在组件更新之前调用，返回 true 或 false，用于控制组件是否需要重新渲染。
   - render：渲染组件的内容。
   - getSnapshotBeforeUpdate：在 render 之后、更新之前调用，用于获取更新前的 DOM 快照。
   - componentDidUpdate：在组件更新之后调用，用于进行副作用操作，如网络请求、DOM 操作等。

3. 组件销毁阶段：
   - componentWillUnmount：在组件即将销毁时调用，用于清理副作用操作，如取消订阅、清除定时器等。

## 组件创建阶段

### constructor

constructor 是组件创建阶段的第一个方法，它在组件实例被创建时调用。在 constructor 中，我们可以初始化组件的状态（state）和绑定方法。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    // 绑定方法
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
```

### static getDerivedStateFromProps

static getDerivedStateFromProps 是组件创建和更新阶段的一个静态方法，在组件每次渲染之前都会被调用。它接收 props 和 state 作为参数，并返回一个对象来更新 state，或者返回 null 表示不需要更新 state。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 根据props更新state
    if (nextProps.initialCount !== prevState.count) {
      return {
        count: nextProps.initialCount
      }
    }
    return null
  }

  render() {
    return <p>Count: {this.state.count}</p>
  }
}

// 使用组件并传递props
ReactDOM.render(<MyComponent initialCount={10} />, document.getElementById('root'))
```

### render

render 是组件创建阶段的第三个方法，它用于渲染组件的内容。在 render 方法中，我们应该返回一个 React 元素，用于描述组件的 UI 结构。

```jsx
class MyComponent extends React.Component {
  render() {
    return <p>Hello, React!</p>
  }
}
```

### componentDidMount

componentDidMount 是组件创建阶段的最后一个方法，它在组件挂载到 DOM 后调用。在 componentDidMount 中，我们可以进行一些副作用操作，比如发送网络请求、订阅事件、操作 DOM 等。

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // 发送网络请求
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        // 处理数据
        console.log(data)
      })
  }

  render() {
    return <p>Hello, React!</p>
  }
}
```

## 组件更新阶段

### static getDerivedStateFromProps

在组件更新阶段，static getDerivedStateFromProps 的作用和在组件创建阶段是一样的，用于根据 props 更新 state。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 根据props更新state
    if (nextProps.initialCount !== prevState.count) {
      return {
        count: nextProps.initialCount
      }
    }
    return null
  }

  render() {
    return <p>Count: {this.state.count}</p>
  }
}
```

### shouldComponentUpdate

shouldComponentUpdate 是组件更新阶段的第二个方法，它在组件更新之前调用。在 shouldComponentUpdate 中，我们可以根据新的 props 或 state 判断是否需要重新渲染组件。返回 true 表示需要重新渲染，返回 false 表示不需要重新渲染，默认返回 true。

```jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 根据新的props或state判断是否需要重新渲染
    if (
      nextProps.someProp !== this.props.someProp ||
      nextState.someState !== this.state.someState
    ) {
      return true
    }
    return false
  }

  render() {
    return <p>Hello, React!</p>
  }
}
```

### getSnapshotBeforeUpdate

getSnapshotBeforeUpdate 是组件更新阶段的第四个方法，它在 render 之后、更新之前调用。它接收 prevProps 和 prevState 作为参数，并返回一个值，该值将作为第三个参数传递给 componentDidUpdate 方法。

```jsx
class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 获取更新前的DOM快照
    const snapshot = someDOMElement.scrollTop
    return snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 使用getSnapshotBeforeUpdate返回的快照进行处理
    if (snapshot !== null) {
      // 进行一些操作
    }
  }

  render() {
    return <p>Hello, React!</p>
  }
}
```

### componentDidUpdate

componentDidUpdate 是组件更新阶段的最后一个方法，它在组件更新之后调用。在 componentDidUpdate 中，我们可以进行一些副作用操作，比如发送网络请求、订阅事件、操作 DOM 等。

```jsx
class MyComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // 做一些副作用操作
    if (prevProps.someProp !== this.props.someProp) {
      // 发送网络请求
      fetch('https://api.example.com/data')
        .then((response) => response.json())
        .then((data) => {
          // 处理数据
          console.log(data)
        })
    }
  }

  render() {
    return <p>Hello, React!</p>
  }
}
```

## 组件销毁阶段

### componentWillUnmount

componentWillUnmount 是组件销毁阶段的唯一一个方法，在组件即将被销毁时调用。在 componentWillUnmount 中，我们应该进行一些清理操作，比如取消订阅、清除定时器、释放资源等。

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // 订阅事件
    eventEmitter.on('someEvent', this.handleEvent)
  }

  componentWillUnmount() {
    // 组件即将被销毁时取消订阅
    eventEmitter.off('someEvent', this.handleEvent)
  }

  handleEvent() {
    // 处理事件
  }

  render() {
    return <p>Hello, React!</p>
  }
}
```

## 总结

React 生命周期是组件在不同阶段经历的一系列方法调用，通过这些方法，我们可以在特定时间点执行代码，控制组件的行为，并进行必要的操作。在组件创建阶段，我们可以在 constructor 中初始化状态和绑定方法，在 componentDidMount 中进行副作用操作。在组件更新阶段，我们可以在 shouldComponentUpdate 中判断是否需要重新渲染，在 componentDidUpdate 中进行副作用操作。在组件销毁阶段，我们可以在 componentWillUnmount 中进行清理操作。
