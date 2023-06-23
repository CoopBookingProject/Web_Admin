import React, { useState } from "react";
import { Select, Modal, Input, Col, Row, TimePicker, DatePicker, Drawer, Radio, Space , Button} from "antd";
import bin from "../../../pic/bin.png";
import edit from "../../../pic/edit.png";
import { TableSize, StyledTable } from "./TableStyle";
import { MenuOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
const { Option } = Select;
const Allbook = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [gender, setGender] = useState('');
  const [massageLevel, setMassageLevel] = useState('');

  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleMassageLevelChange = (value) => {
    setMassageLevel(value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Game1",
      email: "john@example.com",
    },
    {
      key: "2",
      id: 2,
      name: "Game2",
      email: "jane@example.com",
    },
    {
      key: "3",
      id: 3,
      name: "Game3",
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
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      width: 440,
      render: (text, record) => (
        <Select
          defaultValue={text}
          style={{ width: 300 }}
          onChange={(value) => handlePositionChange(record, value)}
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
      width: 50,
      render: (text, record) => (
        <Button
          onClick={() => handleEditClick(record)}
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
      width: 50,
      render: (text, record) => (
        <Button
          onClick={() => handleDeleteRecord(record)}
          icon={<DeleteOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
  ];

  const handlePositionChange = (record, value) => {
    // Handle position change logic here
    console.log("Position changed for record:", record);
    console.log("New position:", value);
  };

  const handleEditClick = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const handleDeleteRecord = (record) => {
    // Handle record deletion logic here
    console.log("Delete record:", record);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              width: "650px",
            }}
          >
            {/* pop up */}
            <h2 style={{ marginLeft: "210px", marginBottom: '40px' }}>ดูรายละเอียดข้อมูลลูกค้า</h2>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div>ชื่อ</div>
                <div>
                  <Input
                    style={{
                      height: "40px",
                      width: "300px",
                      borderRadius: "48px",
                      backgroundColor: "#C2D9BD",
                      marginTop: "15px",
                    }}
                    placeholder=""
                    disabled // แก้ไขตรงนี้
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>นามสกุล</div>
                <div>
                  <Input
                    style={{
                      height: "40px",
                      width: "300px",
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
                <div style={{ marginTop: "15px" }}>เบอร์โทรศัพท์</div>
                <div>
                  <Input
                    style={{
                      height: "40px",
                      width: "300px",
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

                <div style={{ marginTop: "15px", marginLeft: "5px" }}>
                  ระดับนวด
                </div>
                <div>
                  <Space style={{ marginTop: '25px', marginLeft: '9px' }}>
                    <Radio.Group value={massageLevel} onChange={(e) => handleMassageLevelChange(e.target.value)} disabled>
                      <Radio value="เบา">เบา</Radio>
                      <Radio value="กลาง">กลาง</Radio>
                      <Radio value="หนัก">หนัก</Radio>
                    </Radio.Group>
                  </Space>
                </div>

              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <div style={{ marginTop: "15px" }}>เพศ</div>
                  <Space style={{ marginTop: '25px' }}>
                    <Radio.Group value={gender} onChange={(e) => handleGenderChange(e.target.value)} disabled>
                      <Radio value="เพศชาย">เพศชาย</Radio>
                      <Radio value="เพศหญิง">เพศหญิง</Radio>
                      <Radio value="เพศทางเลือก">เพศทางเลือก</Radio>
                    </Radio.Group>
                  </Space>
                </div>

              </Col>
              <Col span={12}>
                <div style={{ marginTop: "15px", marginLeft: '15px' }}>ปฏิทิน</div>
                <div>
                  <DatePicker
                    style={{
                      width: "300px",
                      height: "40px",
                      borderRadius: "48px",
                      backgroundColor: "#C2D9BD",
                      marginTop: "15px",
                      marginLeft: '15px'
                    }}
                    disabled
                  />
                </div>

              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div style={{ marginTop: "15px", marginLeft: '5px' }}>เวลา</div>
                <TimePicker
                  style={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "48px",
                    backgroundColor: "#C2D9BD",
                    marginTop: "15px",
                    marginLeft: '5px'
                  }}
                  placeholder=""
                  disabled
                />
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
                marginTop: '25px',
                cursor: 'pointer',
                color: '#fff',
              }}
              onClick={handleCloseModal}
            ><div key="footer-buttons" style={{ textAlign: "center" }}>
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
                ปิด
              </span>
            </Button>
          </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Allbook;
