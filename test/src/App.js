import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [student, setstudent] = useState([])
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data')
        const data = await response.json();
        setstudent(data.data)
      } catch (error) {

      }
    }
    fetchStudents()
  }, [])

  return (
    <div className="App">
      <table>
        <thread>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thread>
        <tbody>
          {student.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.first_name}</td>
              <td>{s.Last_name}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
