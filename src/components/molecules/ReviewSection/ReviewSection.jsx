import  { useState, useEffect } from "react";
import axios from 'axios';
import sound from '../../../assets/images/Sound.png'
import back from '../../../assets/images/back.png'
function generateStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-lg ${
          i <= rating ? 'text-yellow-500' : 'text-gray-400'
        }`}
      >
        ★
      </span>
    );
  }
  return stars;
}
function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtener las revisiones
    axios.get('http://localhost:8000/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las reseñas:', error);
      });
  }, []);

  useEffect(() => {
    // Función para obtener la información del usuario autenticado
    const fetchUserData = async () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        const requestOptions = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        };

        try {
          const response = await axios.get('http://localhost:8000/api/user', requestOptions);
          setUser(response.data);
        } catch (error) {
          console.error('Error al obtener la información del usuario:', error);
        }
      }
    };

    // Llamar a la función para obtener la información del usuario autenticado
    fetchUserData();
  }, []);

  useEffect(() => {
    // Función para obtener los nombres de usuario de todos los usuarios
    const fetchUserNames = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        const userNamesMap = {};

        response.data.forEach(user => {
          userNamesMap[user.id] = user.name;
        });

        setReviews(reviews => {
          return reviews.map(review => ({
            ...review,
            userName: userNamesMap[review.user_id] || 'Unknown User',
          }));
        });
      } catch (error) {
        console.error('Error al obtener los nombres de usuario:', error);
      }
    };

    // Llamar a la función para obtener los nombres de usuario
    fetchUserNames();
  }, []);

  return (

    <div className="p-5">
      <div className="flex justify-between mt-2 border-b-2">
      <h1 className="text-gray-800 font-sans text-xl font-semibold mt-8  lg:text-2xl ml-6">User Reviews</h1>
      <a href="/PostReview"><img className="w-6 h-6 mt-8" src={back} alt="" /></a>
      </div>
      <div>
      <ul className="w-96 mb-8 lg:flex w-11/12 ml-6 gap-2">
        {reviews.map(review => (
        <li key={review.id} className=" sm:mr-4 w-full border-b-4 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <div className="flex lg:">
            <img className="sm:mt-2 inline-block h-8 w-8 ring-2 ring-white  lg:mt-1" src={sound} alt="sound"/>
            <div className="flex flex-col sm:ml-2 mr-4 lg:ml-6">
              <h4 className="text-gray-700 text-sm font-semibold ml-2">{review.title}</h4>
              <p className="text-gray-500 text-sm ml-2">{user ? user.name : 'Loading...'}</p>
              <div className="flex items-center ml-2">
                    <span className="text-gray-700 text-sm mr-1">Rating:</span>
                    {/* Mostrar el rating aquí */}
                    {generateStars(review.rating)}{/* Supongamos que tienes una función generateStars que muestra estrellas */}
                  </div>
            </div>
          </div>
            <p className="text-gray-700 text-sm mr-6 mt-2">{review.content}</p>
        </li>
        ))} 
      </ul>
      </div>
    </div>
  );
}

export default ReviewSection;

