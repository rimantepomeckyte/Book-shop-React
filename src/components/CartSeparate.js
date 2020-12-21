import React from 'react';
import {AiFillDelete} from "react-icons/all";

const CartSeparate = ({cartItems, onAdd, onRemove, setCartItems, onItemRemove}) => {
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 24.99 ? 0 : 3.45;
    const totalPrice = itemsPrice + shippingPrice;


    const onCheckOut = () => {
        setCartItems([]);
        alert('Ačiū, kad pirkote!')
    }

    return (
        <div className="cart blocks">
            <h3>Jūsų krepšelis</h3>
            <div>
                {cartItems.length === 0 && <div>Krepšelis tuščias</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row border-bottom border-light py-3 cart-separate-div">
                    <img className='col-2 cart-separate-img' src={item.img}/>
                    <div className="col">
                        <p className='row pb-0 mb-0'><strong>{item.title}</strong></p>
                        <p className='row mt-0 pt-0'>{item.author}</p>
                        <div className="row d-flex justify-content-center">
                            <button onClick={() => onRemove(item)} className="remove col-1 btn bg-danger text-white">-
                            </button>
                            <p className='col-2 d-flex justify-content-center'>{item.qty} vnt.</p>
                            <button onClick={() => onAdd(item)} className="add col-1 bg-success btn text-white">+
                            </button>
                        </div>
                    </div>
                    <div className='col-2'>

                        <p className="row mr-2 mb-4">
                            <strong>{(item.qty * item.price).toFixed(2)} €</strong></p>
                        <button onClick={() => onItemRemove(item)} className="row btn mt-4"><AiFillDelete />
                        </button>
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <div className='row d-flex justify-content-between mr-2'>
                        <p>Pristatymo kaina:</p>
                        <div>{shippingPrice.toFixed(2)} €</div>
                    </div>
                    <div className='row d-flex justify-content-between mr-2'>
                        {itemsPrice < 24.99 ? <p className="text-secondary">(Iki nemokamo pristatymo Jums
                            liko: {(25 - itemsPrice).toFixed(2)} €)</p> : ''}
                    </div>
                    <div className='row d-flex justify-content-between mr-2'>
                        <div><strong>Bendra suma:</strong></div>
                        <div><strong>{totalPrice.toFixed(2)} €</strong></div>
                    </div>
                    <div className='row'>
                        <button onClick={onCheckOut}
                                className='btn btn-lg bg-success col-4 mx-auto mt-4'>Pirkti
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartSeparate;