import React from "react";
import data from "../../assets/data/HR.json";

// import EmployeesDepartmentList from "../../views/TableList/EmployeeDepartmentList";
import EmployeesByDepartment from "../../views/TableList/EmployeesByDepartment.js";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class FilterEmployeeByDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentData: data,
      dataLoaded: true,
      users: [],
      selectedDepartments: {
        hr: false,
        technology: false,
        accounting: false,
        helpdesk: false,
        facilities: false,
        operations: false,
        sales: false,
      },
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?seed=hr&results=10`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          dataLoaded: true,
          users: json.results,
        });
      });
  }
  // componentDidMount() {
  //   fetch(
  //     "C:Users\\35383DesktopCoding Funcm-fe-developer-tasksrcassetsdataHR.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Work with JSON data here
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       // Do something for an error here
  //       console.log(err);
  //     });
  // }

  render() {
    let { users } = this.state;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>{/* <EmployeesDepartmentList /> */}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <EmployeesByDepartment users={users} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
