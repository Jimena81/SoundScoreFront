import {getReviews} from "../../../Configuration/ReviewService";



export default function Card(props) {
    const {data: reviews, loading}= getReviews();
  return (
      <div>
        <h2>Reviews</h2>
        {loading ? (<p>Loading...</p>):(
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        {reviews.map((reviews) => (
            <div key={reviews.id} className="card">
        
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"> {reviews.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {reviews.content}
        </p>
         </div>  
        ))}   
      </div>
    )};
  </div>
  )
}

  
 