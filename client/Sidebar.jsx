import React from 'react'
// import { useHistory } from 'react-router-dom';
const amperLogo = require('../amper-logomark.svg');


const SideBar = () =>{
    // let history = useHistory();


const sidebarMenu=['Machines','Dashboards','Reports','Alerts','Explore','KPI Dash', 'Maintenance']
return (
    <div className="left-bar">
          <div className="flex f-al-center logo">
            <img src={amperLogo} style={{ height: '30px' }} alt="amper logo" />
            <h3>AMPER</h3>
          </div>
          <div className='sidebar-menu'>
  {sidebarMenu.map(menuOption=><div key={menuOption} className='menu-option'>{menuOption}</div>)}
          </div>
        </div>
)
}


export default SideBar