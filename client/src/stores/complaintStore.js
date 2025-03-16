import { create } from "zustand";
import axiosInstance from "../plugins/interceptor";
import useAuthStore from "./authStore"; // Import useAuthStore

const useComplaintStore = create((set) => ({
  complaint: null,
  complaints: {},
  loading: false, // Add loading state
  error: null,   // Add error state

  fetchComplaints: async () => {
    set({ loading: true, error: null });
    try {
      const { user } = useAuthStore.getState(); // Access user from useAuthStore
      if (!user) {
        throw new Error("User not authenticated");
      }

      const response = await axiosInstance.get("complaints", {
        headers: { Authorization: `Bearer ${user.access}` }, // Use user.access
      });
      const { data } = response;
      set({ complaints: data, loading: false });
      return response;
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Failed to fetch complaints", loading: false });
      return error;
    }
  },

  fetchComplaint: async (id) => {
    set({ loading: true, error: null });
    try {
      const { user } = useAuthStore.getState();
      if (!user) {
        throw new Error("User not authenticated");
      }
      const response = await axiosInstance.get(`complaints/${id}`, {
        headers: { Authorization: `Bearer ${user.access}` },
      });
      const { data } = response;
      set({ complaint: data, loading: false });
      return response;
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Failed to fetch complaint", loading: false });
      return error;
    }
  },

  createComplaint: async (complaintData) => {
    set({ loading: true, error: null });
    try {
      const { user } = useAuthStore.getState();
      if (!user) {
        throw new Error("User not authenticated");
      }
      const response = await axiosInstance.post("complaints/", complaintData, {
        headers: { Authorization: `Bearer ${user.access}` },
      });
      if (response && response.status === 201) {
        set({ loading: false });
      }
      return response;
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Failed to create complaint", loading: false });
      return error;
    }
  },

  updateComplaint: async (id, complaintData) => {
    set({ loading: true, error: null });
    try {
      const { user } = useAuthStore.getState();
      if (!user) {
        throw new Error("User not authenticated");
      }
      const response = await axiosInstance.put(
        `complaints/${id}`,
        complaintData,
        {
          headers: { Authorization: `Bearer ${user.access}` },
        }
      );
      const { data } = response;
      set((state) => ({
        complaints: state.complaints.map((complaint) =>
          complaint.id === id ? data : complaint
        ),
        loading: false,
      }));
      return response;
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Failed to update complaint", loading: false });
      return error;
    }
  },

  deleteComplaint: async (id) => {
    set({ loading: true, error: null });
    try {
      const { user } = useAuthStore.getState();
      if (!user) {
        throw new Error("User not authenticated");
      }
      console.log('user access', user.access);
      const response = await axiosInstance.delete(`complaints/${id}/`, {
        headers: { Authorization: `Bearer ${user.access}` },
      });
      if (response && response.status === 204) {
        set({ loading: false });
      }
      return response;
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Failed to delete complaint", loading: false });
      return error;
    }
  },
}));

export default useComplaintStore;