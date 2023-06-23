import React, { useState } from "react";
import AllPromotion from "./AllPromotion";
import Allexpire from "./Allexpire";
import { Modal, Col, Row, Input, Button, Radio, Space } from "antd";
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
} from "./PromotionStyled";

const Promotion = () => {
  const [activeMenu, setActiveMenu] = useState("โปรโมชัน");
  const { TextArea } = Input;
  const [size, setSize] = useState("small");
  const handleTableFillterClick = (menu) => {
    setActiveMenu(menu);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSave = () => {
    setIsModalVisible(false);
    // เพิ่มฟังก์ชัน saveData() ที่ต้องการให้ทำงานเมื่อคลิกปุ่ม "บันทึก"
    saveData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const saveData = () => {
    // ฟังก์ชันที่จะทำงานเมื่อคลิกปุ่ม "บันทึก"
    // คุณสามารถเพิ่มโค้ดเพื่อทำการบันทึกข้อมูลตามต้องการได้ที่นี่
    console.log("Data saved!"); // เพียงแค่เพิ่มข้อความนี้เป็นตัวอย่าง
  };

  return (
    <>
      <Header>
        <h1>โปรโมชัน</h1>
        <Iconbutton onClick={showModal}>
          <Bar1></Bar1>
          <Bar2></Bar2>
          <p style={{ marginLeft: "63px" }}>เพิ่มโปรโมชัน</p>
        </Iconbutton>
      </Header>

      <Body>
        <TableFillter
          onClick={() => handleTableFillterClick("โปรโมชัน")}
          isActive={activeMenu === "โปรโมชัน"}
        >
          โปรโมชัน
        </TableFillter>
        <TableFillter
          onClick={() => handleTableFillterClick("หมดอายุ")}
          isActive={activeMenu === "หมดอายุ"}
        >
          หมดอายุ
        </TableFillter>
        <Line1></Line1>
        {activeMenu && (
          <Line2
            style={{
              marginLeft: activeMenu === "โปรโมชัน" ? "0px" : "110px",
            }}
          ></Line2>
        )}
        <MainTable>
          {activeMenu === "โปรโมชัน" && <AllPromotion />}
          {activeMenu === "หมดอายุ" && <Allexpire />}
        </MainTable>
      </Body>

      {/* pop up */}
      <Modal
        visible={isModalVisible}
        onOk={handleSave}
        onCancel={handleCancel}
        width="750px"
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
      >
        <h2 style={{ marginLeft: "265px" }}>เพิ่มข้อมูลโปรโมชัน</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div>ชื่อโปรโมชัน</div>
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
            <div>sale price</div>
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
            <Radio.Group
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <Radio style={{ marginTop: "15px" }} value="ลดแบบราคาเต็ม">
                ลดแบบราคาเต็ม
              </Radio>
            </Radio.Group>
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
            <Radio.Group
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <Radio style={{ marginTop: "15px" }} value="ลดแบบเปอร์เซ็นต์">
                ลดแบบเปอร์เซ็นต์
              </Radio>
            </Radio.Group>
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

        <Row>
          <Col span={24}>
            <div style={{ marginTop: "15px" }}>รายละเอียดของโปรโมชัน</div>
            <div style={{ marginTop: "15px" }}>
              <TextArea
                style={{ backgroundColor: "#C2D9BD" }}
                rows={4}
                placeholder="กรุณากรอก"
                maxLength={1000}
              />
            </div>
          </Col>
        </Row>
        
      </Modal>
    </>
  );
};

export default Promotion;
