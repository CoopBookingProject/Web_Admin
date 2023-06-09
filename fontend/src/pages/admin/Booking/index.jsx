import React, { useState } from "react";
import Homepage from "../../../pic/Homepage.png";
import bin from "../../../pic/bin.png";
import edit from "../../../pic/edit.png";
import { Input, Col, Row } from 'antd';
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
} from "./Bookingstyed";
import Allbook from "./Allbook";
import Cancelled from "./Cancelled";
const Book = () => {
    const [activeMenu, setActiveMenu] = useState("เเอดมินทั้งหมด");
    const [dropdownValue, setDropdownValue] = useState("เลือกตัวเลือก");
    const [showModal, setShowModal] = useState(false);

    const handleTableFillterClick = (menu) => {
        setActiveMenu(menu);
    };

    const handleDropdownChange = (event) => {
        if (event.target.value !== dropdownValue) {
            setDropdownValue(event.target.value);
        }
    };

    const handleEditClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <AdminHeader>
                <h1>จองคิว</h1>
            </AdminHeader>
            <AdminBody>
                <TableFillter
                    onClick={() => handleTableFillterClick("การจองทั้งหมด")}
                    isActive={activeMenu === "การจองทั้งหมด"}
                >
                    การจองทั้งหมด
                </TableFillter>
                <TableFillter
                    onClick={() => handleTableFillterClick("ยกเลิก")}
                    isActive={activeMenu === "ยกเลิก"}
                >
                    ยกเลิก
                </TableFillter>
                <Line1></Line1>
                {activeMenu && (
                    <Line2
                        style={{
                            marginLeft: activeMenu === "การจองทั้งหมด" ? "0px" : "110px",
                        }}
                    ></Line2>
                )}

                <MainTable>
                    {activeMenu === "การจองทั้งหมด" && <Allbook/>}
                    {activeMenu === "ยกเลิก" && <Cancelled/>}
                </MainTable>

            </AdminBody>


         
        </>
    );
};

export default Book;

