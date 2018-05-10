import React, { Component } from 'react';

import {addUser, getUser} from '../api';

class User extends Component {
    state = {
      username: null,
      password: null,
      users:[]

    }

        componentDidMount() {
        this.refreshlogin()
       }

        refreshlogin() {
          getUser ()
          .then (users => this.setState ({users}))
          .catch (console.log)

        }


       onNameChange (e) {
         const username = e.target.value

         this.setState ({username})
       }

       onPasswordChange (e) {
         const password = e.target.value

         this.setState ({password})
       }


       onSubmit (e) {
         e.preventDefault ()
         const username = this.state.username
         const password = this.state.password


         addUser ({username,password})
         .then (() => this.refreshLogin())
         .catch(console.log)

       }
        render() {
          return(
            <div>
              <h1>Login Page</h1>
            <form onSubmit = {this.onSubmit.bind(this)}>
            <input type="text"
            value = {this.state.username} onChange = {this.onNameChange.bind(this)}/>
            <input type="text"
               value = {this.state.password}
               onChange ={this.onPasswordChange.bind(this)}/>
            <input type="submit"/>
            </form>
            <div>
            {JSON. stringify(this.state.users)}
            </div>
            </div>




    )
  }
}

export default User;
