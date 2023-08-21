import './App.css'
import Companies from './component/Companies'
import Programers from "./component/Programers"

function App() {
  return (
    <>
    <div className="container">
      <div className='Programers'>
        <Companies name= "STC" staffNum={800} YearFounded={1980} typeOfService={"digital Development"} price={5000} ></Companies>
        <Programers name="Shatha" progLang="Jsx" experience= {8} company="STC"></Programers>
      </div> 
      <div className='Programers'>
        <Companies name= "GOIS" staffNum={2000} YearFounded={1880} typeOfService={"QA"} price={6000}></Companies>
        <Programers name="Nouf" progLang="Paython" experience= {7} company="GOIS" ></Programers>
      </div>
      <div className='Programers'>
        <Companies name= "SDAIA" staffNum={1220} YearFounded={1970} typeOfService={"Data analysis"} price={7000}></Companies>
        <Programers name="Reema" progLang="C++" experience= {6} company="SDAIA" ></Programers>
      </div>
      </div>
    </>
  )
}

export default App
