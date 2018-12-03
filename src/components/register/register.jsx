import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio,Button} from 'antd-mobile';
import Logo from '../logo';
const Item = List.Item;
class Register extends Component {
  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem>用户名：</InputItem>
            <WhiteSpace/>
            <InputItem>用户名：</InputItem>
            <WhiteSpace/>
            <Item>
              用户类型：&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>求职</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>招聘</Radio>
            </Item>
            <WhiteSpace/>
            <Button type="primary">注册</Button>
            <WhiteSpace/>
            <Button>已有账户</Button>
            <WhiteSpace/>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;