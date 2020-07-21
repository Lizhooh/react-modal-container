/**
 * @Author: Lizhooh (lizhoohs@foxmail.com)
 * @Date: 2020-07-21 08:54:08
 */
import { createElement, ComponentType } from 'react';
import ReactDOM from 'react-dom';

type ID = string | number;

export interface IBaseProps<P> {
  modal: {
    open: (props?: P) => any,
    close: () => any,
  }
}

/**
 * 高阶 Modal 组件包裹
 */
export default function <Props = any>(Component: ComponentType<Props & IBaseProps<Props>>, id?: ID) {
  return class NodeRender {
    private component: any;
    private props: Props;
    private id: ID;
    private el: HTMLElement;

    constructor(props?: Props) {
      this.props = props;
      this.id = id || Math.random().toString(32).slice(2);
    }

    private getElement = () => {
      return document.getElementById(String(this.id));
    }

    // 渲染模型
    private renderModal = (props?: Props) => {
      const p = { ...props, ...this.props };
      Object.keys(p).forEach(i => {
        typeof p[i] === 'function' && (p[i] = p[i].bind(this));
      });
      return createElement(Component as any, {
        ...p,
        id: `${this.id}-view`,
        modal: {
          open: this.open,
          close: this.close,
        },
      });
    }

    // 渲染在 body 节点下
    private renderNode(component) {
      this.component = component || createElement('div');
      // 判断节点是否存在
      if (this.getElement()) {
        ReactDOM.render(this.component, this.el);
      }
      else {
        this.el = document.createElement('div');
        this.el.id = String(this.id);
        this.el.className = String(this.id + '-view');
        document.body.appendChild(this.el);
        // 渲染到指定节点上
        ReactDOM.render(this.component, this.el);
      }
    }

    // 卸载节点
    private unmount() {
      const el = this.getElement();
      if (!el) return;
      ReactDOM.render(null, this.el);
      document.body.removeChild(this.el);
    }

    open = (props?: Props) => {
      const el = this.getElement();
      if (el) return;
      this.renderNode(this.renderModal(props));
    }

    close = () => {
      this.unmount();
    }

    update = (props?: Props) => {
      this.props = props;
      const el = document.getElementById(`${id}-view`);
      if (el) {
        this.renderNode(this.renderModal(props));
      }
    }
  }
}

