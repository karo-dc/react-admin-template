import { lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";

import LoadingScreen from "./components/LoadingScreen";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import MainLayout from "./layouts/main/MainLayout";

const Loadable = (Component: LazyExoticComponent<any>) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const DashboardPage = Loadable(lazy(() => import("./pages/DashboardPage")));
const SettingsPage = Loadable(lazy(() => import("./pages/SettingsPage")));
const LoginPage = Loadable(lazy(() => import("./pages/LoginPage")));
const NotFoundPage = Loadable(lazy(() => import("./pages/NotFoundPage")));

export default [
  {
    path: "app",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      {
        path: "settings",
        children: [
          {
            path: "/",
            element: <SettingsPage />,
          },
          {
            path: "second",
            element: <SettingsPage />,
          },
        ],
      },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "404", element: <NotFoundPage /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];
