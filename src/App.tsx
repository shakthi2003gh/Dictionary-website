import Header from "./layouts/header";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
