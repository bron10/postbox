import React, {useEffect, Dispatch, useState} from 'react';

import { Layout, Menu } from 'antd';
import {menuList} from './config'
const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {
  const [collapsed, onCollapse] = useState(false);
    return (
      <Sider
      collapsible
      collapsed={collapsed} onCollapse={(c) => onCollapse(c)}
      theme="light"
      breakpoint="lg"
       >
      
      <Menu theme="light" mode="inline">
        {menuList.map(({subMenu, title}, index)=>{
          if(subMenu){
            return (
              <SubMenu key={index} title={title}>
                {subMenu.map((data, subIndex) => <Menu.Item key={`${index}${subIndex}`}>{data.title}</Menu.Item>)}
              </SubMenu>
            )    
          }
          return (<Menu.Item key={index}>{title}</Menu.Item>)
        })}
      </Menu>
    </Sider> 
    );
}

export default Sidebar;
