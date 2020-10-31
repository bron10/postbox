import React, { useState } from 'react';
import { Table, Button } from 'antd';
// import './App.css';
import {formattedEmails} from '../../types';

const columns = [
  {
    title: 'Name',
    dataIndex: 'sender_name',
    key : 'sender_name'
  },
  {
    title: 'subject',
    dataIndex: 'subject',
    key : 'subject'
  },
  {
    title: 'date',
    dataIndex: 'created_at',
    key : 'created_at'
  },
];

function EmailList({emails}:any) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (selectedRowKeys:any) => {
      setSelectedRowKeys(selectedRowKeys);
    }
    return (
      <Table rowSelection={{
        selectedRowKeys,
        onChange: onSelectChange,
      }}
      rowKey={({sender_email}, index) => sender_email}
      columns={columns} dataSource={emails} />
    );
}

export default EmailList;
