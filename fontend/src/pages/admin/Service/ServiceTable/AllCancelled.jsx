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
      servicename: "Service 3",
        period: [
          { value: "60", unit: "นาที" },
          { value: "90", unit: "นาที" },
        ],
        price: [
          { value: "1500", currency: "บาท" },
          { value: "1800", currency: "บาท" },
        ],
        category: "Body Care Treatment",
      deletedate: "03/01/2000",   //Use Datetime
    },
    {
      key: "2",
      id: 2,
      servicename: "Service 4",
        period: [
          { value: "120", unit: "นาที" },
          { value: "180", unit: "นาที" },
        ],
        price: [
          { value: "3000", currency: "บาท" },
          { value: "3600", currency: "บาท" },
        ],
        category: "Massage",
      deletedate: "04/15/1998",
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
      render: (periods) => (
        <span>
          {periods.map((period, index) => (
            <span key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "5px" }}>●</span>
              {period.value} {period.unit}
            </span>
          ))}
        </span>
      ),
    },
    {
      title: "ราคา",
      dataIndex: "price",
      key: "price",
      width: 125,
      
      render: (prices) => (
        <span>
          {prices.map((price, index) => (
            <span key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "5px" }}>●</span>
              {price.value} {price.currency}
            </span>
          ))}
        </span>
      ),
    },
    {
      title: "ประเภทบริการ",
      dataIndex: "category",
      key: "category",
      width: 150,
      
    },
    {
      title: "วันที่ลบ",
      dataIndex: "deletedate",
      key: "deletedate",
      width: 150,
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
