import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Suha995/Ex-Deploy-Suha/main/src/data/links.json"
      );
      const data = await response.json();
      setLinks(data);
    })();
  }, []);
  return (
    <div className="App">
      <h2>Links</h2>
      <ul>
        {links.map((link, index) => {
          return (
            <li>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
