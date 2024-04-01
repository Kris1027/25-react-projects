import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Accordion } from "./projects/accordion/Accordion";
import { Layout } from "./Layout";
import { RandomColor } from "./projects/random-color/RandomColor";
import { StarRating } from "./projects/star-rating/StarRating";
import { ImageSlider } from "./projects/image-slider/ImageSlider";
import { LoadMoreData } from "./projects/load-more-data/LoadMoreData";
import { TreeView } from "./projects/tree-view/TreeView";
import { menus } from "./projects/tree-view/data";
import { QrCodeGenerator } from "./projects/qr-code-generator/QrCodeGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/random-color",
        element: <RandomColor />,
      },
      {
        path: "/star-rating",
        element: <StarRating />,
      },
      {
        path: "/image-slider",
        element: <ImageSlider />,
      },
      {
        path: "/load-more-data",
        element: <LoadMoreData />,
      },
      {
        path: "/tree-view",
        element: <TreeView menus={menus} />,
      },
      {
        path: "qr-code-generator",
        element: <QrCodeGenerator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
