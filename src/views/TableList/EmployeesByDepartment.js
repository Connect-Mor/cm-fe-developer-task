import React from "react";
import Typography from "@material-ui/core/Typography";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default class EmployeesByDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      dataLoaded: false,
      departmentsSelected: [],
    };
  }

  render() {
    let { users, dataLoaded } = this.state;

    console.log(users);

    if (!dataLoaded) {
      return (
        <div>
          <h4>
            No Departments have been slected slect a department to see
            employees.
          </h4>
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h6" component="h6" gutterBottom align="center">
            Employee By Department
          </Typography>

          {users.map((u, i) => (
            <TableRow key={i}>
              <TableCell>{u.name.first}</TableCell>
              <TableCell>{u.name.last}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.dob.age}</TableCell>
              <TableCell>{u.phone}</TableCell>
            </TableRow>
          ))}
        </div>
      );
    }
  }
}
