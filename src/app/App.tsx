import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserMounted, initAuthData } from '@/entities/User';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames';
import { AppRouter } from './providers/Router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!mounted) {
        return <PageLoader />;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
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
            }
            on={
                <div className={classNames('app_redesigned', {}, [])}>
                    <Suspense fallback="">
                        <Sidebar />
                        {mounted && <AppRouter />}
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
