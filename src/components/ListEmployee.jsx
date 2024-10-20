import { Link } from "react-router-dom";
import { useEmployeeStore } from "../services/store";

export function ListEmployee() {
  const employeeList = useEmployeeStore((state) => state.listEmployee);

  console.log(employeeList);

  /*
  Fonction éventuellement utile pour tableau
  function splitByCapitalLetters(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
  }
  */

  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
