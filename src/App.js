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

  // Button Function on Click
  // const getData = () => {
  //   setValue(id)
  // }

  console.log(data)

  return (
    <>
      <div className="container">
        <div className="content">
          <h2 className="content-title">
            Experience
          </h2>

          <div className="content-flex">
            <div className="left">
              {
                data.map((eachData, index) => {
                  return (
                    <button key={eachData.id} className='btn' onClick={() => setValue(index)}>
                      {eachData.company}
                    </button>
                  )
                })
              }
              {/* <button className="btn active-btn">Tommy</button>
              <button className="btn">Bigdrop</button>
              <button className="btn">Cuker</button> */}
            </div>
            <div className="right">
              <h4 className="header">{title}</h4>
              <p className="company">{company}</p>
              <p className="period">{dates}</p>
              <ul className="worklist">
                {
                  duties.map((duty, index) => {
                    return (
                      <li key={index}>
                        <KeyboardDoubleArrowRightIcon />
                        <p className="work-details">{duty}</p>
                      </li>
                    )
                  })
                }
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
