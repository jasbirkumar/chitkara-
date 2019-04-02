import React { Component }from 'react';

class InfoForm extends Component {
  state={
      name: '',
      age: '',
      birthMonth: ''
    }
  render(){
    return{
      <div>
        <form>
          <label htmlFor='name' >Name</label>
          <input type='text' id='name' onChange={this.handlechange} /><br />
          
    }
  }
}
