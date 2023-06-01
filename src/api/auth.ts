import { axiosInstance } from '@/utils/axios';

// 列表
export function getData(type: number | string) {
    return axiosInstance.get(`/mock/getdata?type=${type}`);
}