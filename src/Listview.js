import React from 'react';
import './style.css';
let btnid=""
let taskid=""
let statusid=""
function Listview(props) {
  taskid="taskid"+props.uniqueid
  btnid="btn"+props.uniqueid
  statusid="status"+props.uniqueid
  return (
          <tr >
            <td scope="row"  id={taskid}>{props.taskname}</td>
            <td scope="row" id={statusid} class="status">{props.status}</td>
            <td scope="row"> 
              <button class="table-button" id={btnid} onClick={props.onClick}>
                Mark as Completed
              </button>
            </td> 
          </tr>

  );
}
export default Listview;
