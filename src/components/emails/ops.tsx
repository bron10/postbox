import React, {  Dispatch } from 'react';
import {Link} from 'react-router-dom';
import { Button, List, Row } from 'antd';
import { connect } from 'react-redux';
import './ops.css';
// import {formattedEmails} from '../../types';
import {opsList, composeEmailTxt} from './config';
import {openModal} from '../../store/modal/actions';
import {ActionTypes, ModalProps} from '../../store/modal/types';

interface EmailOps {
  openModal : (options:ModalProps) => void,
  selectedAction : string
} 

function EmailOps({openModal, selectedAction}: EmailOps) {
    
    const composeEmail = (e: React.SyntheticEvent<EventTarget>) => {
      const options = {
        type : 'COMPOSE_EMAIL',
        header: `Compose email`,
        className:'large-modal',
        open : true,
      };
      return openModal(options);  
    }
    
    return (
      <>
        <Row className="compose-email">
          <Button onClick = {(e) => composeEmail(e)}>{composeEmailTxt}</Button>
        </Row>
        
          <List
            size="small"
            bordered
            dataSource={opsList}
            renderItem={({title, type}) => {
              const selectedOptionClass = selectedAction ===type ? 'action-selected' : '';
              
              return <Link to={`/dashboard/${type}/list`}>
                <List.Item className ={selectedOptionClass}>{title}</List.Item></Link>
          }}
          />      
        
      </>
    );
}

const mapStateToProps = (state:any) => {
  return {
    emails : state.emails,
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    openModal: (data:ModalProps) => dispatch(openModal(data))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailOps);
