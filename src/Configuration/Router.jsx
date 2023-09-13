import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "../Pages/LogingPage/LogInPage";
import Home from '../Pages/Home/Home'



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}  ></Route>
                <Route path="/LogInPage" element={<LogInPage/>}></Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;