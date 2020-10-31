import React, {useEffect, Dispatch} from 'react';
import { connect } from 'react-redux';
import EmailList from '../../components/emails/list';
import EmailOps from '../../components/emails/ops';
import Sidebar from '../../components/sidebar';
import {getEmails} from '../../store/emails/actions';
import {ActionTypes} from '../../store/emails/types';
import {dashboardProps} from '../../types';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './style.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Dashboard({emails, getEmailsUpdate}:dashboardProps) {
  useEffect(()=>{
    if(!emails.length){
      getEmailsUpdate();
    }
  })  

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="email-ops-container">
              <EmailOps />
            </div>
            <div className="site-layout-background email-list-container" style={{ padding: 24, minHeight: 360 }}>
              <EmailList emails={emails}/>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by bron10</Footer>
      </Layout>
    </Layout>
    
  );
}

const mapStateToProps = (state:any) => {
  return {
    emails : state.emails,
    // isDisconnected : state.connection.isDisconnected
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    getEmailsUpdate: () => dispatch(getEmails())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
