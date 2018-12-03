import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Button} from 'antd-mobile';
import Logo from '../logo';

class Register extends Component {
  state = {
    userName:'',
    password:'',
  }
  // changeRadio = type => {
  //   if (type === 'boss') {
  //     this.setState({
  //       selected: true
  //     })
  //   } else {
  //     this.setState({
  //       selected: false
  //     })
  //   }
  // }
  
  // getUseName =(value)=>{
  //   this.setState({
  //     username:value,
  //   })
  // }
  //
  // getPasswprd =(value)=>{
  //   this.setState({
  //     password:value,
  //   })
  // }
  
  getInMsg = (type,value)=>{
    this.setState({
      [type]:value
      
    })
  }
  
  register =()=>{
    const {password,userName}=this.state;
    console.log( password, userName);
  }
  goRegister =()=>{
    this.props.history.replace('/register');
  }
  render() {
    
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={val => this.getInMsg('userName',val)}>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val => this.getInMsg('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
            
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}>注册账号</Button>
            <WhiteSpace/>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;