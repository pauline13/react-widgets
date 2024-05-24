import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../shared/routeConfig/routeConfig';
import { Suspense } from 'react';
import Loader from '../../../shared/ui/Loader/Loader';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense
                            fallback={<Loader className="flex justify-center pt-10" />}
                        >
                            <div>{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
