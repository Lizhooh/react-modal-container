import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 高阶静态组件
 */
export default (Component, id) => class NodeRender {

    constructor(props) {
        this.props = props;
        this.id = Math.random().toString(32).slice(2) || id;
    }

    // 渲染模型
    renderModal = (props) => {
        const p = { ...props, ...this.props };
        Object.keys(p).forEach(i => {
            typeof p[i] === 'function' && (p[i] = p[i].bind(this));
        });
        return (
            <Component {...p} modal={{ ...this }} ref={r => this.__c = r} />
        )
    }

    // 渲染在 body 节点下
    renderNode(component) {
        this.component = component || React.createElement('div');
        // 判断节点是否存在
        if (document.getElementById(this.id)) {
            ReactDOM.render(this.component, this.el);
        }
        else {
            this.el = document.createElement('div');
            this.el.id = this.id;
            document.body.appendChild(this.el);
            // 渲染到指定节点上
            ReactDOM.render(this.component, this.el);
        }
    }

    // 卸载节点
    unmount() {
        const el = document.getElementById(this.id);
        if (!el) return;
        ReactDOM.render(null, this.el)
        document.body.removeChild(this.el);
    }

    // 打开弹框
    open = (props) => {
        const el = document.getElementById(this.id);
        if (el) return;
        if (document.body.style.overflow !== 'hidden') {
            document.body.style = 'overflow: hidden';
        }
        props !== undefined ?
            this.renderNode(this.renderModal(props)) :
            this.renderNode(this.renderModal());
    }

    // 关闭弹框
    close = (hidden = true) => {
        if (hidden && document.body.style.overflow === 'hidden') {
            document.body.style = '';
        }
        this.unmount();
    }

    // 更新
    update = (props) => {
        this.props = props;
        if (this.__c) {
            this.renderNode(this.renderModal(props));
        }
    }
}
