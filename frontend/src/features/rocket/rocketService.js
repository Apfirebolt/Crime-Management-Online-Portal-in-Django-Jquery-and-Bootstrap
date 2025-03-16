import axiosInstance from "../../plugins/interceptor";

// Get rocket data
const getRockets = async () => {
    try {
        const response = await axiosInstance.get("rockets");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const rocketService = {
    getRockets,
};

export default rocketService;
