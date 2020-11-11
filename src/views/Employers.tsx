import React from "react";
import jsxToString from 'jsx-to-string'
import Navigation from "../components/Navigation";
import ID from "../app/features/actions/getID";

const axios = require("axios");

class Employes extends React.Component {
  render() {
    const delEmp=(arg0:any,arg1:any)=>{
      if(loading === 0){
        axios
          .post("/api/emp/delete", {
            id: `${arg0}`,
            acc_id: `${arg1}`,
          })
          .then((res: any) => {
            fetch()
          })
          .catch((error: any) => {
            console.error(error);
          });
      }else{
        console.log('pew pew')
      }
    }
    let table: any[] = [{}];
    let id: any = "";
    const inputs = (
      <tr>
        <td>
          <input type="text" id="fName" />
        </td>
        <td>
          <input type="text" id="lName" />
        </td>
        <td>
          <input type="text" id="jobTitle" />
        </td>
        <td>
          <input type="text" id="salaryPH" />
        </td>
        <td>
          <input type="text" id="workedH" />
        </td>
        <td>
          <input type="text" id="employedSince" />
        </td>
        <td>
          <button
            onClick={() => {
              addEmployer(
                (document.getElementById("fName") as HTMLInputElement).value,
                (document.getElementById("lName") as HTMLInputElement).value,
                (document.getElementById("jobTitle") as HTMLInputElement).value,
                (document.getElementById("salaryPH") as HTMLInputElement).value,
                (document.getElementById("workedH") as HTMLInputElement).value,
                (document.getElementById("employedSince") as HTMLInputElement)
                  .value
              );
            }}
          >
            +
          </button>
        </td>
        <td></td>
      </tr>
    );
    const loadData = () => {
      const eTable = document.createElement("table");
      let pageTable: string = "";
      table.forEach((Element) => {
        pageTable += `
        <tr>
        <td>${Element.firstName}</td>
        <td>${Element.lastName}</td>
        <td>${Element.jobTitle}</td>
        <td>${Element.salaryPH}</td>
        <td>${Element.workedH}</td>
        <td>${Element.employedSince}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
        </tr>`;
      });
      eTable.innerHTML = `
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Job Title</th>
        <th>Salary/h</th>
        <th>Worked Hours</th>
        <th>Employed since</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        ${pageTable}
        ${jsxToString(inputs)}
        `;
        const tab = document.getElementById("emp_table") as HTMLInputElement;
        tab.innerHTML = "";
        tab.appendChild(eTable);
        loading = 0;
      };
      const setID = () => {
        if (document.getElementById("id_container")?.innerHTML === undefined) {
          setTimeout(() => {
            setID();
          }, 100);
        } else {
          id = document.getElementById("id_container")?.innerHTML;
          fetch();
        }
      };
      setID();
      const addEmployer = (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: string,
      arg5: string
    ) => {
      axios
        .post("/api/emp/add", {
          acc_id: `${id}`,
          firstName: `${arg0}`,
          lastName: `${arg1}`,
          jobTitle: `${arg2}`,
          salaryPH: `${arg3}`,
          workedH: `${arg4}`,
          employedSince: `${arg5}`,
        })
        .then((res: any) => {
          fetch();
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    const fetch = () => {
      const id = document.getElementById("id_container")?.innerHTML;
      axios
        .post("/api/emp/get", {
          acc_id: `${id}`,
        })
        .then((res: { statusCode: any; data: any }) => {
          table = res.data;
          loadData();
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    return (
      <div className="App">
        <Navigation />
        Employes
        <span id="id_container">
          <ID />
        </span>
        <div id="emp_table"></div>
      </div>
    );
  }
}

export default Employes;
