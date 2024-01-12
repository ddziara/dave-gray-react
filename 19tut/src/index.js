import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root, { loader as rootLoader } from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/home';
import NewPost from './routes/newupdatepost';
import PostPage, { loader as postPageLoader } from './routes/postpage';
import About from './routes/about';
import Missing from './routes/missing';
import { action as destroyAction } from "./routes/destroy";
import { action as createAction } from "./routes/create";
import { action as updateAction } from "./routes/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <Missing />,
    children: [
      {
        errorElement: <Missing />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/post",
            element: <NewPost />
          },
          {
            path: "/post/:id",
            element: <PostPage />,
            loader: postPageLoader
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/post/:id/destroy",
            action: destroyAction
          },
          {
            path: "/post/:id/edit",
            element: <NewPost />
          },
          {
            path: "/post/:id/edit/update",
            action: updateAction
          },
          {
            path: "/post/create",
            action: createAction
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
