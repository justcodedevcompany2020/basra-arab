import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Orders } from "./Pages/Orders"
import { Customers } from "./Pages/Customers"
import { SingleOrder } from "./Pages/SingleOrder"
import { SingleCustomer } from "./Pages/SingleCustomer"
import { OrdersLayout } from "./Components/OrdersLayout"
import { Products } from "./Pages/Products"
import { Chat } from "./Pages/Chat"
import { Profile } from "./Pages/Profile"
import { Register } from "./Pages/Auth/Login"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<OrdersLayout />}>
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/order/:orderNumber" element={<SingleOrder />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/customer/:id" element={<SingleCustomer />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
// Register