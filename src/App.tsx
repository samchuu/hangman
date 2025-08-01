import { Routes, Route } from "react-router"
import "./App.css"
import MainMenu from "./routes/MainMenu/MainMenu"
import HowToPlay from "./routes/HowToPlay/HowToPlay"
import Category from "./routes/Category/Category"
import Game from "./routes/Game/Game"
import NotFound from "./components/NotFound/NotFound"

function App() {
  return (
    <main className="font-mouse-memoirs px-6 md:px-8">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/category" element={<Category />} />
        <Route path="/game/:category" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
