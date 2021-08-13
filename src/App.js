import React,{Component} from "react";
import "./style.css";
import Header from "./Header"
import Server from "./Server"
import Listview from "./Listview"
import Tableheader from "./Tableheader"
var itemname=""
var items=[];
var taskname=""
var itemTobeDisplayed="";
function LatestItem(props){
  const latestitem=props.latestitem
  let Table=""
  if(latestitem.length==0)
  {
    itemTobeDisplayed="";
  }
  else
  {
    itemTobeDisplayed=latestitem[0]["taskname"]
    Table=latestitem.map((item=><Listview taskname={item.taskname} status={item.status} uniqueid={item.uniqueid} onClick={()=>onClick(item.uniqueid)}/>))
    console.log(Table)
  }
  return(
    <div>
    {Table}
    </div>
  )
}
function onClick(y){
  let taskid="taskid"+y
  let btnid="btn"+y
  let statusid="status"+y
  document.getElementById(btnid).classList.add("hidden")
  let z=document.getElementById(statusid);
  z.innerHTML="Closed";
  z.classList.add("closed")
  document.getElementById(taskid).classList.add("linethrough");
}
class App extends Component {
  constructor(){
    super()
    this.state={
      items:[],
      uniqueid:1000
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    var itemname=document.getElementById("itemname").value
    const currentitems={"taskname":itemname,"status":"Open","uniqueid":this.state.uniqueid}
    let previtems=this.state.items
    previtems.push(currentitems)
    // console.log(previtems);
    this.setState({
      items:previtems,
      uniqueid:this.state.uniqueid+1
    })
    itemname=""
    document.getElementById("itemname").value=""
  }

  render(){
  return (
    <div className="body">
    <div className="container">
      <Header/>
      <form className="form">
        <input type="text" id="itemname" className="inputitem"/>
        <input type="submit" value="Add New Item" onClick={this.handleSubmit} className="btn-primary"/>  
      </form>
      <table class="table ">
      <thead className="thead">
          <tr>
            <th scope="col">Items</th>
          </tr>
    </thead>
        <tbody className="tablebody">
        <LatestItem latestitem={this.state.items}/>
        </tbody>
      </table>
    </div>
    </div>
  );
  }
}
export default App;