import { RouteObject, createBrowserRouter } from "react-router-dom";
import PageLayout from "../pages/PageLayout";
import Sample1Page from "../pages/Sample1Page";
import Sample2Page from "../pages/Sample2Page";
import Sample3Page from "../pages/Sample3Page";
import Sample4Page from "../pages/Sample4Page";
import Sample5Page from "../pages/Sample5Page";

export type RouteObjectHandle = {
  title: string;
  navigation: string;
};

export const routes: RouteObject[] = [
  {
    path: "sample-1",
    element: <Sample1Page />,
    handle: {
      title: "Simple Module Federation",
      navigation: "Simple Demo",
    },
  },
  {
    path: "sample-2",
    element: <Sample2Page />,
    handle: {
      title: "Remote Component Import",
      navigation: "Component Import",
    },
  },
  {
    path: "sample-4",
    element: <Sample4Page />,
    handle: {
      title: "Todo Widget",
      navigation: "Todo Widget",
    },
  },
  {
    path: "sample-3",
    element: <Sample3Page />,
    handle: {
      title: "Style Clashing",
      navigation: "Style Clashing",
    },
  },
  {
    path: "sample-5",
    element: <Sample5Page />,
    handle: {
      title: "UI Interoperability",
      navigation: "UI Interoperability",
    },
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: routes,
  },
]);

export default router;
