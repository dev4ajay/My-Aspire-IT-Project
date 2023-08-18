import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./components/PrivateRouter";
import PrivateRouter2 from "./components/PrivateRouter2";
import News from "./Pages/News";
import "../admin/index.css"
import NewsAdd from "./Pages/NewsAdd";
import NewsView from "./Pages/NewsView";
import NewsEdit from "./Pages/NewsEdit";
import Notification from "./Pages/Notification";
import NotificationEdit from "./Pages/NotificationEdit";
import NotificationAdd from "./Pages/NotificationAdd";
import NotificationView from "./Pages/NotificationView";
function App() {
    return (
        <section className="app">
            <Router>

                <Routes>
                    <Route path="/admin/home" element={<Home />} />
                    <Route path="/admin/profile" element={<PrivateRouter />}>
                        <Route path="/admin/profile" element={<Profile />} />
                    </Route>
                    <Route path="/admin/sign-in" element={<PrivateRouter2 />}>
                        <Route path="/admin/sign-in" element={<SignIn />} />

                    </Route>
                    <Route path="/admin/forget-password" element={<ForgetPassword />} />
                    <Route path="/admin/sign-up" element={<SignUp />} />

                    <Route path="/admin/news" element={<News />} />
                    <Route path="/admin/notification" element={<Notification />} />
                    <Route path="/admin/notificationEdit/:id" element={<NotificationEdit />} />
                    <Route path="/admin/newsAdd" element={<NewsAdd />} />
                    <Route path="/admin/NotificationAdd" element={<NotificationAdd />} />
                    <Route path="/admin/newsView/:id" element={<NewsView />} />
                    <Route path="/admin/notificationView/:id" element={<NotificationView />} />
                    <Route path="/admin/newsEdit/:id" element={<NewsEdit />} />
                    {/* <Route path="/image-upload" element={<ImageUpload />}></Route> */}
                </Routes>
            </Router>
        </section>
    );
}

export default App;
