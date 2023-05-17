import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    parentElement?: HTMLElement;
}

/**
 * Компоненты с новым дизайном расположены в папке redesigned.
 * @deprecated В связи с редизайном приложения текущие компонеты устарели.
 */

export const Portal = (props: PortalProps) => {
    const { children, parentElement = document.body } = props;
    return createPortal(children, parentElement);
};
