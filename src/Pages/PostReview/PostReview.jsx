
import NavBar from '../../components/atoms/NavBar/NavBar'
import Footer from '../../components/atoms/footer/Footer'
import Review from '../../components/molecules/Review/Review'



function PostReview() {
  return (
    <>
    <NavBar/>
    <div className='mt-28 ml-5'>
        <h5>Score:</h5>    
    </div>
    <Review/>
    <Footer/>
            
    </>
  )
}

export default PostReview