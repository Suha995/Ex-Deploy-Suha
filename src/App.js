import links from './data/links.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Links</h2>
      <ul>
      {links.map((link, index) => {
        return(
          <li><a href={link.url} target='_blank' rel='noreferrer'>{link.title}</a></li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
