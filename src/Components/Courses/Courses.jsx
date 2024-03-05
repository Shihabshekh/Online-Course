import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Carts from "../Carts/Carts";
import PropTypes from 'prop-types';
const Courses = () => {
    const [courses, setCourses] = useState([])
    const [credit,setCredit] = useState(0)
    const [totalprice,setTotalPrice] = useState(0)
    const [remainingCredit,setRemainingCredit] = useState(20)
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

    const [carts,setCarts] = useState([])
    const handleAddToCart = (course, time,price) => {
        const newCarts = [...carts, course]
        setTotalPrice(totalprice + price )
        setCredit(credit + time)
        setRemainingCredit(remainingCredit - time)
        setCarts(newCarts);
      }
    return (
        <div className="flex">
            <div className="grid grid-cols-3 gap-3 mt-10 md:w-3/4">
                {
                    courses.map(course => <Course key={Course.id} course={course} handleAddToCart={handleAddToCart}></Course>)
                }
            </div>
            <div className="mt-10 md:w-1/4">
                <Carts carts={carts} credit={credit} price={totalprice} remainingCredit={remainingCredit}></Carts>
            </div>
        </div>
    );
};
Courses.propTypes ={
    handleAddToCart:PropTypes.func,
    carts:PropTypes.object
}
export default Courses;