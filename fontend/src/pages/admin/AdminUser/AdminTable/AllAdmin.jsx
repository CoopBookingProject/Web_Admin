import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Get } from "../../../../service/http"

import { TableSize, StyledTable } from "./TableStyle";

const AllAdmin = () => {

//
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [admin, setAdmin] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    getAdmin();
  }, []);

  //Get Admin Form API 
  const [editedData, setEditedData] = useState(null);
  const getAdmin = async () => {
    const result = await Get('/admins');
    if (result.status === 200) {
      setAdmin(result.data.data);
      console.log('Admins1:', result.data.data);
    } else {
      // Handle error
    }
  };


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

  useEffect(() => {
    getAdmin();
  }, []);

  const dataSource = admin;

  const columns = [
    {
      title: "ID",
      dataIndex: "ID", // Use "ID" instead of "id"
      key: "ID", // Use "ID" instead of "id"
      width: 50,
      align: "center",
    },
    {
      title: "ชื่อ",
      dataIndex: "FirstName", // Use "FirstName" instead of "firstname"
      key: "FirstName", // Use "FirstName" instead of "firstname"
      width: 200,
    },
    {
      title: "นามสกุล",
      dataIndex: "LastName", // Use "LastName" instead of "lastname"
      key: "LastName", // Use "LastName" instead of "lastname"
      width: 200,
    },
    {
      title: "ตำเเหน่ง",
      dataIndex: "Role", // Use "Role.Name" instead of "position"
      key: "Role", // Use "Role.Name" instead of "position"
      width: 150,
      align: "center",
      render: (role) => role && role.Name,
    },
    {
      title: "เบอร์โทร",
      dataIndex: "PhoneNumber", // Use "PhoneNumber" instead of "phone"
      key: "PhoneNumber", // Use "PhoneNumber" instead of "phone"
      width: 100,
      align: "center",
    },
    {
      title: "แก้ไขข้อมูล",
      dataIndex: "edit",
      key: "edit",
      width: 100,
      align: "center",
      render: (_, record) => (
        <Button
          onClick={() => handleEdit(record)}
          icon={<FormOutlined />}
          type="text"
          style={{ color: "#000" }}
        />
      ),
    },
    {
      title: "ลบ",
      dataIndex: "delete",
      key: "delete",
      width: 100,
      align: "center",
      render: (_, record) => (
        <Button
          onClick={() => handleDelete(record)}
          icon={<DeleteOutlined />}
          type="text"
          style={{ color: "#000" }}
        />
      ),
    },
  ];

  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>
      <Modal
        title={
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            แก้ไขข้อมูลแอดมิน
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
              <Form.Item label="ชื่อ" name="firstname">
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
              <Form.Item label="นามสกุล" name="lastname">
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
              <Form.Item
                label="ตำแหน่งงานที่รับผิดชอบ"
                name="position"
              >
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
              <Form.Item label="เบอร์โทร" name="phone">
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
    </>
  );
};

export default AllAdmin;