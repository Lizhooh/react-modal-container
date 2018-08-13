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