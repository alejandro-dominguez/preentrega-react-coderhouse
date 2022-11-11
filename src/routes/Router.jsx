import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../components/";
import { Landing } from "../components/";
import { ItemDetailContainer, ItemListContainer } from "../containers/";

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
                element: <ItemDetailContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;