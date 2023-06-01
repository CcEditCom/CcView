import { axiosInstance } from '@/utils/axios';

// 创建用户
export function createUser() {
    return axiosInstance.post(`/api/user/creat`);
}

// 获取用户列表
export function getUserList(query = {}) {
    return axiosInstance.post(`/api/user/findAll`, query);
}
