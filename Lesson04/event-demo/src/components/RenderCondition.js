import React, { Component } from 'react'

export default class RenderCondition extends Component {
   constructor(props){
       super(props);
       this.state={
           isLoggedIn:false
       }
   }
   handleLogout = ()=>{
       this.setState({
           isLoggedIn:false
       })
   }
   handleLogIn = ()=>{
       this.setState({
           isLoggedIn:true
       })
   }
  render() {
    var LoginComp = (props)=>{
        return(
            <div>
                <h2>Welcome to My Application</h2>
            </div>
        );
    }
    var LogoutComp = (props)=>{
        return(
            <div>
                <h2>Please sign in</h2>
            </div>
        );
    }
    var LoginControl = (props)=>{
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn){
            return <LoginComp/>;
        }
        return <LogoutComp />
    }


    return (
      <div className='cyan'>
          <LoginControl isLoggedIn = {this.state.isLoggedIn} />
          {
              this.state.isLoggedIn ? <input type="button" value="Logout" onClick={this.handleLogout} />
              :<input type="button" value="Login" onClick={this.handleLogIn}/>
          }
      </div>
    )
  }
}
