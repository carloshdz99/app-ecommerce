import { createBrowserRouter } from "react-router-dom";
import { CategoryPage } from "../module/Categorys/page/CategoryPage";
import productRouter from "../module/Product/router";
import cartRouter from "../module/Cart/router";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <CategoryPage />
    },
    ...productRouter,
    ...cartRouter,
]);

export default appRouter;