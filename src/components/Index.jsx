import { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployeeStore } from "../services/store";
import { Modal } from "./Modal";
import { Select } from "./Select";
import { states } from "../services/states";

export function Index() {
  
  const optionsDepartments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: states[0].abbreviation,
    zipCode: "",
    department: optionsDepartments[0],
  });

  const listEmployee = useEmployeeStore((state) => state.listEmployee);
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const [isModal, setIsModal] = useState(false);


  const saveEmployee = () => {
    //Sauvegarde de l'employee dans store Zustand
    //Note : pas instantatané
    addEmployee(employee);
    setIsModal(true);
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                firstname: e.target.value,
              }))
            }
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                lastname: e.target.value,
              }))
            }
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                dateOfBirth: e.target.value,
              }))
            }
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                startDate: e.target.value,
              }))
            }
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  street: e.target.value,
                }))
              }
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  city: e.target.value,
                }))
              }
            />

            <Select
              id="state"
              label="State"
              options={states.map((element) => {
                return {
                  value: element.abbreviation,
                  name: element.name
                }
               })}
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  state: e.target.value,
                }))
              }
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) =>
                setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  zipCode: e.target.value,
                }))
              }
            />
          </fieldset>

          <Select
            id="department"
            label="Department"
            options={optionsDepartments}
            onChange={(e) =>
              setEmployee((prevEmployee) => ({
                ...prevEmployee,
                department: e.target.value,
              }))
            }
          />

        </form>
        <button onClick={() => saveEmployee()}>Save</button>
        <button onClick={() => console.log(listEmployee)}>Test log</button>
      </div>
      <Modal
        message="Employee created !"
        visible={isModal}
        onClose={() => setIsModal(false)}
      />
    </main>
  );
}
