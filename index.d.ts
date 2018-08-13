import * as React from "react";

class NodeRender {
    // open modal
    open(props: object): void;
    // close modal
    close(): void;
}

interface IProps {
    modal: NodeRender,
}

export default function(component: React.Component<IProps, any>, id?: string): NodeRender
