import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import SuccessRegister from "../Pages/SuccessRegister/SuccessRegister";
import NewRealeses from "../Pages/NewRealeses/NewRealeses";
import PostReview from "../Pages/PostReview/PostReview";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/LogIn" element={<LogIn/>}></Route>
                <Route path="/SignUp" element={<SignUp/>}></Route>
                <Route path="/Success" element={<SuccessRegister/>}></Route>
                <Route path="/NewReleases" element={<NewRealeses/>}></Route>
                <Route path="/PostReview" element={<PostReview/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;