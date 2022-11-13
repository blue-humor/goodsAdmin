import React, {useRef, useState} from 'react';


import {Button, Image, Switch, message} from 'antd'

import {PlusOutlined} from '@ant-design/icons'

import {PageContainer,ProTable} from '@ant-design/pro-components'

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {

  // 表格的ref, 便于自定义操作表格
  const actionRef = useRef<any>()

  const getData = async (params:any) => {
    const response = await getGoods(params)
    return {
      data: response.data,
      success: true,
      total: response.meta.pagination.total,
    };
  }

 const columns = [
    {
      title: '商品图',
      dataIndex: 'cover_url',
      hideInSearch: true,
      render: (_, record) =>
        <Image
          width={64}
          src={record.cover_url}
          placeholder={
            <Image
              preview={false}
              src={record.cover_url}
              width={200}
            />
          }
        />
    },
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '价格',
      dataIndex: 'price',
      hideInSearch: true
    },
    {
      title: '库存',
      dataIndex: 'stock',
      hideInSearch: true
    },
    {
      title: '销量',
      dataIndex: 'sales',
      hideInSearch: true
    },
   

    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInSearch: true
    },
    {
      title: '操作',
      hideInSearch: true,
      render: (_: any, record: { id: string; }) => <a>编辑</a>
    },
  ]

  return (
    <>
      <PageContainer>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        request={(params = {}) => getData(params) }
        rowKey="id"
        search={ {
          labelWidth: 'auto',
        } }
        pagination={ {
          pageSize: 10,
        } }
        dateFormatter="string"
        headerTitle="用户列表"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => {}}>
            新建
          </Button>,
        ]}
        />
      </PageContainer>
    </>
  );
};

export default Index;
