import { Routes, Route } from "react-router"
import "./App.css"
import MainMenu from "./routes/MainMenu"
import HowToPlay from "./routes/HowToPlay"
import Category from "./routes/Category"

function App() {
  return (
    <main className="font-mouse-memoirs min-h-dvh flex flex-col justify-center mx-8">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </main>
  )
}

export default App
