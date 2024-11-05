import App from "@/App.tsx";
import NotFoundPage from "@/components/not-found-page.tsx";
import { pathWithBase } from "@/lib/utils.ts";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: pathWithBase(""),
        element: <App />,
    },
    {
        path: pathWithBase("/404"),
        element: <NotFoundPage />,
        children: [
            {
                path: pathWithBase("/404/:problemId"),
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: "/*",
        element: <NotFoundPage />,
    },
]);
const Providers = ({ children }: { children?: ReactNode }) => (
    <>
        <RouterProvider router={router} />
        <Toaster />
        {children}
    </>
);

export default Providers;
