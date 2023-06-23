import React, { useState } from "react";
import { Button, Input, Modal, Form, Row, Col } from 'antd';
import AllService from "./ServiceTable/AllService";
import AllCancelled from "./ServiceTable/AllCancelled";
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
} from "./ServiceStyled";

const { useForm } = Form;

const Service = () => {
    const [activeMenu, setActiveMenu] = useState("เซอร์วิสทั้งหมด");
    const [modalVisible, setModalVisible] = useState(false);
    
    const [form] = useForm(); // Declare the form object

    const handleTableFillterClick = (menu) => {
        setActiveMenu(menu);
    };
    
    const handleAddAdminClick = () => {
        setModalVisible(true);
      };
    
    const handleModalOk = () => {
        // Handle OK button click
        setModalVisible(false);
    };
    
    const handleModalCancel = () => {
        // Handle Cancel button click
        setModalVisible(false);
    };


    return (
        <>
            <Header>
                <h1 style={{ pointerEvents: 'none' }}>เซอร์วิส</h1>
                <Iconbutton  onClick={handleAddAdminClick}>
                    <Bar1></Bar1>
                    <Bar2></Bar2>
                    <p style={{ marginLeft: '63px' }}>เพิ่มเซอร์วิส</p>
                </Iconbutton>
            </Header>
            <Body>
                <TableFillter
                    onClick={() => handleTableFillterClick("เซอร์วิสทั้งหมด")}
                    isActive={activeMenu === "เซอร์วิสทั้งหมด"}
                >
                    เซอร์วิสทั้งหมด
                </TableFillter>
                <TableFillter
                    onClick={() => handleTableFillterClick("Cancelled")}
                    isActive={activeMenu === "Cancelled"}
                >
                    ยกเลิก
                </TableFillter>
                <Line1></Line1>
                {activeMenu && (
                    <Line2
                        style={{ marginLeft: activeMenu === "เซอร์วิสทั้งหมด" ? "0px" : "125px" }}
                    ></Line2>
                )}
                <MainTable>
                    {activeMenu === "เซอร์วิสทั้งหมด" && <AllService />}
                    {activeMenu === "Cancelled" && <AllCancelled />}
                </MainTable>
            </Body>

            <Modal
        title={
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
              เพิ่มข้อมูลเซอร์วิส
            </h1>
          }
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        destroyOnClose
        centered
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        bodyStyle={{ backgroundColor: '#fff', padding: '20px 20px 5px', borderRadius: '5px' }}
        width={650}
        footer={[
          <div key="footer-buttons" style={{ textAlign: "center" }}>
            <Button
              key="submit"
              type="primary"
              onClick={handleModalOk}
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
        {/* Add your modal content here */}
        <Form form={form} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="ชื่อ" name="name">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ระยะเวลา" name="period">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ราคา" name="price">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ประเภทบริการ" name="category">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
        
          {/* Add more form fields here */}
        </Row>
       </Form>
      </Modal>
    </>
  );
};

export default Service;