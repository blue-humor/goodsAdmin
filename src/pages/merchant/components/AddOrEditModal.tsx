import { useState, useEffect } from 'react';
import { Modal, message, Skeleton } from 'antd';

import ProForm, { ProFormText } from '@ant-design/pro-form';
// import { reqEditUser, reqAddUser } from '@/services/users'
import { merchant } from '@/utils/rules';

/**
 * 有疑问为什么不用传的row直接获取用户信息？其实也是可以的 || 但是也想试一试react hooks的具体使用 && 以及组件销毁
 *
 * @param {*} props
 * @return {*}
 */
const AddOrEditModal = (props: any) => {
  const { handleShowModal, isShowModal, actionRef, row } = props;
  const [initialValues, setinitialValues] = useState<any>(null);
  const title = row?.id ? '编辑用户' : '添加用户';

  // useEffect(async () => {
  //     if (row?.id) {
  //         setinitialValues({
  //             name: row.name,
  //             email: row.email,
  //         })
  //     }
  // }, [])

  /**
   * @param {*} params  表单验证接受的数据
   */
  const handleAddUser = async (params: any) => {
    // const res = await reqAddUser(params)
    // if (res == null) {
    //     message.success('添加用户成功')
    //     // antd pro 刷新列表（内置了一些约定方法）
    //     actionRef.current.reload()
    //     handleShowModal(false)
    // }
  };
  const handleUpdataUser = async (params: any) => {
    // const res = await reqEditUser(row.id, params)
    // if (res == null) {
    //     message.success('更新用户成功')
    //     // antd pro 刷新列表（内置了一些约定方法）
    //     actionRef.current.reload()
    //     handleShowModal(false)
    // }
  };
  return (
    <Modal
      title={title}
      visible={isShowModal}
      onCancel={() => handleShowModal(false)}
      footer={null}
      destroyOnClose={true}
    >
      {initialValues === null && row?.id ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        <ProForm
          initialValues={initialValues}
          onFinish={(values) => (row?.id ? handleUpdataUser(values) : handleAddUser(values))}
        >
          <ProFormText
            name="name"
            label="用户名称"
            placeholder="请输入用户名称"
            tooltip="最长输入10位"
            rules={merchant.title}
          />
          <ProFormText
            name="email"
            label="用户邮箱"
            placeholder="请输入用户邮箱"
            tooltip="最长输入24位"
            rules={merchant.title}
          />
          {row === null ? (
            <ProFormText.Password
              name="password"
              label="用户密码"
              placeholder="请输入用户密码"
              tooltip="最小输入6位"
              rules={merchant.title}
            />
          ) : (
            ''
          )}
        </ProForm>
      )}
    </Modal>
  );
};

export default AddOrEditModal;
