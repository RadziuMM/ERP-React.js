import React from "react";
import Navigation from "../components/Navigation";
import ID from "../app/features/actions/getID";
import "../styles/Events.scss";


const axios = require("axios");

class Events extends React.Component {
  render() {
    let id: any;
    let data: any[] = [];
    let isEditE: boolean = false;
    let employers:any[]=[];


    const addEvent = ()=> {
      const args: any = [];
        args.push(
          (document.getElementById(`nAdd`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`tfAdd`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`ttAdd`)! as HTMLInputElement).value
        );
        employers.forEach(element=>{
          const correct =`${element.firstName} ${element.lastName}`
          if(correct===(document.getElementById(`oAdd`)! as HTMLInputElement).value){
            args.push(element.id);
          }
        })
        if(args.length===3){
          args.push(0);
        }
        let members:any = []
        employers.forEach(element=>{
          const box = (document.getElementById(`checkMeA${element.id}`)as HTMLInputElement).checked
          if(box===true){
            members.push(Number((document.getElementById(`checkMeA${element.id}`)as HTMLInputElement).value))
          }
        })
        args.push(JSON.stringify(members));
        axios
        .post("/api/events/add", {
          acc_id: `${id}`,
          name: `${args[0]}`,
          time_from: `${args[1]}`,
          time_to: `${args[2]}`,
          owner_id: `${args[3]}`,
          members_ids: `${args[4]}`
        })
        .then((res: any) => {
          fetch();
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
    const delEvent = (arg0: any, arg1: any) => {
      axios
        .post("/api/events/delete", {
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
    const editEvent = (arg0: any, arg1: any, arg2: any[],arg3:any) => {
      if (isEditE) {
        isEditE = false;
        const args: any = [];
        args.push(
          (document.getElementById(`ni${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`tfi${arg0}`)! as HTMLInputElement).value
        );
        args.push(
          (document.getElementById(`tti${arg0}`)! as HTMLInputElement).value
        );
        employers.forEach(element=>{
          const correct =`${element.firstName} ${element.lastName}`
          if(correct===(document.getElementById(`oi${arg0}`)! as HTMLInputElement).value){
            args.push(element.id);
          }
        })
        if(args.length===3){
          args.push(0);
        }
        let members:any = []
        employers.forEach(element=>{
          const box = (document.getElementById(`checkMe${element.id}`)as HTMLInputElement).checked
          if(box===true){
            members.push(Number((document.getElementById(`checkMe${element.id}`)as HTMLInputElement).value))
          }
        })
        args.push(JSON.stringify(members));
        axios
        .post("/api/events/edit", {
          id: `${arg0}`,
          acc_id: `${arg1}`,
          name: `${args[0]}`,
          time_from: `${args[1]}`,
          time_to: `${args[2]}`,
          owner_id: `${args[3]}`,
          members_ids: `${args[4]}`
        })
        .then((res: any) => {
          fetch();
        })
        .catch((error: any) => {
          console.error(error);
        });
      } else {
        isEditE = true;
        arg2.forEach(Element=>{
          if (Element.id !== arg0) {
            (document.getElementById(
              `editE${Element.id}`
            )! as HTMLButtonElement).disabled = true;
          };
          let preselect =""
          let list = ''
          employers.forEach(element=>{
            list += `<input name="checkM${element.id}" id="checkMe${element.id}" type="checkbox" value="${element.id}"/><label for="checkM${element.id}">${element.firstName} ${element.lastName}</label><br>`
            if(arg3.owner_id===element.id){
              preselect=`${element.firstName} ${element.lastName}`
            }
          });
        (document.getElementById(`n${arg0}`)! as HTMLTableCellElement).innerHTML = `<input id="ni${arg0}" value="${arg3.name}" />`;
        (document.getElementById(`tf${arg0}`)! as HTMLTableCellElement).innerHTML = `<input id="tfi${arg0}" value="${arg3.time_from}" />`;
        (document.getElementById(`tt${arg0}`)! as HTMLTableCellElement).innerHTML = `<input id="tti${arg0}" value="${arg3.time_to}" />`;
        (document.getElementById(`o${arg0}`)! as HTMLTableCellElement).innerHTML = `<input id="oi${arg0}" onclick='document.getElementById("oi${arg0}").value = ""' list="owners" value="${preselect}" />`;
        (document.getElementById(`m${arg0}`)! as HTMLTableCellElement).innerHTML = `${list}`;
        })
      }
    };

    const loadEvents = () => {
      const parent = document.getElementById("Events") as HTMLDivElement;
      parent.innerHTML = "";
      const events = document.createElement("table")! as HTMLTableElement;
      events.innerHTML += `<tr>
        <th>Name</th>
        <th>Start</th>
        <th>Finish</th>
        <th>Owner</th>
        <th>Members</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>`;
      data.forEach((Element) => {
        events.innerHTML += `<tr>
          <td id="n${Element.id}">${Element.name}</td>
          <td id="tf${Element.id}">${Element.time_from}</td>
          <td id="tt${Element.id}">${Element.time_to}</td>
          <td id="o${Element.id}">${Element.owner_id}</td>
          <td id="m${Element.id}">${JSON.parse(Element.members_ids)}</td>
          <td><button id="editE${Element.id}">Edit</button></td>
          <td><button id="deleteE${Element.id}">Delete</button></td>
        </tr>`;
      });
      events.innerHTML += 
      `<tr>
          <td><input id="nAdd" /></td>
          <td><input id="tfAdd" /></td>
          <td><input id="ttAdd" /></td>
          <td><input id="oAdd" list="owners" onclick='document.getElementById("oAdd").value = ""'/></td>
          <td id="tmAdd"><input id="mAdd" /></td>
          <td><button id="addEvent">Add</button></td>
        </tr>`;
      parent.appendChild(events);
      data.forEach((element) => {
        (document.getElementById(
          `deleteE${element.id}`
        )! as HTMLButtonElement).onclick = () => {
          delEvent(element.id, id);
        };
        (document.getElementById(
          `editE${element.id}`
        )! as HTMLButtonElement).onclick = () => {
          editEvent(element.id, id, data, element);
        };
      });
      (document.getElementById(
        `addEvent`
      )! as HTMLButtonElement).onclick = () => {
        addEvent();
      };
      axios
      .post("/api/emp/get", {
        acc_id: `${id}`,
      })
      .then((res: { statusCode: any; data: any }) => {
        employers = res.data
        data.forEach((element) => {
          for(let i =0;i<employers.length;i+=1){
            if (element.owner_id === employers[i].id){
              (document.getElementById(`o${element.id}`)!as HTMLDivElement).innerHTML = `${employers[i].firstName} ${employers[i].lastName}`;
            }
          }
          let members = '';
          for(let i = 0;i<JSON.parse(element.members_ids).length;i += 1){
              for(let j=0;j<employers.length;j+=1){
                if(employers[j].id===JSON.parse(element.members_ids)[i]){
                  members += `${employers[j].firstName} ${employers[j].lastName}, `;
                  (document.getElementById(`m${element.id}`)!as HTMLDivElement).innerHTML = members;
                }
              }
          }
        })
        const list = document.getElementById("ownersBlock")! as HTMLDivElement
        list.innerHTML = ""
        const option = document.createElement("datalist") as HTMLElement
        employers.forEach(element=>{
          option.innerHTML += `<option value="${element.firstName} ${element.lastName}"/>`
        })
        option.id = "owners"
        list?.appendChild(option)
        let mlist = ''
        employers.forEach(element=>{
          mlist += `<input name="checkM${element.id}" id="checkMeA${element.id}" type="checkbox" value="${element.id}"/><label for="checkM${element.id}">${element.firstName} ${element.lastName}</label><br>`
        });
        (document.getElementById("tmAdd")as HTMLTableCellElement).innerHTML= mlist
      })
      .catch((error: any) => {
        console.error(error);
      });

    };
    const fetch = () => {
      axios
        .post("/api/events/get", {
          acc_id: `${id}`,
        })
        .then((res: { statusCode: any; data: any }) => {
          data = res.data;
          loadEvents();
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    const setID = () => {
      if (document.getElementById("idE_container")?.innerHTML === undefined) {
        setTimeout(() => {
          setID();
        }, 100);
      } else {
        id = document.getElementById("idE_container")?.innerHTML;
        fetch();
      }
    };
    setID();
    return (
      <div className="eventPage">
        <Navigation />
        <span id="idE_container">
          <ID />
        </span>
        <div id="Events"></div>
        <span className="device">
            Too small device to read that section!
        </span>
        <div id="ownersBlock"></div>
      </div>
    );
  }
}

export default Events;
