import{ createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout.jsx';

const router= createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
        },
         {
            path:'/auth',
            element: <h2>Authentication layout</h2>,
        },
         {
            path:'/news',
            element: <h2>newslayout</h2>,
        },
         {
            path:'/*',
            element: <h2>Error404</h2>
        }
    ]
);
export default router;