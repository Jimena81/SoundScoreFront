
import { useState, useEffect } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

function Review() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState(null);
  const [rating, setRating] = useState(0); // Estado para la puntuación
  const navigateTo = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const requestOptions = {
        headers: {
          Authorization: `Bearer ${authToken}`, 
        },
      };

      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/user', requestOptions); 
          setUser(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error al obtener la información del usuario', error);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const reviewData = {
        title,
        content,
        rating, 
        user_name: user ? user.username : 'Unknown User',
      };
      
      const response = await axios.post('http://localhost:8000/api/reviews', reviewData);
      console.log('Review posted', response.data); 
      navigateTo("/AllReviews");
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer ${
            i <= rating ? 'text-yellow-600' : 'text-gray-400'
          }`}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="text-gray-500 mt-2 flex justify-center ">
           {renderStars()} 
        </div>
      <h3 className='ml-5 mt-8 mb-3'>Create a Review:</h3>
      <form className='flex flex-col gap-5 px-8'>
        <input name="title" type='text' placeholder='Title' value={title} onChange={(event) => setTitle(event.target.value)} />
        <input name="content" type='text' placeholder='Content' value={content} onChange={(event) => setContent(event.target.value)} />
        
        <p className="text-gray-500 mt-2">Username: {user ? user.name : 'Loading...'}</p>
        <button onClick={handleSubmit} className="bg-custome inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg_primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          Create
        </button>
      </form>
    </div>
  );
}

export default Review;
