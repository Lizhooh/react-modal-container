import { ComponentType } from 'react';
declare type ID = string | number;
export interface IBaseProps<P> {
    modal: {
        open: (props?: P) => any;
        close: () => any;
    };
}
export default function <Props = any>(Component: ComponentType<Props & IBaseProps<Props>>, id?: ID): {
    new (props?: Props): {
        component: any;
        props: Props;
        id: ID;
        el: HTMLElement;
        getElement: () => HTMLElement;
        renderModal: (props?: Props) => any;
        renderNode(component: any): void;
        unmount(): void;
        open: (props?: Props) => void;
        close: () => void;
        update: (props?: Props) => void;
    };
};
export {};
