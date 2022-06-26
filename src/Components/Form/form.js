import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./form.css";
import ErrorModel from "../ErrorModal";
import tableIcons from "../TableIcon";
import MaterialTable from "material-table";
const Form = (props) => {
  const [firstname, setfirstname] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phonenum, setPhonenum] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const firstnamehandler = (e) => {
    setfirstname(e.target.value);
  };
  const lastnamehandler = (e) => {
    setLastName(e.target.value);
  };
  const phonenumhandler = (e) => {
    setPhonenum(e.target.value);
  };
  const submitcontact = () => {
    if (firstname.length === 0 || LastName.length === 0 || Phonenum === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter  Valid inputs (non-empty values)",
      });
      return;
    }

    const datainfo = {
      firstname: firstname,
      lastname: LastName,
      Phonenum: Phonenum,
    };
    setData([...data, datainfo]);

    setfirstname("");
    setLastName("");
    setPhonenum("");
  };
  console.log(data);
  console.log(firstname);
  return (
    <>
      <div className="flex">
        <h1 className="mb-4">Contact Info</h1>
        <div className="bg-1 shadow-lg">
          <TextField
            type="text"
            id="demo-helper-text-misaligned-no-helper"
            label="First name"
            className="firstdiv MuiInputBase-input"
            onChange={firstnamehandler}
            value={firstname}
          />
          <TextField
            type="text"
            id="demo-helper-text-misaligned-no-helper"
            label="Last name"
            className="firstdiv MuiInputBase-input"
            onChange={lastnamehandler}
            value={LastName}
          />
          <TextField
            type="text"
            id="demo-helper-text-misaligned-no-helper"
            label="phone number"
            className="firstdiv MuiInputBase-input"
            onChange={phonenumhandler}
            value={Phonenum}
          />
          <button className="btn btn-primary" onClick={submitcontact}>
            Add Contact
          </button>
        </div>
        <div className="bg-2">
          <MaterialTable
            title={<div className="aligns">phonebook</div>}
            icons={tableIcons}
            columns={[
              {
                title: "First name",
                field: "firstname",
              },
              {
                title: "Last name",
                field: "lastname",
                defaultSort: "asc",
              },
              { title: "Phone number", field: "Phonenum" },
            ]}
            options={{
              headerStyle: {
                fontSize: 20,
              },
              textAlign: "center",
              actionsColumnIndex: -1,
            }}
            editable={{
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  const updatedData = [...data];
                  updatedData.splice(selectedRow.tableData.id, 1);
                  setData(updatedData);
                  console.log(updatedData);
                  setTimeout(() => resolve(), 1000);
                }),
            }}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
