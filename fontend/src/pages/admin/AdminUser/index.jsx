//Import Tool Here
import React, { useState, useEffect } from "react";
import { Button, Input, Modal, Form, Row, Col, Select } from 'antd';

//Import Component Here
import AllCancelled from "./AdminTable/AllCancelled";
import AllAdmin from "./AdminTable/AllAdmin";

//Import Styled Here
import {
  AdminHeader,
  Iconbutton,
  Bar1,
  Bar2,
  AdminBody,
  TableFillter,
  Line1,
  Line2,
  MainTable,
  RoleSelect
} from "./AdminStyled";

//Import API Here
import {
  Get,
  Post,
  Update,
  Delete
} from "../../../service/http";

//Styled Function
const { useForm } = Form;

const Admin = () => {
  //Other Function
  const [activeMenu, setActiveMenu] = useState("เเอดมินทั้งหมด");
  const [modalVisible, setModalVisible] = useState(false);

  //Styled Funce
  const [form] = useForm();

  //Get Role Form API 
  const [roles, setRoles] = useState([]);
  const getRole = async () => {
    const result = await Get('/roles');
    if (result.status === 200) {
      setRoles(result.data.data);
      console.log('Roles1:', result.data.data);
    } else {
      // Handle error
    }
  };

  //Create Admin
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    roleID: null,
  });

  const createAdmin = async () => {
    console.log('Form Values:', data);

    const result = await Post('/admins', {
      firstname: data.  firstName,
      lastname: data.lastName,
      phonenumber: data.phoneNumber,
      roleID: data.roleID,
    });

    if (result.status === 200) {
      // Handle success
      console.log('Admin created successfully!');
    } else {
      // Handle error
      console.error('Error creating admin:', result.error);
    }
  };

  const handleTableFillterClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleAddAdminClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    createAdmin();

  };

  const handleModalCancel = () => {
    // Handle Cancel button click
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(value)
  };

  useEffect(() => {
    getRole();
  }, []);

  return (
    <>
      <AdminHeader>
        <h1 style={{ pointerEvents: 'none' }}>แอดมิน</h1>
        <Iconbutton onClick={handleAddAdminClick}>
          <Bar1></Bar1>
          <Bar2></Bar2>
          <p style={{ marginLeft: '63px' }}>เพิ่มแอดมิน</p>
        </Iconbutton>
      </AdminHeader>
      <AdminBody>
        <TableFillter
          onClick={() => handleTableFillterClick("เเอดมินทั้งหมด")}
          isActive={activeMenu === "เเอดมินทั้งหมด"}
        >
          เเอดมินทั้งหมด
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
            style={{ marginLeft: activeMenu === "เเอดมินทั้งหมด" ? "0px" : "125px" }}
          ></Line2>
        )}
        <MainTable>
          {activeMenu === "เเอดมินทั้งหมด" && <AllAdmin />}
          {activeMenu === "Cancelled" && <AllCancelled />}
        </MainTable>
      </AdminBody>

      <Modal
        title={
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
            เพิ่มข้อมูลแอดมิน
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
              <Form.Item label="ชื่อ" name="firstName">
                <Input
                  style={{
                    height: '40px',
                    borderRadius: '48px',
                    backgroundColor: '#C2D9BD',
                  }}
                  placeholder=""
                  name="firstName"
                  value={data.firstName}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="นามสกุล" name="lastName">
                <Input
                  style={{
                    height: '40px',
                    borderRadius: '48px',
                    backgroundColor: '#C2D9BD',
                  }}
                  placeholder=""
                  name="lastName"
                  value={data.lastName}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Role" name="role">
                <Input
                  style={{
                    height: '40px',
                    borderRadius: '48px',
                    backgroundColor: '#C2D9BD',
                    position: "absolute",
                    cursor: "pointer"
                  }}
                  placeholder=""
                  disabled={true}
                />
                <RoleSelect
                  placeholder="----- เลือก -----"
                  mode="combobox"
                  name="roleID"
                  value={data.roleID}
                  onChange={(value) => setData({ ...data, roleID: value })}
                >
                  {roles.map((role) => (
                    <Select.Option key={role.ID} value={role.ID}>
                      {role.Name}
                    </Select.Option>
                  ))}
                </RoleSelect>
              </Form.Item>

            </Col>
            <Col span={12}>
              <Form.Item label="เบอร์โทรศัพท์" name="phone">
                <Input
                  style={{
                    height: '40px',
                    borderRadius: '48px',
                    backgroundColor: '#C2D9BD',
                  }}
                  placeholder=""
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleInputChange}
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

export default Admin;
