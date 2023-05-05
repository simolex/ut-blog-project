import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, userActions } from '@/entities/User';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames';
import { AppRouter } from './providers/Router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            {/* classNames('app', {}, [theme]) */}
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
