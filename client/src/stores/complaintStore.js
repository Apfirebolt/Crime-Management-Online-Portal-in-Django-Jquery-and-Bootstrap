import { create } from "zustand";
import Cookie from "js-cookie";
import axiosInstance from "../plugins/interceptor";

const useComplaintStore = create((set) => ({
  complaint: null,
  complaints: [],
  fetchComplaints: async () => {
    try {
      const token = Cookie.get("token");
      const response = await axiosInstance.get("complaints", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      set({ complaints: data });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  fetchComplaint: async (id) => {
    try {
      const token = Cookie.get("token");
      const response = await axiosInstance.get(`complaints/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      set({ complaint: data });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  createComplaint: async (complaintData) => {
    try {
      const token = Cookie.get("token");
      const response = await axiosInstance.post("complaints", complaintData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      set((state) => ({ complaints: [...state.complaints, data] }));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  updateComplaint: async (id, complaintData) => {
    try {
      const token = Cookie.get("token");
      const response = await axiosInstance.put(
        `complaints/${id}`,
        complaintData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { data } = response;
      set((state) => ({
        complaints: state.complaints.map((complaint) =>
          complaint.id === id ? data : complaint
        ),
      }));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  deleteComplaint: async (id) => {
    try {
      const token = Cookie.get("token");
      const response = await axiosInstance.delete(`complaints/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set((state) => ({
        complaints: state.complaints.filter((complaint) => complaint.id !== id),
      }));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
}));

export default useComplaintStore;
