import React from "react";

import { TableSize, StyledTable } from "./TableStyle";

const Cancelled = () => {
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Game1",
      email: "john@example.com",
      daycancelled: "08/06/66",
    },
    {
      key: "2",
      id: 2,
      name: "Game2",
      email: "jane@example.com",
      daycancelled: "08/06/66",
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
      title: "สถานะการจองคิว",
      dataIndex: "cancelled",
      key: "cancelled",
      width: 50,
      render: (text, record) => (
        <div style={{ color: "#FF0033",textAlign: "center"  }}>ยกเลิก</div>
      ),
    },
    {
      title: "วันที่ยกเลิกการจอง",
      dataIndex: "daycancelled",
      key: "daycancelled",
      width: 50,
      render: (text, record) => (
        <div style={{ textAlign: "center" }}>{text}</div>
      ),
    },
  ];

  return (
    <>
      <TableSize>
        <StyledTable dataSource={dataSource} columns={columns} />
      </TableSize>
    </>
  );
};

export default Cancelled;
