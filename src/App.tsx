import Header from "./layouts/header";
import Result from "./layouts/result";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <SearchBar />

        <Result />
      </main>
    </div>
  );
}

export default App;
