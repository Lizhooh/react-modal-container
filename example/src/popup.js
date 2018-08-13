import React, { Component } from 'react';
import Modal from 'react-modal-container';
import styled from 'styled-components';

// 弹窗
export default Modal(class extends Component {
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