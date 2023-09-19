import  { useState, useEffect } from "react";
import axios from 'axios';

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
      <h1 className="text-gray-700 font-sans text-2xl font-semibold mt-8 border-b-2">User Reviews</h1>
      <div>
      <ul className="w-96">
        {reviews.map(review => (
          <li key={review.id} className=" mr-4 w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            
            <h4 className="text-gray-700 text-based font-semibold">{review.title}</h4>
            <p className="text-gray-700 mr-5">{review.content}</p>
            
            <div className="flex gap-2 ">
              <img className="mt-5 inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""/>
        <p className="text-gray-500 mt-5">{user ? user.name : 'Loading...'}</p>
        </div>
          </li>
        ))} 
      </ul>
      </div>
    </div>
  );
}

export default ReviewSection;

