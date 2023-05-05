import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKey, ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

// type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children?: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = Object.keys(store.reducerManager.getReducerMap());

        Object.entries(reducers).forEach(([nameKey, reducer]) => {
            const mounted = mountedReducers.includes(nameKey as StateSchemaKey);

            if (!mounted) {
                dispatch({ type: `@INIT ${nameKey} reducer` });
                store.reducerManager.add(nameKey as StateSchemaKey, reducer);
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameKey]) => {
                    store.reducerManager.remove(nameKey as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${nameKey} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
