import { getItem } from "../redux/Api/ClientApis/clientApi";
import { saveUserData } from "../redux/Slice/authSlice";
import store from "../redux/store";

const { dispatch } = store;

const checkLocalStorage = () => {
    const userData = getItem("userData");
    if (userData) {
        dispatch(saveUserData(userData));
    }
};

export default checkLocalStorage;
