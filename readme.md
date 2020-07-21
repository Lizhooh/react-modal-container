
### react-modal-container
react-modal-container is modal dialogs container.

<a href="https://www.npmjs.com/package/react-modal-container"><img src="https://img.shields.io/npm/v/react-modal-container.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/react-modal-container"><img src="https://img.shields.io/npm/dm/react-modal-container.svg?style=flat-square"></a>

> v2.0.0+ 使用 typescript 重写，完美支持 typescript。

### Install

```bash
npm install --save react-modal-container
```

### Usage

第一步：定义一个 Modal 类。

```ts
import React, { useState } from 'react';
import commandModal from 'react-modal-container';
import { Modal } from 'antd';

interface Props {
  /** 服务里 */
  name: string
}

/**
 * 将 Antd 的 Modal 改成命令式的 Modal
 * 可以实现很轻松的用命令式来打开或关闭 Modal 而不是用声明式
 */
export default commandModal<Props>((props) => {
  const { name, modal } = props;
  const [visible, setVisible] = useState(true);

  console.log(props);

  return (
    <div>
      <Modal
        visible={visible}
        title={name}
        afterClose={() => modal.close()}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}>
        <div>{name}</div>
      </Modal>
    </div>
  )
});
```

第二步：在使用的地方实例化。


```ts
export default function Test() {
  const onClick = e => {
    // 通过命令式打开弹层，状态自己维护
    const modal = new MyModal();
    modal.open({
      name: 'hello !!!',
      onSubmit: e => console.log(e),
    });
  };

  return (
    <div>
      <Button type='primary' danger onClick={onClick}>
        打开弹窗（命令式）
      </Button>
    </div>
  );
}
```

### API

构造函数，返回一个 Modal 类。
ModalContainer(component, id);

实例化之后，可以用函数。
- open(props?) - 打开弹层，可以传递 props。
- close() - 关闭弹层。
- update(props) - 更新弹层的 props。

> 注意，close 之后会从 document.body 里删除，而不是设置为 display: none。

### Example
你可以查看 [示例代码](./example)。
