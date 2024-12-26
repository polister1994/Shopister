import { useNavigate } from "react-router-dom";

const useNavigateTo = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return handleClick;
};

export default useNavigateTo;