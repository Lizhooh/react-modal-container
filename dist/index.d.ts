import { ComponentType } from 'react';
declare type ID = string | number;
interface IBaseProps<P> {
    modal: {
        open: (props?: P) => any;
        close: () => any;
    };
}
/**
 * 高阶 Modal 组件包裹
 */
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
