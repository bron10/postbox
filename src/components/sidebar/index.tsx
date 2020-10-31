import React from 'react';

import { Layout, Menu } from 'antd';
import {menuList} from './config'
const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {
    
    return (
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }} >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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
