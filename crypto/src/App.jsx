import Dashboard from "./Pages/Dashboard/Dashboard";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Support from "./Pages/Support/Support";
import TransactionPage from "./Pages/Transactions/TransactionPage";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <TransactionPage />,
  
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
