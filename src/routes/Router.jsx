import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root/Root";
import { Landing } from "../components/";
import { ItemDetailContainer, ItemListContainer, CartContainer } from "../containers/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer />,
            },
            {
                path: "/cart",
                element: <CartContainer />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;