import { MenuOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Badge } from 'antd';
import React, { useState } from 'react';
import { TableSize, StyledTable } from "./TableStyled";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
    align: "center",
  },
  {
    title: 'ชื่อ',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'นามสกุล',
    dataIndex: 'surname',
    width: 200,
  },
  {
    title: 'ทักษะการนวด',
    dataIndex: 'skill',
    width: 125,
    align: "center",
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
    width: 125,
    render: status => {
      let color;
      let text;
  
      switch (status) {
        case 'Idle':
          color = 'success';
          text = 'ว่าง';
          break;
        case 'Process':
          color = 'error';
          text = 'กำลังให้บริการ';
          break;
        default:
          color = 'default';
          text = 'ลาออก';
      }
  
      return <Badge status={color} text={text} />;
    },
  },
  {
    title: "วันที่ลบ",
    dataIndex: "deleteDate",
    key: "deleteDate",
    width: 100,
    align: "center",
  },
  
];

const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      },
    )?.replace(/translate3d\(([^,]+),/, 'translate3d(0,'),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  };
  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === 'sort') {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: 'none',
                  cursor: 'move',
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const handleEdit = (record) => {

  console.log("Edit clicked for record:", record);
};

const handleDelete = (record) => {

  console.log("Delete clicked for record:", record);
};

const AllCancelled = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      id: '1',
      name: 'Jim Green',
      surname: 'Jim',
      skill: 'นวดน้ำมัน',
      deleteDate: '03/01/2566'
    },
    {
      key: '2',
      id: '2',
      name: 'Joe Black',
      surname: 'Jim',
      skill: 'นวดหลัง',
      deleteDate: '03/01/2566'
    },
  ]);
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };
  return (
    
    <DndContext onDragEnd={onDragEnd}>
      <SortableContext
        // rowKey array
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
       <TableSize> 
        <StyledTable
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
        />
        </TableSize>
      </SortableContext>
    </DndContext>
    
  );
};

export default AllCancelled;