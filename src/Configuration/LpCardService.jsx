import useFetch from "../components/Hooks/useFetch";
import DynamicUrl from "../components/Services/DynamicUrl";

const LpCardService = () => {
    const data = useFetch (`${DynamicUrl}/albums`);
        return data;    
}

export default LpCardService;