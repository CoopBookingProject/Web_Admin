import React, { useState } from 'react';
import { Button, Badge, Input, Modal, Form, Row, Col, Radio } from 'antd';
import { MenuOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableSize, StyledTable } from './TableStyled';

const { TextArea } = Input;

const EditModal = ({ visible, record, onCancel, onOk }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onOk({ ...record, ...values });
    });
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
      destroyOnClose
      centered
      maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      bodyStyle={{ backgroundColor: '#fff', padding: '20px 20px 5px', borderRadius: '5px' }}
      width={650}
      title={
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
          แก้ไขข้อมูลผู้นวด
        </h1>
      }
      footer={[
        <div key="footer-buttons" style={{ textAlign: 'center' }}>
          <Button
    key="submit"
    type="primary"
    onClick={handleOk}
    style={{
    borderRadius: '48px',
    backgroundColor: '#617A55',
    color: '#fff',
    height: '50px',
    width: '125px',
    transition: 'background-color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#496841';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#617A55';
  }}
>
  บันทึก
</Button>
        </div>
      ]}
    >
      {/* Modal content */}
      <Form form={form} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="ชื่อ" name="name">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="นามสกุล" name="surname">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="อายุ" name="age">
              <Input
                style={{
                  height: '40px',
                  borderRadius: '48px',
                  backgroundColor: '#C2D9BD',
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item label="เพศ" name="gender">
          <Radio.Group>
            <Radio value="male">ชาย</Radio>
            <Radio value="female">หญิง</Radio>
            <Radio value="other">เพศทางเลือก</Radio>
          </Radio.Group>
        </Form.Item>
        </Col>
      
          {/* Add more form fields here */}
        </Row>
        <Col>
        <Form.Item label="ประสบการณ์ในการทำงาน" name="additionalInfo">
          <TextArea
            style={{
              borderRadius: '8px',
              backgroundColor: '#C2D9BD',
              
            }}
            placeholder="กรุณากรอกข้อมูล"
            rows={6}
          />
        </Form.Item>
        </Col>
      </Form>
    </Modal>
  );
};

const SortableRow = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props['data-row-key'] });

  const style = {
    ...props.style,
    transform: CSS.Transform.toString(transform),
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

const AllMassage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      id: '1',
      name: 'Jim',
      surname: 'Jim',
      skill: 'นวดน้ำมัน',
      status: 'Process',
    },
    {
      key: '2',
      id: '2',
      name: 'Joe',
      surname: 'Jim',
      skill: 'นวดหลัง',
      status: 'Idle',
    },
  ]);

  const handleEditSave = (editedRecord) => {
    setDataSource((previousDataSource) =>
      previousDataSource.map((record) => (record.key === editedRecord.key ? editedRecord : record))
    );
    handleCloseModal();
  };

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  const handleEditClick = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (record) => {
    console.log('Delete clicked for record:', record);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50,
      align: 'center',
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
      align: 'center',
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      width: 125,
      render: (status) => {
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
            text = 'ออฟไลน์';
        }

        return <Badge status={color} text={text} />;
      },
    },
    {
      title: 'แก้ไขข้อมูล',
      dataIndex: 'edit',
      key: 'edit',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Button
          onClick={() => handleEditClick(record)}
          icon={<FormOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
    {
      title: 'ลบ',
      dataIndex: 'delete',
      key: 'delete',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Button
          onClick={() => handleDelete(record)}
          icon={<DeleteOutlined />}
          type="text"
          style={{ color: '#000' }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'sort',
      width: 50,
      align: 'center',
      render: (_, record) => (
        <MenuOutlined
          style={{
            touchAction: 'none',
            cursor: 'move',
          }}
        />
      ),
    },
  ];

  return (
    <TableSize>
    <DndContext onDragEnd={onDragEnd}>
      <SortableContext items={dataSource} strategy={verticalListSortingStrategy}>
        
      <StyledTable
  components={{
    body: {
      row: SortableRow,
    },
  }}
  dataSource={dataSource}
  columns={columns}
  pagination={{
    
    
    
  }}
/>
      </SortableContext>

      <EditModal
  visible={showModal}
  record={selectedRecord}
  onCancel={handleCloseModal}
  onOk={handleEditSave}
/>
    </DndContext>
  </TableSize>
  );
};

export default AllMassage;