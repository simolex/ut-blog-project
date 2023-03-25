import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
    const { callback, triggerRef, wrapperRef } = options;
    // const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const params = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, params);
            observer.observe(triggerRef.current);
        }

        const currentTriggerRef = triggerRef.current;
        return () => {
            if (observer) {
                observer.unobserve(currentTriggerRef);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
