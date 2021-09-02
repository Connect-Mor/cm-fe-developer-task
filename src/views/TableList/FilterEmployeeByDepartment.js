import React, { useState, useEffect } from 'react';
import data from "../../assets/data/HR.json";
import axios from 'axios';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from '@material-ui/core/Checkbox';

function FilterEmployeeByDepartment() {

  let [user, setUser] = useState()
  let [department, setDepartment] = useState("")

  const Departments = {
    HR: "hr",
    TECHNOLOGY: "technology",
    ACCOUNTING: "accounting",
    HELPDESK: "Helpdesk",
    FACILITIES: "facilities",
    OPERATIONS: "operations",
    SALES: "sales"
  }

   useEffect(() => {
    axios.get("https://randomuser.me/api/?seed={department}&results=10")
    .then((response) => {
      console.log(response.data.results
        )
      setUser(response.data.results)
    });


  }), [];

  return (
    <div className="App">
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Manager</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.departments.map(d => (
          <TableRow key={d.id}>
            <TableCell component="th" scope="row">
              <h4> {d.id} </h4>
            </TableCell>
            <TableCell component="th" scope="row">
              <h4> {d.department} </h4>
            </TableCell>
            <TableCell component="th" scope="row">
              <h4> {d.location} </h4>
            </TableCell>
            <TableCell component="th" scope="row">
              <h4> {d.manager.name.first} {d.manager.name.last} </h4>
            </TableCell>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Gender</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {result.results.map(d => (
        <TableRow key={d.id}>
          <TableCell component="th" scope="row">
            <h4> {d.name.first} {d.name.last}</h4>
          </TableCell>
          <TableCell component="th" scope="row">
            <h4> {d.email}</h4>
          </TableCell>
          <TableCell component="th" scope="row">
            <h4> {d.location.country}</h4>
          </TableCell>
          <TableCell component="th" scope="row">
            <h4> {d.dob.age} </h4>
          </TableCell>
          <TableCell component="th" scope="row">
            <h4> {d.gender} </h4>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
    </div>
  );
} 

export default FilterEmployeeByDepartment;