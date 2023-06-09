import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { path } from "./utils/path";
import {
  About,
  DetailPost,
  Home,
  Layout,
  PageNotFound,
  Posts,
  VerifyAccount,
  Login,
  LatestContent,
} from "./pages/public";
import { Dashboard, EditPost } from "./pages/admin";
import Manager from "./pages/admin/Manager";
import { useEffect, useState } from "react";
import { List } from "./components";

function App() {
  const [curPage, setCurPage] = useState(1);
  const location = useLocation();
  useEffect(() => {
    window.onbeforeunload = () =>
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route index path={path.HOME} element={<Home />} />
          <Route index path={path.LATEST_CONTENT} element={<LatestContent />} />
          <Route
            path={path.POSTS}
            element={<Posts curPage={curPage} setCurPage={setCurPage} />}
          >
            <Route
              path={path.LIST_POST}
              element={<List curPage={curPage} setCurPage={setCurPage} />}
            />
            <Route path={path.DETAIL_POST} element={<DetailPost />} />
          </Route>
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.STAR} element={<PageNotFound />} />
        </Route>
        <Route path={path.SYSTEM} element={<Dashboard />}>
          <Route path={path.MANAGER} element={<Manager />} />
          <Route path={path.CREATE_POST} element={<EditPost />} />
          <Route path={path.UPDATE_POST} element={<EditPost isUpdate />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Login isRegister />} />
        <Route path={path.VERIFY} element={<VerifyAccount />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
