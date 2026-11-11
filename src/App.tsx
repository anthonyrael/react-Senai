import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import ListaProdutos from "./pages/ListaProdutos/listaProdutos";
import Home from "./pages/home/home";
import DetProduto from "./pages/detProduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/AdmProdutos/AdmProdutos";
export default function App() {
    return (
        <>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/detalheProduto" element={<DetProduto />} />
                <Route path="login" element={<Login />} />
                <Route path="admProdutos" element={<AdmProdutos />} />
                <Route path="*" element={
                    
                    <img className="imgetgif" src="https://cdn.dribbble.com/userupload/22560227/file/original-b00fdbf3eb9328742e49e864383834c7.gif" alt="não encontrado" />  } />
            </Routes>
            <Footer />
        </>
    )
}