import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperSidebar, ButtonNav } from "./SidebarStyled";
import { Image } from 'antd';
import Logokenko1 from '../../../pic/Logokenko1.png';
import Homepage from '../../../pic/Homepage.png';
import Book from '../../../pic/Book.png';
import Massage from '../../../pic/Massage.png';
import Admin from '../../../pic/Admin.png';
import Logout from '../../../pic/Logout.png';
const Sidebar = () => {
    const navigate = useNavigate();

    const goToPage = (data) => {
        navigate(data.path);
    };

    const path = [];

    return (

        <>
            <WrapperSidebar>
                <div>
                    <img src={Logokenko1} style={{ width: "200px", height: "100px", marginLeft: '-8px', marginTop: '-30px' }} />
                </div>
                {
                    path.map((val, index) => {
                        return (
                            <ButtonNav
                                to={val.path} key={index}>
                                {val.name}
                            </ButtonNav>
                        );
                    })}
                <ButtonNav  to="/">
                    <div style={{ marginRight: '20px' }}>
                        <img src={Homepage} style={{ width: "25px", height: "25px", marginLeft: '10px', marginTop: '10px' }} />
                    </div>
                    <div style={{ marginRight: '40px' }}>
                        หน้าแรก
                    </div>
                </ButtonNav>

                <ButtonNav to="/Book">
                    <div style={{ marginRight: '20px' }}>
                        <img src={Book} style={{ width: "25px", height: "25px", marginLeft: '10px', marginTop: '10px' }} />
                    </div>
                    <div style={{ marginRight: '50px' }}>
                        จองคิว
                    </div>
                </ButtonNav>

                <ButtonNav to="/Massage">
                    <div style={{ marginRight: '20px' }}>
                        <img src={Massage} style={{ width: "25px", height: "25px", marginLeft: '10px', marginTop: '10px' }} />
                    </div>
                    <div style={{ marginRight: '55px' }}>
                        ผู้นวด
                    </div>
                </ButtonNav>

                <ButtonNav to="/Admin">
                    <div style={{ marginRight: '20px' }}>
                        <img src={Admin} style={{ width: "25px", height: "25px", marginLeft: '10px', marginTop: '10px' }} />
                    </div>
                    <div style={{ marginRight: '45px' }}>
                        แอดมิน
                    </div>

                </ButtonNav>

                <ButtonNav to="/Logout" style={{ marginTop: '370px', backgroundColor: '#617A55', color: '#fff', justifyContent: 'space-evenly' }}>
                    <div style={{ marginRight: '20px' }}>
                        <img src={Logout} style={{ width: "25px", height: "25px", marginTop: '10px',marginRight:'20px' }} />
                    </div>
                    <div style={{ marginLeft: '-50px' }}>
                        ออกจากระบบ
                    </div>
                </ButtonNav>

            </WrapperSidebar>
        </>

    );

};

export default Sidebar;