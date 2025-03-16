import axiosInstance from "../../plugins/interceptor";

// Get ship data
const getShips = async () => {
    try {
        const response = await axiosInstance.get("ships");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const shipService = {
    getShips,
};

export default shipService;
