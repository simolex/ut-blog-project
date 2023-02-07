import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
