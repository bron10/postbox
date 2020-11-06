import React, {useEffect, Dispatch, useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, message, Layout } from 'antd';
import {isEmpty} from 'lodash';
import {Credentials} from '../../types';
import * as NotificationTypes from '../../store/notification/types';
import {reset} from '../../store/notification/actions';
import {signIn} from '../../store/auth/actions';
import {ActionTypes} from '../../store/auth/types';
import './style.css';
const { Header, Footer, Sider, Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({signIn, currentUser, errorMessage, reset}:any) => {
  const [home, setHome] = useState(false);
  useEffect(()=> {
    
    if(errorMessage){
      message.error(errorMessage);
      reset();
    }

    if(!isEmpty(currentUser)){
      setHome(true);
    }
  })

  const onFinish = (values:Credentials) => {
    console.log('Success:', values);
    signIn(values)
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };
  
  if(home){
    return <Redirect to= "/dashboard/inbox/list" />
  }
  return (
        <div className ={'login-form'}>
                <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email' , required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
  
        </div>
  );
};


const mapStateToProps = ({auth, notification}:any) => {
  return {
    currentUser : auth.currentUser,
    errorMessage : notification.errorMessage
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes | NotificationTypes.ActionTypes>) => {
  return {
    signIn : (data:Credentials) => dispatch(signIn(data)),
    reset : () => dispatch(reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
