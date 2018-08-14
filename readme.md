
### react-modal-container
react-modal-container is modal dialogs container.

<a href="https://www.npmjs.com/package/react-modal-container"><img src="https://img.shields.io/npm/v/react-modal-container.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/react-modal-container"><img src="https://img.shields.io/npm/dm/react-modal-container.svg?style=flat-square"></a>



### Install

```bash
npm install --save react-modal-container
```

### Usage

第一步：定义一个 Modal 类。

```js
import React, { Component } from 'react';
import Modal from 'react-modal-container';
import styled from 'styled-components';

// 弹窗
export default Modal(class Popup extends Component {
    render() {
        const { modal, name } = this.props;
        // modal 是自动注入的 props

        return (
            <Layer>
                <Panel>
                    <h2>{name}</h2>
                    <Button onClick={modal.close}>关闭</Button>
                </Panel>
            </Layer>
        );
    }
});

// 透明层，你需要自己把它设定为 fixed
const Layer = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(1, 1, 1, 0.55);
    z-index: 1001;
    top: 0; right: 0;
    left: 0; bottom: 0;
`;

// 弹窗面板
const Panel = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 1px 2px 15px rgba(1, 1, 1, 0.36);
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
`;

const Button = styled.button`
    border-radius: 2px;
    border: none;
    background-color: #39f;
    color: #fff;
    font-size: 15px;
    padding: 0.4em 1.2em;
`;
```

第二步：在使用的地方实例化。


```js
import React, { Component } from 'react';
import Popup from './popup';
import styled from 'styled-components';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        // 实例化一个 modal，还可以传递 props
        this.popup = new Popup({ name: 'abc' });
    }

    render() {
        return (
            <Panel>
                <button onClick={this.popup.open}>打开一个 Modal</button>
            </Panel>
        );
    }
}

const Panel = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
```

### API

构造函数，返回一个 Modal 类。
ModalContainer(component, id);

实例化之后，可以用函数。
- open(props?) - 打开弹层，可以传递 props。
- close(hide?) - 关闭弹层。
- update(props) - 更新弹层的 props。

> 注意，close 之后会从 document.body 里删除，而不是设置为 display: none。

### Example
你可以查看 [示例代码](./example)。
