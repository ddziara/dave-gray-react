import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home, { loader as homeLoader } from './routes/home';
import NewPost from './routes/newpost';
import PostPage, { loader as postPageLoader } from './routes/postpage';
import About from './routes/about';
import Missing from './routes/missing';
import { action as destroyAction } from "./routes/destroy";
import { action as createAction } from "./routes/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Missing />,
    children: [
      {
        errorElement: <Missing />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: homeLoader
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
