import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const HomeIndex = React.lazy(() => import("./pages/HomeIndex"));
const ContactListIndex = React.lazy(() => import("./pages/ContactListIndex"));
const AddContactIndex = React.lazy(() => import("./pages/AddContactIndex"));

type RouteConfig = {
  key: string;
  path?: string;
  element: React.ReactNode;
  index?: boolean;
  children?: RouteConfig[];
};

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        key: "home-index",
        index: true,
        element: <HomeIndex />,
      },
      {
        key: "contact-list",
        path: "contact-list",
        element: <ContactListIndex />,
      },
      {
        key: "add-contact",
        path: "add-contact",
        element: <AddContactIndex />,
      },
    ],
    key: "home",
  },
  { path: "*", element: <Navigate to="/" replace />, key: "404" },
];

export const createRouting = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => {
          const renderRoute = (currentRoute: any) => (
            <Route
              index={currentRoute.index}
              key={currentRoute.key}
              path={currentRoute.path}
              element={currentRoute.element}
            >
              {currentRoute.children &&
                currentRoute.children.map((childRoute: RouteConfig) =>
                  renderRoute(childRoute)
                )}
            </Route>
          );

          return renderRoute(route);
        })}
      </Routes>
    </Suspense>
  );
};
