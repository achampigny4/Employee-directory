import React, { useEffect, useState } from "react";
import './App.css';
import Employee from './employee';


function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();

    console.log("effect run"); //can modify to run at certain points
  }, []);//set when to run. empty = run once when app starts. w/o empty array it will run many times

  const getEmployees = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=200&nat=us`);
    const data = await response.json();
    console.log(data.results);
    setEmployees(data.results);
  }

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <form className="search-form">
        <input className="search-bar"/>
        <button 
        // onClick={() => }
        className="search-button" type="submit">Search</button>
      </form>
      {employees.map(employee => (
        <Employee
        image={employee.picture.thumbnail}
        fname={employee.name.first}
        lname={employee.name.last}
        email={employee.email}
        phone={employee.cell}/>
      ))};
    </div>
  );
}

export default App;
