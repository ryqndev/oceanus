import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <main>
                    <Routes>
                        <Route index element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
