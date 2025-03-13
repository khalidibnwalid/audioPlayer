import { createHashRouter, Outlet, RouterProvider } from "react-router"
import RootLayout from "./components/layouts/RootLayout"
import HomePage from "./routes/HomePage"

const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout><Outlet /></RootLayout>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        // {
        //   path: "/item/:id",
        // },
      ]
    }
  ])
  
  function App() {

    return (
      <RouterProvider router={router} />
    )
  }

export default App
