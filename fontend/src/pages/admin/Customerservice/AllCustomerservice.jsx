import React, { useState } from "react";
import { TableSize, StyledTable } from "./TableStyle";
import bin from "../../../pic/bin.png";
import edit from "../../../pic/edit.png";
import { MenuOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  TimePicker,
  Select,
  Button,
  Modal,
  Col,
  Row,
  Input,
  AutoComplete,
  Radio,
  Space,
} from "antd";

const AllCustomerservice = () => {
  const [massageLevel, setMassageLevel] = useState("");
  const { Option } = Select;
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      key: "2",
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      key: "3",
      id: 3,
      name: "Smith Jane",
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
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      width: 400,
    },
    {
      title: "เข้ารับบริการ",
      dataIndex: "role",
      key: "role",
      width: 300,
      render: (text, record) => (
        <TimePicker
          style={{ width: "250px" }}
          defaultValue={record.serviceTime}
          onChange={(time) => handleServiceTimeChange(record, time)}
          placeholder="----- เวลา -----"
        />
      ),
    },
    {
      title: "สถานะ",
      dataIndex: "role",
      key: "role",
      width: 300,
      render: (text, record) => (
        <Select
          defaultValue={text}
          style={{ width: 250 }}
          onChange={(value) => handlePositionChange(record, value)}
          placeholder="----- เลือก -----"
        >
          <Option value="จองคิวสำเร็จ">จองคิวสำเร็จ</Option>
          <Option value="รอรับบริการ">รอรับบริการ</Option>
          <Option value="ยกเลิกการจองคิว">ยกเลิกการจองคิว</Option>
        </Select>
      ),
    },
    {
      title: "ดูข้อมูล",
      dataIndex: "role",
      key: "role",
      width: 100,
      align: "center",
      render: (text, record) => (
        <Button
          onClick={() => showModal(record)}
          icon={<FormOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
    {
      title: "ลบ",
      dataIndex: "role",
      key: "role",
      width: 100,
      align: "center",
      render: (text, record) => (
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


      <Modal
        visible={isModalOpen}
        onCancel={handleCancel}
        width="750px"
        footer={null}
      >
        <h1 style={{ marginLeft: "200px" }}>ดูรายละเอียดข้อมูลลูกค้า</h1>
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
                disabled
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
                disabled
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
              disabled
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
                disabled
              >
                <Option value="option1">จองคิวสำเร็จ</Option>
                <Option value="option2">รอรับบริการ</Option>
                <Option value="option3">ยกเลิกการจองคิว</Option>
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
                disabled
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
                disabled
              >
                <Option value="option1">โปรโมชัน1</Option>
                <Option value="option2">โปรโมชัน2</Option>
                <Option value="option3">โปรโมชัน3</Option>
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
                disabled
              />
            </div>
          </Col>
          <Col span={12}>

            <div style={{ marginTop: "15px", marginLeft: "10px" }}>
              ระดับนวด
            </div>
            <div>
              <Space style={{ marginTop: '25px', marginLeft: '15px' }}>
                <Radio.Group value={massageLevel} onChange={(e) => handleMassageLevelChange(e.target.value)} disabled>
                  <Radio value="เบา">เบา</Radio>
                  <Radio value="กลาง">กลาง</Radio>
                  <Radio value="หนัก">หนัก</Radio>
                </Radio.Group>
              </Space>
            </div>
          </Col>
        </Row>
        <div
          style={{
            marginLeft: '300px',
            fontSize: '20px',
            textAlign: 'center',
            width: '100px',
            height: '35px',
            borderRadius: '48px',
            backgroundColor: '#617A55',
            marginTop: '15px',
            cursor: 'pointer',
            color: '#fff',
          }}
          onClick={handleCloseModal}
        >
          <div>ปิด</div>
        </div>
      </Modal>
    </>
  );
};

export default AllCustomerservice;

