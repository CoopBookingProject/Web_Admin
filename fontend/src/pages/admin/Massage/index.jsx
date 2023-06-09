import React, { useState } from "react";
import {
    MassageHeader,
    Iconbutton,
    Bar1,
    Bar2,
    MassageBody,
    TableFillter,
    Line1,
    Line2,
    MainTable,
} from "./MassageStyled";
import Allmassage from "./MassageTable/Allmassage";
import AllCancelled from "./MassageTable/AllCancelled";

const Massage = () => {
    const [activeMenu, setActiveMenu] = useState("ผู้นวดทั้งหมด");

    const handleTableFillterClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <MassageHeader>
                <h1>ผู้นวด</h1>
                <Iconbutton>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <p style={{ marginLeft: '63px' }}>เพิ่มผู้นวด</p>
                </Iconbutton>
            </MassageHeader>
            <MassageBody>
                <TableFillter
                    onClick={() => handleTableFillterClick("ผู้นวดทั้งหมด")}
                    isActive={activeMenu === "ผู้นวดทั้งหมด"}
                >
                    ผู้นวดทั้งหมด
                </TableFillter>
                <TableFillter
                    onClick={() => handleTableFillterClick("Cancelled")}
                    isActive={activeMenu === "Cancelled"}
                >
                    Cancelled
                </TableFillter>
                <Line1></Line1>
                {activeMenu && (
                    <Line2
                        style={{ marginLeft: activeMenu === "ผู้นวดทั้งหมด" ? "0px" : "110px" }}
                    ></Line2>
                )}
                <MainTable>
                    {activeMenu === "ผู้นวดทั้งหมด" && <Allmassage />}
                    {activeMenu === "Cancelled" && <AllCancelled />}
                </MainTable>       
            </MassageBody>
            
        </>
    );
};
  
  

export default Massage;