// import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import React from 'react';
import './Header.css';
import { withAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";


class Sidebar extends React.Component {
    render() {
        return (
            <></>
        //     <ProSidebar>
        //         <SidebarHeader>
        //             {
        //                 <p>Logo</p>
        //             }
        //         </SidebarHeader>
        //         <SidebarContent>
        //             <Menu>
        //                 <MenuItem>Explore<Link to="/" /></MenuItem>
        //                 <MenuItem>My List<Link to="/MyList" /></MenuItem>
        //                 <MenuItem>My Notes<Link to="/MyNNotes" /></MenuItem>
        //             </Menu>
        //         </SidebarContent>
        //         <SidebarFooter>
        //             {/**
        //    *  You can add a footer for the sidebar ex: copyright
        //    */}
        //         </SidebarFooter>
        //     </ProSidebar>
        );
    }
}

export default withAuth0(Sidebar);