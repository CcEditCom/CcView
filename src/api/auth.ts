import { axiosInstance } from '@/utils/axios';

// 图形验证码
export function getCaptcha() {
    return axiosInstance.get(`/api/auth/captcha`);
}

// 登录
export function login(data: {
    username: string,
    password: string
}) {
    return axiosInstance.post(`/api/auth/login`, data);
}

// 注销
export function logout() {
    return axiosInstance.get(`/api/auth/logout`);
}