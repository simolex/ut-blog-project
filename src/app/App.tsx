import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/Router';

const App = () => {
    const { theme } = useTheme();

    // useEffect(() => {
    //     document.body.className = theme;
    // }, []);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
