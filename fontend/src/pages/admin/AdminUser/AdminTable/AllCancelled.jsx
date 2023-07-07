import React from "react";

import { Select, Button } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";

import { TableSize, StyledTable } from "./TableStyle";


const { Option } = Select;

const AllCancelled = () => {
  const dataSource = [
    {
      key: "1",
      id: 1,
      firstname: "Thirawat",
      lastname: "Eusirwong",
      position: "Manager",
      phone: "0800470816",
      deletedate: "03/01/2000",   //Use Datetime
    },
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
      title: "วันที่ลบ",
      dataIndex: "deletedate",
      key: "deletedate",
      width: 200,
      align: "center",
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

export default AllCancelled;
