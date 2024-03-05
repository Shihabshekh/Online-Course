import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({carts,credit,price,remainingCredit}) => {
    

    return (
        <div className="w-80 min-h-60 rounded-lg bg-white ml-3 p-4">
            <h2 className="text-xl text-blue-600 font-bold mb-7">Credit Hour Remaining {remainingCredit} hr</h2>
            <hr className='mt-3 mb-3' />
            <h2 className="text-2xl font-bold mb-7">Course Name</h2>
            {
                carts.map((cart, idx)=> <Cart key={idx} cart={cart}></Cart>)
            }
            <hr className='mt-3 mb-3' />
            <h2 className='text-xl text-gray-600'>Total Credit Hour: {credit}</h2>
            <hr className='mt-3 mb-3' />
            <h2 className='text-xl text-gray-700'>Total Price: {price} USD</h2>
        </div>
    );
};
Carts.propTypes ={
    carts:PropTypes.array,
    credit:PropTypes.number,
    price:PropTypes.number
}
export default Carts;