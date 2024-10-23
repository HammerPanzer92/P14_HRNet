import { Link } from "react-router-dom";
import { useEmployeeStore } from "../services/store";
import DataTable from 'react-data-table-component';

export function ListEmployee() {
  const employeeList = useEmployeeStore((state) => state.listEmployee);

  console.log(employeeList);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstname,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true
    },
  ];

  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        {/* <table id="employee-table" className="display"></table> */}
        <DataTable 
          columns={columns}
          data={employeeList}
        />
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
