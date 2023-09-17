import { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

function Review(){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const user = {
        title, content
      }
      const response = await axios.post('http://localhost:8000/api/reviews', user);
      console.log('Review posted', response.data); 
      navigateTo("/AllReviews");
    } catch (error) {
      console.error('Error', error);
     
    }
  };

return (
    
    <div>
    <h3 className='ml-5 mt-8 mb-3'>Create a Review:</h3>
    <form className='flex flex-col gap-5 px-8'>
      <input name="title" type='text' placeholder='Title' value={title} onChange={(event)=>setTitle(event.target.value)}/>
      <input name="content" type='text' placeholder='Content' value={content} onChange={(event)=>setContent(event.target.value)}/>
      <button onClick={handleSubmit} className="bg-custome inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Create</button>
      
    </form>
    
  </div>

);
}


export default Review