import useReviewsDataSet from '../../hooks/demo';
import './Home.css'
import pizza from '../../img/pizza.png';
import ReviewCart from '../ReviewCart/ReviewCart';
import { Link } from 'react-router-dom';
const Home = () => {
    const [re, setRe] = useReviewsDataSet([]);
    const item = re.slice(0, 3);
    return (
        <div>
            <div className='container'>
                <div className="text-container">
                    <h1>UNLIMITED MEDIUM <span>PIZZAS</span></h1>
                    <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p>
                    <button className='order-btn'>ORDER NOW</button>
                </div>
                <div className="img-container">
                    <img src={pizza} alt="" />
                </div>
            </div>
            <h2 className='customer-reviews'>Customer Reviews {item.length}</h2>
            <div>
                {
                    item.map(reviews => <ReviewCart review={reviews}></ReviewCart>)
                }
            </div>
            <div className='review-btn'>
                <Link to={'/reviews'}>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;