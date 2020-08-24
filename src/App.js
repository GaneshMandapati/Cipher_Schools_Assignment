import React,{Component} from 'react';

class App extends Component  {
   
   state={
           todo:[]
          }

  render()
  {

    return (
      <div>
  
         <div className="header">
            <h1 style={{ textAlign: "center",marginTop:"50px",color:"black"}}>TODO APP</h1>
         </div>
  
       <div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" name="todoTask" placeholder="Enter your Task" autoComplete="off"></input>
                  <div className="input-group-append">
                     <button type="submit" className="btn btn-success" >Add</button>
                   </div>
            </div>
        </form>
        <ul className="list-group">
        {
          this.state.todo.map((item,index) =>
          {
            return <li className="list-group-item" key="index" style={{margin:"5px 5px"}}>
              {item}
              <button  className="btn btn-sm btn-danger float-right" onClick={(e)=>this.deleteTask(e,index)}>Remove</button>
            </li>
          })
        }          
        </ul>
      </div>
     </div>
    );
  }
  
  handleSubmit =(event)=>
  {
    let task=event.target.elements.todoTask.value;
    if(task.length>0)
    {
      this.setState({
              todo:[...this.state.todo,task]
      })
    event.target.reset();
    }
    event.preventDefault();
  }

  deleteTask= (e,index)=>
  {
    let data=[...this.state.todo];
    data.splice(index,1);
    this.setState({todo:data});
  }

}


export default App;
