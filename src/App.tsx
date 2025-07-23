import { Routes, Route } from "react-router"
import "./App.css"
import MainMenu from "./routes/MainMenu/MainMenu"
import HowToPlay from "./routes/HowToPlay/HowToPlay"
import Category from "./routes/Category/Category"
import Game from "./routes/Game/Game"

function App() {
  return (
    <main className="font-mouse-memoirs mx-6 md:mx-8">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/category" element={<Category />} />
        <Route path="/game/:category" element={<Game />} />
      </Routes>
    </main>
  )
}

export default App
