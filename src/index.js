import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 高阶静态组件
 */
export default (Component, options) => class NodeRender {

    constructor(props) {
        this.props = props;
        this.id = Math.random();
        this.options = {
            clickModalClose: false,
            alpha: 0.45,
            ...options,
        }
    }

    onClick = e => {
        if (e.target === e.currentTarget && this.options.clickModalClose) {
            this.close();
        }
    }

    // 渲染模型
    renderModal = (props) => {
        const p = { ...props, ...this.props };
        Object.keys(p).forEach(i => {
            typeof p[i] === 'function' && (p[i] = p[i].bind(this));
        });
        // <div
        //     alpha={0.42}
        //     className="flex flex-center"
        //     onClick={this.onClick}
        //     style={{
        //         position: 'fixed',
        //         zIndex: 10001,
        //         top: 0,
        //         left: 0,
        //         right: 0,
        //         bottom: 0,
        //         backgroundColor: `rgba(1, 1, 1, ${this.options.alpha})`,
        //     }}
        //     >
        //     <Component {...p} modal={{ ...this }} />
        // </div>
        return (
            <Component {...p} modal={{ ...this }} />
        )
    }

    // 渲染在 body 节点下
    renderNode(component) {
        this.component = component || React.createElement('div');
        this.el = document.createElement('div');
        this.el.id = this.id;
        document.body.appendChild(this.el);
        // 渲染到指定节点上
        ReactDOM.render(this.component, this.el);
    }

    // 卸载节点
    unmount() {
        const el = document.getElementById(this.id);
        if (!el) return;
        ReactDOM.render(null, this.el)
        document.body.removeChild(this.el);
    }

    // 打开弹框
    open = (data) => {
        const el = document.getElementById(this.id);
        if (el) return;
        document.body.style = 'overflow: hidden';
        data !== undefined ?
            this.renderNode(this.renderModal({ data })) :
            this.renderNode(this.renderModal());
    }

    // 关闭弹框
    close = () => {
        document.body.style = '';
        this.unmount();
    }
}

