import React from "react";

import { Select, Button } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";

import { TableSize, StyledTable } from "./TableStyle";


const { Option } = Select;

const AllAdmin = () => {
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


  const handleEdit = (record) => {

    console.log("Edit clicked for record:", record);
  };

  const handleDelete = (record) => {

    console.log("Delete clicked for record:", record);
  };

  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>
    </>
  );
};

export default AllAdmin;
