import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";

import { Table } from "antd";

export const TableSize = styled.div`
  margin-top: 33px;
  width: 1245px;
`;
export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #C2D9BD;
    border: 1px solid #ccc;
    border: none;
  }

  .ant-table-tbody > tr > td {
    background-color: #edfee8;
    border-bottom: none;
    border: none;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #b3d3a2; 
  }
`;
