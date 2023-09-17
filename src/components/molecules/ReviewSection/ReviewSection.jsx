
import { useState, useEffect } from "react";
import axios from 'axios';




function ReviewSection() {
  
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las reseñas:', error);
      });
  }, []);

  return (
    <div>
      <h3 className="text-gray-700 font-sans text-lg font-semibold ml-5 mt-5">User Reviews:</h3>
      
      <ul className="w-96">
        {reviews.map(review => (
          <li key={review.id} className="ml-5 mr-4 w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            <h4 className="text-gray-700 text-base font-semibold">{review.title}</h4>
            <p className="text-gray-700 mr-5">{review.content}</p>
          </li>
        ))} 
      </ul>
     
    </div>
  );
}


  
  
  
  

export default ReviewSection