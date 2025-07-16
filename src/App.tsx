import { Routes, Route } from "react-router"
import "./App.css"
import MainMenu from "./routes/MainMenu"
import HowToPlay from "./routes/HowToPlay"
import Category from "./routes/Category"

function App() {
  return (
    <div className="font-mouse-memoirs">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
