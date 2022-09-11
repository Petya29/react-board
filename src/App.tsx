import { Board } from "./components/Board";
import { NavBar } from "./components/partials";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Board />
      </main>
    </div>
  )
}

export default App;
