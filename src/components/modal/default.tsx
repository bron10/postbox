import React, { useState, Dispatch } from 'react';
import { Table, Button, List, Row } from 'antd';
import { connect } from 'react-redux';
// import './App.css';
// import {formattedEmails} from '../../types';
// import {opsList, composeEmailTxt} from './config';
import {getEmails} from '../../store/emails/actions';
import {openModal} from '../../store/modal/actions';
import {ActionTypes, ModalProps} from '../../store/modal/types';


function DefaultModal() {
    

    return (
      <>
        
      </>
    );
}

const mapStateToProps = (state:any) => {
  return {
    // emails : state.emails,
    // isDisconnected : state.connection.isDisconnected
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    //openModal: () => dispatch(openModal())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultModal);
