import { RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </div>
  );
}

export default App;
