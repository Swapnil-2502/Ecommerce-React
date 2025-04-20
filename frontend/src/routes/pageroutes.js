import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Men from "../pages/men";
import Women from "../pages/women";
import Kids from "../pages/kids";
import Beauty from "../pages/beauty";
import Living from "../pages/living";

const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={<Women />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/beauty' element={<Beauty />} />
                <Route path='/living' element={<Living />} />
            </Routes>
        </>
       
    )
}

export default AppRoutes;