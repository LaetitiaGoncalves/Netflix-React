import "./App.css";
import data from "./movies.json";
import logo from "./img/logo.png";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <div className="category">
        {data.map((mainCategory) => {
          return <Section mainCategory={mainCategory} />;
        })}
      </div>
    </div>
  );
};

export default App;
