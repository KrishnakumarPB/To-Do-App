import React,{Component} from 'react'
import Listview from './Listview'
class Server extends Component{
  constructor(){
    super()
    this.state={
      items:[{"slno":"1","itemname":"Complete Classes","status":"Open"}],
      name:"x"
    }
    this.onClick=this.onClick.bind(this)
  }
onClick(){
  console.log("CLicked")
  this.setState({
    name:"y"
  })
}
render(){
  return(
    <div>
      <Listview
      data={this.state.items}
      onClick={this.onClick}/>
    </div>
  )
}
}
export default Server 