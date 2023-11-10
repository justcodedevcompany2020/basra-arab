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
import { useEffect } from "react"
import { useSelector } from "react-redux"

export const Router = () => {
    let token = localStorage.getItem('token')
    const { Auth_reducer } = useSelector((st) => st)
    useEffect(() => {
        token = Auth_reducer.token
    }, [Auth_reducer.token])
    return (
        <BrowserRouter>
            <Routes>
                {
                    token ?
                        <Route path='/' element={<OrdersLayout />}>
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/order/:orderNumber" element={<SingleOrder />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/customer/:id" element={<SingleCustomer />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/chat" element={<Chat />} />
                            <Route path="/profile" element={<Profile />} />

                        </Route> :
                        <Route path='/' element={<OrdersLayout />}>
                            <Route path="/login" element={<Register />} />
                        </Route>
                }
            </Routes>
        </BrowserRouter>
    )
}
// Register