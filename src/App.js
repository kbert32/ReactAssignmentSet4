import {lazy, Suspense} from 'react';   //lazy is required for lazy loading
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/Blog';  //has been converted to lazy loading
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';   //converted to lazy loading
import RootLayout from './pages/Root';

const BlogPage = lazy(() => import('./pages/Blog'));  //method for lazy loading components
const PostPage = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { 
            index: true, 
            element: <Suspense fallback={<p>Loading...</p>}><BlogPage /></Suspense>, //Suspense is used for fallback
            loader: () => import('./pages/Blog').then((module) => module.loader()), //method for lazy loading our loader function 
          },
          { 
            path: ':id', 
            element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>, 
            loader: (meta) => import('./pages/Post').then((module) => module.loader(meta)), 
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


//execute 'npm run build' in terminal to create 'build' folder with production version of code