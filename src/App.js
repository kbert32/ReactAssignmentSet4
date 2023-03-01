import { 
  createBrowserRouter, 
  RouterProvider,
  // createRoutesFromElements,      //used for alternate way of defining routes 
  // Route,
} from "react-router-dom";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from './pages/Root';
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(       //alternate way of defining routes
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} /> 
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);    //alternate way of defining routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [                   //index: true can be used instead of path: '', this designates this as the default
      {index: true, element: <HomePage />}, //route if the parent's path is active
      {path: 'products', element: <ProductsPage />},
      {path: 'products/:productId', element: <ProductDetailPage />}   //without '/' before 'products', these routes become 
    ],                                                                //relative to the parent as opposed to absolute
  },
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
