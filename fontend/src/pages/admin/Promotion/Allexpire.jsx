import React from "react";

import { TableSize, StyledTable } from "./TableStyled";

const Allexpire = () => {
  const dataSource = [
    {
      key: "1",
      id: 1,
      Promotion: "รายละเอียดโปรโมชั่น",
      email: "john@example.com",
    },
    {
      key: "2",
      id: 2,
      Promotion: "รายละเอียดโปรโมชั่น",
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
      title: "โปรโมชั่น",
      dataIndex: "Promotion",
      key: "Promotion",
      width: 400,
    },
    {
      title: "สถานะ",
      dataIndex: "role",
      key: "role",
      width: 100,
      align: "center",
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ color: '#FF0033' }}>หมดอายุ</div>
        </div>
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

export default Allexpire;
