import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import ListaProdutos from "./pages/listaProdutos";
import Home from "./pages/home/home";
export default function App(){
    return(
<>
<Header />
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="produtos" element={<ListaProdutos/>}/>
</Routes>
<Footer />
</>
    )
}