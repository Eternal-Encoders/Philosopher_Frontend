import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={'Loading'}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route
            element={element}
            key={path}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;