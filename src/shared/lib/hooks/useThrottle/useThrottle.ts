import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, interval: number) {
    const throttleRef = useRef(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        const saveTimeoutRef = timeoutRef;
        return () => {
            clearTimeout(saveTimeoutRef.current);
        };
    }, []);

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;
            }
            timeoutRef.current = setTimeout(() => {
                throttleRef.current = false;
            }, interval);
        },
        [callback, interval],
    );
}
