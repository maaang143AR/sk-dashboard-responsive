import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/:LineID",
    element: <Dashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

