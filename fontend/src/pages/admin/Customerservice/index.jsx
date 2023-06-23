import React, { useState } from "react";
import Cancelled from "./Cancelled";
import AllCustomerservice from "./AllCustomerservice";
import { Button, Modal, Input, Row, Col, TimePicker, Select, AutoComplete, Radio, Space } from 'antd';

import {
    Header,
    Iconbutton,
    Bar1,
    Bar2,
    Body,
    TableFillter,
    Line1,
    Line2,
    MainTable,
} from "./Customerservicestyed";

const Customerservice = () => {
    const [activeMenu, setActiveMenu] = useState("การจองทั้งหมด");
    const [massageLevel, setMassageLevel] = useState("");

    const handleTableFillterClick = (menu) => {
        setActiveMenu(menu);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleMassageLevelChange = (value) => {
        setMassageLevel(value);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <Header>
                <h1 style={{ pointerEvents: 'none' }}>บริการลูกค้า</h1>
                <Iconbutton onClick={showModal}>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <p style={{ marginLeft: '63px' }}>เพิ่มบริการ</p>
                </Iconbutton>
            </Header>
            <Body>
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
                        style={{ marginLeft: activeMenu === "การจองทั้งหมด" ? "0px" : "125px" }}
                    ></Line2>
                )}
                <MainTable>
                    {activeMenu === "การจองทั้งหมด" && <AllCustomerservice />}
                    {activeMenu === "ยกเลิก" && <Cancelled />}
                </MainTable>
            </Body>

            <Modal
                visible={isModalOpen}
                onCancel={handleCancel}
                width="750px"
                footer={[
                    <div key="footer-buttons" style={{ textAlign: "center" }}>
                      <Button
                        key="submit"
                        type="primary"
                        onClick={handleCloseModal}
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
            >
                <h1 style={{ marginLeft: "260px" }}>เพิ่มบริการลูกค้า</h1>
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
                        <div style={{ marginTop: "15px" }}>เวลา</div>
                        <TimePicker
                            style={{
                                width: "340px",
                                height: "40px",
                                borderRadius: "48px",
                                backgroundColor: "#C2D9BD",
                                marginTop: "15px",
                            }}
                            placeholder=""
                        />
                    </Col>
                    <Col span={12}>
                        <div style={{ marginTop: "15px" }}>เข้าใช้บริการ</div>
                        <div>
                            <Select
                                style={{
                                    height: "40px",
                                    width: "340px",
                                    marginTop: "15px",
                                }}
                                placeholder="----- เลือก -----"
                            >
                                <Select.Option value="option1">จองคิวสำเร็จ</Select.Option>
                                <Select.Option value="option2">รอรับบริการ</Select.Option>
                                <Select.Option value="option3">ยกเลิกการจองคิว</Select.Option>
                            </Select>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} >
                        <div style={{ marginTop: "15px" }}>การบริการ</div>
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
                        <div style={{ marginTop: "15px", marginLeft: '10px' }}>โปรโมชัน</div>
                        <div>
                            <Select
                                style={{
                                    height: "40px",
                                    width: "340px",
                                    marginTop: "15px",
                                    marginLeft: "10px"
                                }}
                                placeholder="----- เลือก -----"
                            >
                                <Select.Option value="option1">โปรโมชัน1</Select.Option>
                                <Select.Option value="option2">โปรโมชัน2</Select.Option>
                                <Select.Option value="option3">โปรโมชัน3</Select.Option>
                            </Select>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <div style={{ marginTop: "15px" }}>ผู้นวด</div>
                        <div>
                            <AutoComplete
                                style={{
                                    width: "340px",
                                    height: "40px",
                                    marginTop: "15px",
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
                    <Col span={12}>

                        <div style={{ marginTop: "15px", marginLeft: "10px" }}>
                            ระดับนวด
                        </div>
                        <div>
                            <Space style={{ marginTop: '25px', marginLeft: '15px' }}>
                                <Radio.Group value={massageLevel} onChange={(e) => setMassageLevel(e.target.value)}>
                                    <Radio value="เบา">เบา</Radio>
                                    <Radio value="กลาง">กลาง</Radio>
                                    <Radio value="หนัก">หนัก</Radio>
                                </Radio.Group>
                            </Space>
                        </div>
                    </Col>
                </Row>

         </Modal>
        </>
    );
};

export default Customerservice;
