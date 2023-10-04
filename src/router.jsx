import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout"
import { Orders } from "./Pages/Orders"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Orders />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}