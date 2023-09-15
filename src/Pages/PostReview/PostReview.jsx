import Rating from '../../components/atoms/Rating/Rating'
import NavBar from '../../components/atoms/NavBar/NavBar'
import Footer from '../../components/atoms/footer/Footer'
import Review from '../../components/molecules/Review/Review'



function PostReview() {
  return (
    <>
    <NavBar/>
    <div className='mt-16 ml-5'>
        <h5>Score:</h5> 
        <Rating/>
    </div>
    <Review/>
    <Footer/>
            
    </>
  )
}

export default PostReview