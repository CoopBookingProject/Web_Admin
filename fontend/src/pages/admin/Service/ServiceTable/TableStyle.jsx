import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";

import { Table } from "antd";

export const TableSize = styled.div`
  margin-top: 33px;
  width: 1244px;
`;
export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #C2D9BD;
    border: 1px solid #ccc;
    border: none;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    background-color: #edfee8;
    border: none;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #f7fff1 !important;
  }

  .ant-table-row {
    height: 70px !important; // ปรับค่าเป็นขนาดที่คุณต้องการ
  }

  
`;