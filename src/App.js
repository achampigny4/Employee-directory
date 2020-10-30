import React, { useEffect, useState } from "react";
import './App.css';
import Employee from './components/employee';
import Header from './components/header';


function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getEmployees();
  }, [query]);//set when to run. empty = run once when app starts.

  const getEmployees = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=200&nat=us`);
    const data = await response.json();
    setEmployees(data.results);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

 return (
   <div className="App">
     <Header />
     <form className="search-form" onSubmit={getSearch}>
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type="submit">Search</button>
     </form>
     <br/>
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
