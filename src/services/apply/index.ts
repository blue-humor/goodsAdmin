import request from '@/utils/request';

export async function reqTableList(data: API.ParamsType, options?: { [key: string]: any }) {
  return request('/v1/pc/registerList', {
    method: 'post',
    data,
    ...(options || {}),
  });
}
