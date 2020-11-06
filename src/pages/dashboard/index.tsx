import React, {useEffect, Dispatch, useState} from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams,Switch, Route } from 'react-router-dom';
import EmailList from '../../components/emails/list';
import EmailOps from '../../components/emails/ops';
import EmailView from '../../components/emails/view';
import Sidebar from '../../components/sidebar';
import Modal from '../../components/modal/default';

import {signOut} from '../../store/auth/actions';
import {reset} from '../../store/notification/actions';
import * as NotificationTypes from '../../store/notification/types';
import * as AuthTypes from '../../store/auth/types';
import {isEmpty} from 'lodash';
import {getEmails} from '../../store/emails/actions';
import {ActionTypes} from '../../store/emails/types';
import {User, ParamTypes} from '../../types';
import { Button, Layout, Menu , message} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './style.css';

const { Header, Content, Footer } = Layout;

interface dashboardProps { 
	getEmailsUpdate : (email:string, emailAction?:string) => void,
  successMessage : string,
  errorMessage : string, 
  reset : () => void,
  signOut: (currentUser:User) => void
};


function Dashboard({unreadCount, match, signOut, currentUser, emails, successMessage, errorMessage, reset, getEmailsUpdate}:any) {
  const [login, goToLogin] = useState(false);
  let { emailAction} = useParams<ParamTypes>();
  useEffect(()=>{
    if(successMessage){
      message.success(successMessage);
      reset()
    }
    if(errorMessage){
      message.success(errorMessage);
      reset()
    }

    
    if(!isEmpty(currentUser)){
      getEmailsUpdate(currentUser.email, emailAction);
    }else{
      goToLogin(true)
    }

  })
  
  const getOut = () => {
    signOut(currentUser);
  }

  if(login){
    return <Redirect to= "/login" />
  }
  console.log("match", match);
  return (
    <Layout style={{height: window.innerHeight}}>
      <Modal />
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          <Button className="actions-right" onClick={() => getOut()}>Logout</Button>
          (<div className="actions-right">
            <MailOutlined className="mail-icon-style"/>
             <span className="mail-count">{unreadCount}</span>
          </div>)
        </Header>
      <Layout>
        <Sidebar />
        <Content >
            <div className="email-ops-container">
              <EmailOps selectedAction = {emailAction}/>
            </div>
            <div className="site-layout-background email-list-container" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route path="/dashboard/:emailAction/list" >
                  <EmailList/>
                </Route>
                <Route path="/dashboard/:emailAction/view/:emailUuid" >
                  <EmailView />
                </Route>
              </Switch>
            </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Created by bron10</Footer>
    </Layout>
    
  );
}

const mapStateToProps = ({email, notification, auth}:any) => {
  return {
    currentUser : auth.currentUser,
    successMessage : notification.successMessage,
    errorMessage : notification.errorMessage,
    unreadCount : email.unreadCount
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes | NotificationTypes.ActionTypes | AuthTypes.ActionTypes>) => {
  return {
    reset : () => dispatch(reset()),
    signOut : (data:User) => dispatch(signOut(data)),
    getEmailsUpdate: (email:string, emailAction?:string) => dispatch(getEmails(email, emailAction))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
