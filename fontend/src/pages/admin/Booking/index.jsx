import React, { useState } from "react";
import Homepage from "../../../pic/Homepage.png";
import bin from "../../../pic/bin.png";
import edit from "../../../pic/edit.png";
import { Modal, Col, Row, Input, Button, Radio, Space, TimePicker, DatePicker, Select, AutoComplete } from "antd";
import {
    Header,
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
    const [activeMenu, setActiveMenu] = useState("การจองทั้งหมด");
    const [dropdownValue, setDropdownValue] = useState("เลือกตัวเลือก");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [size, setSize] = useState('small');
    const [gender, setGender] = useState(''); // เพศ
    const [massageLevel, setMassageLevel] = useState(''); // ระดับนวด

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setGender('');
        setMassageLevel('');
    };

    const handleSave = () => {
        setIsModalOpen(false);
        setGender('');
        setMassageLevel('');

        // เพิ่มโค้ดส่วนของการจัดการกับข้อมูลหลังจากกดบันทึก
    };

    const handleAddBookingClick = () => {
        setIsModalOpen(true);

        // ส่งค่าเพศและระดับนวดไปยังส่วนอื่นของแอปพลิเคชัน
        // เช่น ส่งไปยัง API, เก็บในฐานข้อมูล, หรือประมวลผลอื่นๆ
        console.log('เพศที่เลือก:', gender);
        console.log('ระดับนวดที่เลือก:', massageLevel);
    };

    const handleTableFilterClick = (menu) => {
        setActiveMenu(menu);
    };

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        if (value !== dropdownValue) {
            setDropdownValue(value);
        }
    };

    return (
        <>
            <Header>
                <h1>จองคิว</h1>
                <Iconbutton style={{ cursor: 'pointer' }} onClick={handleAddBookingClick}>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <p style={{ marginLeft: "63px" }}>เพิ่มการจอง</p>
                </Iconbutton>
            </Header>

            <AdminBody>
                <TableFillter
                    onClick={() => handleTableFilterClick("การจองทั้งหมด")}
                    isActive={activeMenu === "การจองทั้งหมด"}
                >
                    การจองทั้งหมด
                </TableFillter>
                <TableFillter
                    onClick={() => handleTableFilterClick("ยกเลิก")}
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
                    {activeMenu === "ยกเลิก" && <Cancelled />}
                    {activeMenu === "การจองทั้งหมด" && <Allbook />}
                </MainTable>
            </AdminBody>

            {/* pop up */}
            <Modal
                visible={isModalOpen}
                onCancel={handleCloseModal}
                footer={[
                    <div key="footer-buttons" style={{ textAlign: "center" }}>
                      <Button
                        key="submit"
                        type="primary"
                        onClick={handleSave}
                        style={{
                          borderRadius: "48px",
                          backgroundColor: "#617A55",
                          color: "#fff",
                          height: "35px",
                          width: "100px",
                          transition: "background-color 0.3s ease",
                          fontSize: "20px",
                          border: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#496841";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#617A55";
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            marginTop: "-5px",
                            pointerEvents: "none",
                            textAlign: "center",
                            width: "100%",
                            overflow: "auto", // Add this line to enable scrolling
                          }}
                        >
                          บันทึก
                        </span>
                      </Button>
                    </div>
                  ]}
                width={750}
            >
                <h1 style={{ marginLeft: "270px" }}>เพิ่มการจองคิว</h1>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div>ชื่อ</div>
                        <div>
                            <Input
                                style={{
                                    height: "40px",
                                    width: "340px",
                                    borderRadius: "48px",
                                    backgroundColor: "#C2D9BD",
                                    marginTop: "15px",
                                }}
                                placeholder=""
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>นามสกุล</div>
                        <div>
                            <Input
                                style={{
                                    height: "40px",
                                    width: "340px",
                                    borderRadius: "48px",
                                    backgroundColor: "#C2D9BD",
                                    marginTop: "15px",
                                }}
                                placeholder=""
                            />
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div style={{ marginTop: "15px" }}>เบอร์โทรศัพท์</div>
                        <div>
                            <Input
                                style={{
                                    height: "40px",
                                    width: "340px",
                                    borderRadius: "48px",
                                    backgroundColor: "#C2D9BD",
                                    marginTop: "15px",
                                }}
                                placeholder=""
                            />
                        </div>
                    </Col>
                    <Col span={12} >
                        <div style={{ marginTop: "15px" }}>เพศ</div>
                        <div style={{ marginTop: '25px', marginLeft: '9px' }}>
                            <Radio.Group value={gender} onChange={(e) => setGender(e.target.value)}>
                                <Radio value="เพศชาย">เพศชาย</Radio>
                                <Radio value="เพศหญิง">เพศหญิง</Radio>
                                <Radio value="เพศทางเลือก">เพศทางเลือก</Radio>
                            </Radio.Group>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} >
                        <div style={{ marginTop: "15px" }}>บริการนวด</div>
                        <div>
                            <AutoComplete
                                style={{
                                    width: "340px",
                                    height: "40px",
                                    marginTop: "15px",
                                }}
                                options={[
                                    { value: 'นวดแผนไทยยาหม่อง' },
                                    { value: 'นวดน้ำมันอโรม่า' },
                                    { value: 'นวดเจลว่านหางจรเข้' },
                                    { value: 'นวดเท้า' },
                                    { value: 'นวดประคบสมุนไพร' },
                                    { value: 'นวดหินร้อน' },
                                ]}
                                placeholder="เลือกบริการนวด"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{ marginTop: "15px", marginLeft: '10px' }}>ผู้นวด</div>
                        <div>
                            <AutoComplete
                                style={{
                                    width: "340px",
                                    height: "40px",
                                    marginTop: "15px",
                                    marginLeft: '15px',
                                }}
                                options={[
                                    { value: 'เกมส์' },
                                    { value: 'ต่อ' },
                                    { value: 'เบล' },
                                    { value: 'ฟลุ๊ก' },
                                    { value: 'ฝ้าย' },
                                    { value: 'ใครก็ได้' },
                                ]}
                                placeholder="เลือกผู้นวด"
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <div style={{ marginTop: "15px" }}>ระดับนวด</div>
                        <div style={{ marginTop: '25px' }}>
                            <Radio.Group value={massageLevel} onChange={(e) => setMassageLevel(e.target.value)}>
                                <Radio value="เบา">เบา</Radio>
                                <Radio value="กลาง">กลาง</Radio>
                                <Radio value="หนัก">หนัก</Radio>
                            </Radio.Group>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ marginTop: "15px", marginLeft: '10px' }}>ปฏิทิน</div>
                        <div>
                            <DatePicker
                                style={{
                                    width: "165px",
                                    height: "40px",
                                    borderRadius: "48px",
                                    backgroundColor: "#C2D9BD",
                                    marginTop: "15px",
                                    marginLeft: '10px',
                                }}
                            />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div style={{ marginTop: "15px", marginLeft: '10px' }}>เวลา</div>
                        <TimePicker
                            style={{
                                width: "165px",
                                height: "40px",
                                borderRadius: "48px",
                                backgroundColor: "#C2D9BD",
                                marginTop: "15px",
                                marginLeft: '10px',
                            }}
                            placeholder=""
                        />
                    </Col>
                </Row>

           </Modal>
        </>
    );
};

export default Book;
