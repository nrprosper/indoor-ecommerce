import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/auth/Login.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<App />}
            >
                <Route path={""} element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </>
    )
)


export default router;