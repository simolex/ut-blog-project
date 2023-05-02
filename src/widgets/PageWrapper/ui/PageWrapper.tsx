import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollFixerByPath, scrollFixerActions } from '@/features/scrollFixer';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestIdProps } from '@/shared/types/testid';
import styles from './PageWrapper.module.scss';

interface PageWrapperProps extends TestIdProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    isLoading?: boolean;
}

export const PAGE_ID = 'PAGE_ID';

export const PageWrapper = (props: PageWrapperProps) => {
    const {
        className,
        children,
        onScrollEnd,
        isLoading = false,
        'data-testid': dataTestId = 'PageWrapper',
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollFixerByPath(state, pathname),
        // eslint-disable-next-line function-paren-newline
    );

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(
            scrollFixerActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
    }, 420);

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.pageWrapper, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={dataTestId}
        >
            {children}
            {onScrollEnd || !isLoading ? <div ref={triggerRef} className={styles.trigger} /> : null}
        </main>
    );
};
