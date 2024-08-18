import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MessageBoard from "./MessageBoard";
import AllPosts from "./AllPosts";
import PostView from "./PostView";
import Welcome from "./Welcome";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
