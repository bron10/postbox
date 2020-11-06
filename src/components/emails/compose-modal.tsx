import React, {  Dispatch } from 'react';
import { Select, Form, Input, Button } from 'antd';
import {EmailCreation, User} from '../../types';
import { connect } from 'react-redux';
import {sendEmail} from '../../store/emails/actions';
import {ActionTypes} from '../../store/emails/types';


interface ComposeModal {
  sendEmail : (data:EmailCreation) => void,
  modalInfo ?: any,
  emailSuccessMessage : string,
  currentUser : User
}

function ComposeModal({sendEmail, currentUser}:ComposeModal) {
  const {email} = currentUser;
  
  const onFinish = (values:EmailCreation) => {
    if(!values.body.trim()){
      if(!window.confirm("Do you want to proceed without body ?")){
        return false;
      }
    }
    sendEmail({...values, sender : email});
  };

  return (
  <Form name="compose-modal-form" onFinish={(values:EmailCreation) => onFinish(values)}>
  <Form.Item label="To" name={'to'} rules={[{ required: true }]}>
    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode"> 
    </Select>
  </Form.Item>
  <Form.Item label="Cc" name={'cc'}>
    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode"> 
    </Select>
  </Form.Item>
  <Form.Item name={'subject'} label="Subject" rules={[{ required: true }]}>
    <Input />
  </Form.Item>
  <Form.Item name={'body'} label="">
    <Input.TextArea />
  </Form.Item>
  <Form.Item >
    <Button type="primary" htmlType="submit" id="send-email-action">
      Submit
    </Button>
  </Form.Item>
</Form>)  
}


const mapStateToProps = ({email, auth}:any) => {
  
  return {
    currentUser : auth.currentUser,
    emailSuccessMessage : email.successMessage 
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    sendEmail : (data:EmailCreation) => dispatch(sendEmail(data)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeModal);