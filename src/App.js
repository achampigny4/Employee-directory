import React, { useEffect, useState } from "react";
import './App.css';
import Employee from './components/employee';
import Header from './components/header';
import Table from './components/table';
import Search from './components/search';


function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);//set when to run. empty = run once when app starts.

  const getEmployees = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=200&nat=us`);
    const data = await response.json();
    setEmployees(data.results);
  }

  return (
    <div className="App">
      <Header />
      <Search />
      <Table />
      {employees.map(employee => (
        <Employee
          key={employee.id.value}
          image={employee.picture.thumbnail}
          fname={employee.name.first}
          lname={employee.name.last}
          email={employee.email}
          phone={employee.cell}
        />
      ))};
    </div>
  );
}

export default App;
