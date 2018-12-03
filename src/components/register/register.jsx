import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button} from 'antd-mobile';
import Logo from '../logo';
const Item = List.Item;
class Register extends Component {
  state = {
    boss:true,
    selected: true,
    userName:'',
    password:'',
    rePassword:'',
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
  
  getUseName =(value)=>{
    this.setState({
      username:value,
    })
  }
  
  getPasswprd =(value)=>{
    this.setState({
      password:value,
    })
  }
  
  getInMsg = (type,value)=>{
    this.setState({
      [type]:value
      
    })
  }
  
  register =()=>{
    const {boss,password,rePassword,userName}=this.state;
    console.log(boss, password, rePassword, userName);
  }
  goLogin =()=>{
    this.props.history.replace('/login');
  }
  render() {
    const {boss} = this.state;
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
            <InputItem onChange={val => this.getInMsg('rePassword',val)}>确认密码：</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型：&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!boss} onChange={this.getInMsg.bind(null, 'boss',false)}>求职</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={boss} onChange={this.getInMsg.bind(null, 'boss',true)}>招聘</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
            <WhiteSpace/>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;