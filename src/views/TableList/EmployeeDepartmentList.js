import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { Table, TableCell, TableRow } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";

export default class EmployeeDepartmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentData: [],
      dataLoaded: true,
    };
  }

  render() {
    let { departmentData, dataLoaded } = this.state;

    console.log("this is what I'm LOKING FOR" + JSON.parse(departmentData));
    if (!dataLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
          <LinearProgress />
        </div>
      );
    } else {
      return (
        <div>
          <Typography variant="h6" component="h6" gutterBottom align="center">
            Employee & Department List
          </Typography>
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
              {departmentData.map((d, i) => (
                <TableRow key={i}>
                  <TableCell>{d.id}</TableCell>
                  <TableCell>{d.department}</TableCell>
                  <TableCell>{d.location}</TableCell>
                  <TableCell>{d.manager}</TableCell>
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    }
  }
}
