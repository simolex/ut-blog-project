import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    parentElement?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, parentElement = document.body } = props;
    return createPortal(children, parentElement);
};
