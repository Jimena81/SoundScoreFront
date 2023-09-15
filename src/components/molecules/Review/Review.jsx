
// import DynamicUrl from '../../../Services/DynamicUrl'
// import { useState } from 'react';

// function Review({title, id_user, content, date}) {
//   const [reviewData, setReviewData] = useState({
//     title: '', 
//     content: '',
    
//   });
//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(`${DynamicUrl}/reviews`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reviewData),
//       });
//       if (response.ok) {
//         console.log('Review submited');
//       } else {
//         console.error('We can`t make it');
//       }
//     } catch (error) {
//       console.error('Network failed:', error);
//     }
//   };


import { useState } from "react";
import { useHttp } from "../../../Hooks/UseHttp";
  
function Review(){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isLoading, error, data, sendRequest } = useHttp();
  const handleSubmit = (event)=> {
    event.preventDefault();
    sendRequest("http://127.0.0.1:8000/api/reviews", "POST", {title, content})
  }

return (
    
    <div>
    <h3 className='ml-5 mt-8 mb-3'>Create a Review:</h3>
    <form className='flex flex-col gap-5 px-8' onSubmit={handleSubmit}>
      <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle( e.target.value)}/>
      <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value )}/>
      <button type="submit" className="bg-custome inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Create</button>
      
    </form>
    {isLoading&& <p>Loading...</p>}
    {error&& <p>Error:{error} </p>}
    {!isLoading && data && <p>Review created with ID: {data.id} </p>}
  </div>

);
}


export default Review