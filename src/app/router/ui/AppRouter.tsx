import { routeConfig } from '@/shared/routeConfig/routeConfig';
import Loader from '@/shared/ui/Loader/Loader';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
