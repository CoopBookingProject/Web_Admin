import React, { useState } from "react";
import { Modal, Col, Row, Input, Button, Radio, Space } from "antd";
import bin from "../../../pic/bin.png";
import edit from "../../../pic/edit.png";
import { TableSize, StyledTable } from "./TableStyled";

const AllPromotion = () => {
  const [sizeType, setSizeType] = useState("");
  const { TextArea } = Input;
  const dataSource = [
    {
      key: "1",
      id: 1,
      Promotion: "รายละเอียดโปรโมชัน",
      email: "john@example.com",
    },
    {
      key: "2",
      id: 2,
      Promotion: "รายละเอียดโปรโมชัน",
      email: "jane@example.com",
    },
    {
      key: "3",
      id: 3,
      Promotion: "รายละเอียดโปรโมชัน",
      email: "jane@example.com",
    },
    // Add more data objects as needed
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "โปรโมชัน",
      dataIndex: "Promotion",
      key: "Promotion",
      width: 300,
    },
    {
      title: "การบริการ",
      dataIndex: "role",
      key: "role",
      width: 200,
      render: (text, record) => <div> ● wax</div>,
    },
    {
      title: "แก้ไขข้อมูล",
      dataIndex: "role",
      key: "role",
      width: 100,
      align: "center",
      render: (text, record) => (
        <div>
          <img
            src={edit}
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
            }}
            onClick={() => handleEditClick(record)}
            alt="edit"
          />
        </div>
      ),
    },
    {
      title: "ลบ",
      dataIndex: "role",
      key: "role",
      width: 100,
      align: "center",
      render: (text, record) => (
        <div>
          <img
            src={bin}
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
            }}
            onClick={() => handleDeleteRecord(record)}
            alt="delete"
          />
        </div>
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEditClick = (record) => {
    setIsModalVisible(true);
  };

  const handleDeleteRecord = (record) => {
    // Handle delete logic here
  };

  const handleSave = () => {
    setIsModalVisible(false);
    saveData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const saveData = () => {
    console.log("Data saved!");
  };

  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>

      
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        width="750px"
        footer={null}
      >
        <h2 style={{ marginLeft: "265px" }}>แก้ไขข้อมูลโปรโมชัน</h2>
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
              onChange={(e) => setSizeType(e.target.value)}
              value={sizeType}
            >
              <Radio style={{ marginTop: "15px" }} value="ลดแบบราคาเต็ม">
                ลดแบบราคาเต็ม
              </Radio>
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
            </Radio.Group>
          </Col>
          <Col span={12}>
            <Radio.Group
              onChange={(e) => setSizeType(e.target.value)}
              value={sizeType}
            >
              <Radio style={{ marginTop: "15px" }} value="ลดแบบเปอร์เซ็นต์">
                ลดแบบเปอร์เซ็นต์
              </Radio>
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
            </Radio.Group>
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
        <div
          style={{
            marginLeft: "300px",
            fontSize: "20px",
            textAlign: "center",
            width: "100px",
            height: "35px",
            borderRadius: "48px",
            backgroundColor: "#617A55",
            marginTop: "25px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={handleSave} // เพิ่ม onClick ที่ปุ่ม "บันทึก"
        >
          บันทึก
        </div>
      </Modal>
    </>
  );
};

export default AllPromotion;