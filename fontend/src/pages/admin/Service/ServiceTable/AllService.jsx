import React, { useState } from "react";
import { Modal, Form, Input, Button, Row, Col, Select } from "antd";

import { FormOutlined, DeleteOutlined } from "@ant-design/icons";

import { TableSize, StyledTable } from "./TableStyle";



const AllService = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setEditedData(record);
    setEditModalVisible(true);
    form.setFieldsValue(record);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("Edited data:", values);
      setEditModalVisible(false);
      form.resetFields(); // Reset form fields after saving
    });
  };

  const handleCancel = () => {
    setEditModalVisible(false);
  };

  const handleDelete = (record) => {
    console.log("Delete clicked for record:", record);
  };

  const dataSource = [
    {
      key: "1",
      id: 1,
      servicename: "Service 1",
      period: ["60 นาที","120 นาที"],
      price: ["1500 บาท","3000 บาท"],
      category: "Body Care Treatment",
    },
    {
      key: "2",
      id: 2,
      servicename: "Service 2",
      period: ["120 นาที"],
      price: ["3000 บาท"],
      category: "Massage",
    },
    // Add more data objects as needed
    ];
  
    const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
      align: "center",
    },
    {
      title: "ชื่อเซอร์วิส",
      dataIndex: "servicename",
      key: "servicename",
      width: 200,
      align: "center",
    },
    {
      title: "ระยะเวลา",
      dataIndex: "period",
      key: "period",
      width: 125,
      render: (text, record) => (
        <>
          {record.period.map((item, index) => (
            <div key={index}>
              <span style={{ display: "inline-block", marginRight: "4px" }}>●</span>
              <span>{item}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "ราคา",
      dataIndex: "price",
      key: "price",
      width: 125,
      align: "center",
      render: (text, record) => (
        <>
          {record.price.map((item, index) => (
            <div key={index}>
              <span style={{ display: "inline-block", marginRight: "4px" }}>●</span>
              <span>{item}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      title: "ประเภทบริการ",
      dataIndex: "category",
      key: "category",
      width: 150,
      align: "center",
    },
    {
      title: 'แก้ไขข้อมูล',
      dataIndex: 'edit',
      key: 'edit',
      width: 75,
      align: 'center',
      render: (_, record) => (
        <Button
          onClick={() => handleEdit(record)}
          icon={<FormOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
    // Delete column
    {
      title: 'ลบ',
      dataIndex: 'delete',
      key: 'delete',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Button
          onClick={() => handleDelete(record)}
          icon={<DeleteOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
  ];
  
  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>
      {editedData && (
        <Modal
        title={
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
            แก้ไขข้อมูลเซอร์วิส
          </h1>
        }
          visible={editModalVisible}
          onOk={handleSave}
          onCancel={handleCancel}
          destroyOnClose
          centered
          maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          bodyStyle={{
            backgroundColor: "#fff",
            padding: "20px 20px 5px",
            borderRadius: "5px",
          }}
          width={650}
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
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item label="ชื่อเซอร์วิส" name="servicename">
                  <Input
                    style={{
                      height: "40px",
                      borderRadius: "48px",
                      backgroundColor: "#C2D9BD",
                    }}
                    placeholder=""
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item label="ระยะเวลา" name="period">
  <Input
    style={{
      height: "40px",
      borderRadius: "48px",
      backgroundColor: "#C2D9BD",
    }}
    value={editedData.period} // Set the initial value from editedData
    onChange={(e) => {
      const updatedData = { ...editedData, period: e.target.value };
      setEditedData(updatedData);
    }}
  />
</Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item label="ราคา" name="price">
  <Input
    style={{
      height: "40px",
      borderRadius: "48px",
      backgroundColor: "#C2D9BD",
    }}
    value={editedData.price} // Set the initial value from editedData
    onChange={(e) => {
      const updatedData = { ...editedData, price: e.target.value };
      setEditedData(updatedData);
    }}
  />
</Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="ประเภทบริการ" name="category">
                  <Input
                    style={{
                      height: "40px",
                      borderRadius: "48px",
                      backgroundColor: "#C2D9BD",
                    }}
                    placeholder=""
                  />
                </Form.Item>
              </Col>
              {/* Add more form fields here */}
            </Row>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AllService;
