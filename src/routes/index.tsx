import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/home'
import Layout from '../layouts'

const router = createBrowserRouter([
    {
        // parent route component
        element: <Layout />,

        // child route components
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
])

const AllRoutes = (): JSX.Element => {
    return <RouterProvider router={router} />
}

export default AllRoutes
