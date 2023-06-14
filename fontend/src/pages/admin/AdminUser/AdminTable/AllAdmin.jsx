import React, { useState } from "react";
import { Modal, Form, Input, Button, Row, Col} from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";

import { TableSize, StyledTable } from "./TableStyle";

const AllAdmin = () => {
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
      firstname: "Thirawat",
      lastname: "Eusirwong",
      email: "john@example.com",
      position: "Manager",
      phone: "0800470816",
    },
    {
      key: "2",
      id: 2,
      firstname: "Pol",
      lastname: "pot",
      position: "Manager",
      phone: "0619192573",
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
      title: "ชื่อ",
      dataIndex: "firstname",
      key: "firstname",
      width: 200,
    },
    {
      title: "นามสกุล",
      dataIndex: "lastname",
      key: "lastname",
      width: 200,
    },
    {
      title: "ตำเเหน่ง",
      dataIndex: "position",
      key: "position",
      width: 150,
      align: "center",
    },
    {
      title: "เบอร์โทร",
      dataIndex: "phone",
      key: "phone",
      width: 100,
      align: "center",
    },
    {
      title: "เเก้ไขข้อมูล",
      dataIndex: "edit",
      key: "edit",
      width: 100,
      align: "center",
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          icon={<FormOutlined />}
          style={{
            border: "none",
            background: "transparent",
            color: "#000",
            boxShadow: "none",
          }}
        />
      ),
    },
    {
      title: "ลบ",
      dataIndex: "delete",
      key: "delete",
      width: 100,
      align: "center",
      render: (text, record) => (
        <Button
          onClick={() => handleDelete(record)}
          icon={<DeleteOutlined />}
          style={{
            border: "none",
            background: "transparent",
            color: "#000",
            boxShadow: "none",
          }}
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
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
            แก้ไขข้อมูลแอดมิน
          </h1>
        }
        visible={editModalVisible}
        onOk={handleSave}
        onCancel={handleCancel}
        destroyOnClose
        centered
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        bodyStyle={{ backgroundColor: '#fff', padding: '20px 20px 5px', borderRadius: '5px' }}
        width={650}
        footer={[
          <div key="footer-buttons" style={{ textAlign: 'center' }}>
            <Button
              key="submit"
              type="primary"
              onClick={handleSave}
              style={{
                borderRadius: '48px',
                backgroundColor: '#617A55',
                color: '#fff',
                height: '50px',
                width: '125px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#496841';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#617A55';
              }}
            >
              บันทึก
            </Button>
          </div>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="ชื่อ" name="firstname">
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
              <Form.Item label="นามสกุล" name="lastname">
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
              <Form.Item label="ตำแหน่งงานที่รับผิดชอบ" name="position">
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
              <Form.Item label="เบอร์โทร" name="phone">
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

export default AllAdmin;
