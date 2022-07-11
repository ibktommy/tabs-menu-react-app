import './App.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useEffect, useState } from 'react';

// Database
const url = 'https://course-api.com/react-tabs-project'

function App() {
  // Setting state
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)


  // Function to get Data
  const fetchURL = async () => {
    const response = await fetch(url)
    const responseData = await response.json()

    setData(responseData)
    setLoading(false)
  }

  // Setting UseEffect For Event Listener on the Data being fetched
  useEffect(() => {
    fetchURL()
  }, [])

  // Condition that checks if the Data was Fetched
  if (loading) {
    return (
      <>
        <h1 className='title-center'>Loading Data...</h1>
      </>
    )
  }

  // Passing Values from out Fetched Data into the App
  const { title, dates, duties, company } = data[value]

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
                  <KeyboardDoubleArrowRightIcon />
                  <p className="work-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, labore. Quo, dolores commodi. Repellat, dicta.
                  </p>
                </li>
                <li>
                  <KeyboardDoubleArrowRightIcon />
                  <p className="work-details">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, labore. Quo, dolores commodi. Repellat, dicta.
                  </p>
                </li>
                <li>
                  <KeyboardDoubleArrowRightIcon />
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
