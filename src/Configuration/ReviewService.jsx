import useFetch from "../components/Hooks/useFetch";
import DynamicUrl from "../components/Services/DynamicUrl";

const ReviewService = () => {
    const data = useFetch (`${DynamicUrl}/review/create`);
        return (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          );    
}

export default ReviewService;