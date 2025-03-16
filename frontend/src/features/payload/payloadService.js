import axiosInstance from "../../plugins/interceptor";

// Get payload data
const getPayloads = async () => {
    try {
        const response = await axiosInstance.get("payloads");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const payloadService = {
    getPayloads,
};

export default payloadService;
