import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h2 className="content-title">
            Experience
          </h2>

          <div className="content-flex">
            <div className="left">
              <button className="btn active-btn">Tommy</button>
              <button className="btn">Bigdrop</button>
              <button className="btn">Cuker</button>
            </div>
            <div className="right">
              <h4 className="header">Engineering Intern</h4>
              <p className="company">Cuker</p>
              <p className="period">May 2014 - September 2015</p>
              <ul className="worklist">
                <li>
                  <i className="fa-solid fa-chevrons-right"></i>
                  <p className="work-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, labore. Quo, dolores commodi. Repellat, dicta.
                  </p>
                </li>
                <li>
                  <i className="fa-solid fa-chevrons-right"></i>
                  <p className="work-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, labore. Quo, dolores commodi. Repellat, dicta.
                  </p>
                </li>
                <li>
                  <i className="fa-solid fa-chevrons-right"></i>
                  <p className="work-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, labore. Quo, dolores commodi. Repellat, dicta.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="content-btn">
            <button>More info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
