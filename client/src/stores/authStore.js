import { create } from 'zustand';
import Cookie from 'js-cookie';
import axiosInstance from '../plugins/interceptor';

const useAuthStore = create((set) => ({
    user: null,
    login: async (email, password) => {
        try {
            const response = await axiosInstance.post('login', { email, password });
            const { data } = response;
            Cookie.set('user', data);
            set({ user: data });
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    register: async (userData) => {
        try {
            const response = await axiosInstance.post('register', userData);
            const { data } = response;
            Cookie.set('user', data);
            set({ user: data });
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    logout: () => set({ user: null }),
}));

export default useAuthStore;