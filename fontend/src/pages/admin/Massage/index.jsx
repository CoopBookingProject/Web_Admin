import React, { useState } from "react";
import { Button, Input, Modal, Form, Row, Col, Radio } from 'antd';
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

import { Get } from "../../../service/http";

const { TextArea } = Input;
const { useForm } = Form;

const Massage = () => {
  const [activeMenu, setActiveMenu] = useState("ผู้นวดทั้งหมด");
  const [modalVisible, setModalVisible] = useState(false);

  const [form] = useForm(); // Declare the form object

  const handleTableFillterClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleAddMassageClick = () => {
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
      <MassageHeader>
        <h1>ผู้นวด</h1>
        <Iconbutton onClick={handleAddMassageClick}>
          <Bar1 />
          <Bar2 />
          <p style={{ marginLeft: "63px" }}>เพิ่มผู้นวด</p>
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
          ยกเลิก
        </TableFillter>
        <Line1 />
        {activeMenu && (
          <Line2
            style={{
              marginLeft: activeMenu === "ผู้นวดทั้งหมด" ? "0px" : "110px",
            }}
          />
        )}
        <MainTable>
          {activeMenu === "ผู้นวดทั้งหมด" && <Allmassage />}
          {activeMenu === "Cancelled" && <AllCancelled />}
        </MainTable>
      </MassageBody>

      <Modal
        title={
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
            เพิ่มข้อมูลผู้นวด
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
              <Form.Item label="ชื่อ" name="name" >
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
              <Form.Item label="นามสกุล" name="surname">
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
              <Form.Item label="อายุ" name="age" style={{ marginTop: "-15px"}}>
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
              <Form.Item label="ตำแหน่งที่รับผิดชอบ" name="skill" style={{ marginTop: "-15px"}}>
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
              <Form.Item label="เพศ" name="gender" style={{ marginTop: "-15px"}}>
                <Radio.Group>
                  <Radio value="male">ชาย</Radio>
                  <Radio value="female">หญิง</Radio>
                  <Radio value="other">เพศทางเลือก</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            {/* Add more form fields here */}
          </Row>
          <Col>
            <Form.Item label="ประสบการณ์ในการทำงาน" name="additionalInfo">
              <TextArea
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#C2D9BD',

                }}
                placeholder="กรุณากรอกข้อมูล"
                rows={6}
              />
            </Form.Item>
          </Col>
        </Form>
      </Modal>
    </>
  );
};

export default Massage;