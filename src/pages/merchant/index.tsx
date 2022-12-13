import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import { useRef } from 'react';

import { reqTableList } from '@/services/merchant';

type TableListItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<TableListItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    align: 'center',
    dataIndex: 'storeName',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },

  {
    title: '创建时间',
    dataIndex: 'created_at',
    search: false,
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  const handleTable = async (params: API.ParamsType) => {
    const res = await reqTableList(params);
    if (res?.code === 200) {
      const { total, list } = res.data;
      return {
        data: list,
        // success 请返回 true，
        // 不然 table 会停止解析数据，即使有数据
        success: true,
        // 不传会使用 data 的长度，如果是分页一定要传
        total,
      };
    }
  };

  return (
    <ProTable<TableListItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter): Promise<any> => handleTable(params)}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => {}}>
          新建
        </Button>,
      ]}
    />
  );
};
