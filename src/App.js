import Bird from "./components/Bird"
import data from "./data"
import Navbar from "./components/Navbar";

function App() {

    const birds = data.map(item =>
        <Bird
            key={item.id}
            name={item.name}
            image={item.image}
            audio={item.audio}
        />)


    return (
    <div className="App">

        <Navbar />

        <div className="birds-list">
            {birds}
        </div>

    </div>
  );
}

export default App;
