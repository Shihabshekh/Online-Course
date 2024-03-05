import PropTypes from 'prop-types';
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
const Course = ({course ,handleAddToCart}) => {
    const {img,title, description, price, credit} = course;
    return (
       <div className=''>
         <div className='w-auto h-auto rounded-lg bg-white p-3 '>
            <img className='w-72 h-36 rounded-lg ' src={img} alt="" />
            <h2 className='text-lg font-semibold mt-1'>{title}</h2>
            <p className='text-gray-500 mt-2'>{description}</p>
            <div className=' flex space-x-4 text-gray-500 mt-2'>
                <p className='flex items-center'><BsCurrencyDollar className='text-gray-800' /> Price: {price}</p>
                <p className='flex items-center'><IoBookOutline className='text-gray-800' />Credit: {credit}hr</p>
            </div>
            <button onClick={()=>handleAddToCart(course,credit,price)} className='bg-blue-500 w-72 h-8 text-white font-semibold rounded-lg mt-2'>Select</button>
        </div>
       </div>
    );
};

Course.propTypes ={
    course:PropTypes.object,
    handleAddToCart:PropTypes.func
}
export default Course;