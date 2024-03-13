import {createBrowserRouter} from "react-router-dom";
import Users from "../components/Users";
import MainLayout from "../Layout/MainLayout";
import Shop from "../components/Shop";
import Posts from "../components/Posts";

const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/user",
                element:<Users/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/posts",
                element:<Posts/>
            },
        ]
    }
])
export default MainRoutes