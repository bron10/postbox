import React, { Dispatch } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import {closeModal} from '../../store/modal/actions';
import {ActionTypes} from '../../store/modal/types';
import ComponentRegistry from './component-registry';


function DefaultModal({data, closeModal}:any) {
  const {open, header, className} = data;
  
  return (
    <Modal
      title={<h4>{header}</h4>}
      maskClosable={false}
      className={className || ''}
      visible={!!open}
      footer={null}
      onCancel={() => closeModal()}
    >
      <div>
        <ComponentRegistry data={data} />
      </div>
    </Modal>
    );  
}


const mapStateToProps = ({modal}:any) => {
  return {
    data : modal.data,
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultModal);
