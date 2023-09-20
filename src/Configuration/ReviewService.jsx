import { getReviewsUrl } from '../Services/DynamicUrl';
import useFetch from '../Hooks/UseFetch';

export function getReviews() {
  const ReviewsUrl = getReviewsUrl();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useFetch(ReviewsUrl);
}