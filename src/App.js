import "./App.css";
import BlogList from "./components/BlogList";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="App">
      <Header />

      <BlogList sectionTitle={"Latest News"} />
      <Forecast />
      <BlogList sectionTitle={"Related News"} />
    </div>
  );
};

export default App;
