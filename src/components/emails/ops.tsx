import React, { useState, Dispatch } from 'react';
import { Table, Button, List, Row } from 'antd';
import { connect } from 'react-redux';
// import './App.css';
// import {formattedEmails} from '../../types';
import {opsList, composeEmailTxt} from './config';
import {getEmails} from '../../store/emails/actions';
import {openModal} from '../../store/modal/actions';
import {ActionTypes, ModalProps} from '../../store/modal/types';

interface EmailOps {
  openModal : (text:string, options:ModalProps) => void
} 

function EmailOps({openModal}: EmailOps) {
    
    const composeEmail = (e: React.SyntheticEvent<EventTarget>) => {
      const options = {
        modalProps: {
          header: `Compose email`,
          className:'large-modal'
        }
      };
      return openModal(`COMPOSE_EMAIL`, options);  
    }

    return (
      <>
        <Row>
          <Button onClick = {(e) => composeEmail(e)}>{composeEmailTxt}</Button>
        </Row>
        <Row>
          <List
            size="small"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={opsList}
            renderItem={item => <List.Item>{item.title}</List.Item>}
          />      
        </Row>
      </>
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
    openModal: () => dispatch(openModal())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailOps);
