import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { VaseArrangementsPage } from "./pages/VaseArrangementsPage";
import { CustomBouquetsPage } from "./pages/CustomBouquetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/vase-arrangements",
    Component: VaseArrangementsPage,
  },
  {
    path: "/custom-bouquets",
    Component: CustomBouquetsPage,
  },
]);
