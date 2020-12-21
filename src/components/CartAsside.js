import React from 'react';

const CartAsside = ({cartItems, onAdd, onRemove, setCartItems}) => {
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
                <div key={item.id} className="border-bottom border-light py-3">
                    <div className="row">
                        <div className="col-9">
                            <p className='row pb-0 mb-0'><strong>{item.title}</strong></p>
                            <p className='row mt-0 pt-0'>{item.author}</p>
                        </div>
                        <div className="col">
                            <p className="row">
                                <strong>{(item.qty * item.price).toFixed(2)} €</strong></p>
                        </div>
                    </div>
                    <div className="row px-lg-5 px-2">
                        <button onClick={() => onRemove(item)} className="col-2 btn bg-danger text-white">-
                        </button>
                        <p className="col d-flex justify-content-center">{item.qty} vnt.</p>
                        <button onClick={() => onAdd(item)} className="col-2 bg-success btn text-white">+
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
                                className='btn btn-lg bg-success col-10 mx-auto mt-2'>Pirkti
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartAsside;