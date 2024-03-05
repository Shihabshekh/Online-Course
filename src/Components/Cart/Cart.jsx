import PropTypes from 'prop-types'
const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <div className=''>
          {
            <ol  className='list-decimal ml-4 mt-2 text-gray-500'>
             <li>{title}</li>
            </ol>
          }
        </div>
    );
};
Cart.propTypes ={
    cart:PropTypes.array
}
export default Cart;