import React, { useState } from "react";

import AllCancelled from "./AdminTable/AllCancelled";
import AllAdmin from "./AdminTable/AllAdmin";

import {
    AdminHeader,
    Iconbutton,
    Bar1,
    Bar2,
    AdminBody,
    TableFillter,
    Line1,
    Line2,
    MainTable,
} from "./AdminStyled";

const Admin = () => {
    const [activeMenu, setActiveMenu] = useState("เเอดมินทั้งหมด");

    const handleTableFillterClick = (menu) => {
        setActiveMenu(menu);
    };



    return (
        <>
            <AdminHeader>
                <h1 style={{ pointerEvents: 'none' }}>แอดมิน</h1>
                <Iconbutton>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <p style={{ marginLeft: '63px' }}>เพิ่มแอดมิน</p>
                </Iconbutton>
            </AdminHeader>
            <AdminBody>
                <TableFillter
                    onClick={() => handleTableFillterClick("เเอดมินทั้งหมด")}
                    isActive={activeMenu === "เเอดมินทั้งหมด"}
                >
                    เเอดมินทั้งหมด
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
                        style={{ marginLeft: activeMenu === "เเอดมินทั้งหมด" ? "0px" : "125px" }}
                    ></Line2>
                )}
                <MainTable>
                    {activeMenu === "เเอดมินทั้งหมด" && <AllAdmin />}
                    {activeMenu === "Cancelled" && <AllCancelled />}
                </MainTable>
            </AdminBody>

        </>
    );
};

export default Admin;
