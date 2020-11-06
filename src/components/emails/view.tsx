import React, {  Dispatch } from 'react';
import {Link} from 'react-router-dom';
import { Descriptions, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {find} from 'lodash';

import './ops.css';
import {setEmailRead} from '../../store/emails/actions';
import {ActionTypes} from '../../store/emails/types';
import {ParamTypes} from '../../types';

import './view.css';

function EmailView({emails, setEmailRead}: any) {
  let { emailAction,  emailUuid} = useParams<ParamTypes>();
    
    if(emails){
      const {read, subject, created_at, body, cc, sender, ...otherInfo} = find(emails, (email) => email.emailUuid == emailUuid) || {};
      if(!read){
        setEmailRead(emailUuid)
      }
      return (
        <>
          <Link to={`/dashboard/${emailAction}/list`} className="back-button">Back</Link>
          <Descriptions title={subject} layout="vertical" bordered>
          <Descriptions.Item label={created_at}>
            <p className="cc-block">From : {sender}</p>
            <p className="cc-block">
            CC : {cc ? cc.join(',') : ''} 
            </p>
            <div dangerouslySetInnerHTML={ { __html: body}} />
            <hr />
          </Descriptions.Item>
        </Descriptions>
        </>
      );
    }else{
      return <Spin />
    }
}

const mapStateToProps = ({email}:any) => {
  return {
    emails : email.emails,
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    setEmailRead : (uuid:string) => dispatch(setEmailRead(uuid))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailView);
