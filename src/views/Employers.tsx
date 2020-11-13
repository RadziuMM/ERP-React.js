import React from "react";
import jsxToString from "jsx-to-string";
import Navigation from "../components/Navigation";
import ID from "../app/features/actions/getID";

const axios = require("axios");

class Employes extends React.Component {
  render() {
    const isEdit: any[] = [];
    const delEmp = (arg0: any, arg1: any) => {
      axios
        .post("/api/emp/delete", {
          id: `${arg0}`,
          acc_id: `${arg1}`,
        })
        .then((res: any) => {
          fetch();
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    const edit = (arg0: any, arg1: any, arg2: any[]) => {
      if (isEdit[arg0] === false || isEdit[arg0] === undefined) {
        isEdit[arg0] = true;
        arg2.forEach((element) => {
          if (element !== arg0) {
            (document.getElementById(
              `edit${element}`
            )! as HTMLButtonElement).disabled = true;
          }
        });
        (document.getElementById(
          `fn${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="fni${arg0}" value="${
          (document.getElementById(`fn${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
        (document.getElementById(
          `ln${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="lni${arg0}" value="${
          (document.getElementById(`ln${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
        (document.getElementById(
          `jt${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="jti${arg0}" value="${
          (document.getElementById(`jt${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
        (document.getElementById(
          `sh${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="shi${arg0}" value="${
          (document.getElementById(`sh${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
        (document.getElementById(
          `wh${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="whi${arg0}" value="${
          (document.getElementById(`wh${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
        (document.getElementById(
          `es${arg0}`
        )! as HTMLTableCellElement).innerHTML = `<input id="esi${arg0}" value="${
          (document.getElementById(`es${arg0}`)! as HTMLTableCellElement)
            .innerHTML
        }" />`;
      } else {
        arg2.forEach((element) => {
          (document.getElementById(
            `edit${element}`
          )! as HTMLButtonElement).disabled = false;
        });
        isEdit[arg0] = false;
        const args: any = [];
        args.push(
          (document.getElementById(`fni${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`lni${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`jti${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`shi${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`whi${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`esi${arg0}`)! as HTMLInputElement).value
        );

        axios
          .post("/api/emp/edit", {
            id: `${arg0}`,
            acc_id: `${arg1}`,
            firstName: `${args[0]}`,
            lastName: `${args[1]}`,
            jobTitle: `${args[2]}`,
            salaryPH: `${args[3]}`,
            workedH: `${args[4]}`,
            employedSince: `${args[5]}`,
          })
          .then((res: any) => {
            fetch();
          })
          .catch((error: any) => {
            console.error(error);
          });
      }
    };
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
          <button id="addEmployer">+</button>
        </td>
        <td></td>
      </tr>
    );
    const loadData = () => {
      const eTable = document.createElement("table");
      let pageTable: string = "";
      const deletes: any[] = [];
      const edits: any[] = [];
      table.forEach((Element) => {
        pageTable += `
        <tr>
        <td id="fn${Element.id}">${Element.firstName}</td>
        <td id="ln${Element.id}">${Element.lastName}</td>
        <td id="jt${Element.id}">${Element.jobTitle}</td>
        <td id="sh${Element.id}">${Element.salaryPH}</td>
        <td id="wh${Element.id}">${Element.workedH}</td>
        <td id="es${Element.id}">${Element.employedSince}</td>
        <td><button id="edit${Element.id}">Edit</button></td>
        <td><button id="delete${Element.id}">Delete</button></td>
        </tr>`;
        deletes.push(Element.id);
        edits.push(Element.id);
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
      deletes.forEach((element) => {
        (document.getElementById(
          `delete${element}`
        )! as HTMLButtonElement).onclick = () => {
          delEmp(element, id);
        };
        (document.getElementById(
          `edit${element}`
        )! as HTMLButtonElement).onclick = () => {
          edit(element, id, deletes);
        };
      });
      (document.getElementById(
        "addEmployer"
      )! as HTMLButtonElement).onclick = () => {
        addEmployer(
          (document.getElementById("fName") as HTMLInputElement).value,
          (document.getElementById("lName") as HTMLInputElement).value,
          (document.getElementById("jobTitle") as HTMLInputElement).value,
          (document.getElementById("salaryPH") as HTMLInputElement).value,
          (document.getElementById("workedH") as HTMLInputElement).value,
          (document.getElementById("employedSince") as HTMLInputElement).value
        );
      };
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
