import { useEffect, useState } from "react"

// export default useProducts;
const useReviewsDataSet = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data));
    });
    return [review, setReview];
}
export default useReviewsDataSet;