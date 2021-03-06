import React, {useState, useEffect} from 'react';
import Header from "./Header";
import BooksList from "./BooksList";
import CartAsside from "./CartAsside";
import data from "../data/data";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CartSeparate from "./CartSeparate";


const Main = () => {
    const {books} = data;
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem("cartItems");
       return localData ? JSON.parse(localData) : [];
    });

    const onAdd = (book) => {
        console.log(book.likutis)
        const exist = cartItems.find((x) => x.id === book.id);//surandamas tokia pati knyga

        if (exist && exist.qty < book.likutis) {//jeigu tokia knyga egzistuoja jau krepselyje, tuomet reikia surasti ta knyga su map funkcija, ir kopijuoti kieki ir prideti viena
            setCartItems(cartItems.map((x) => x.id === book.id ? {...exist, qty: exist.qty + 1} : x));
        } else if (exist === undefined) {
            setCartItems([...cartItems, {...book, qty: 1}]); //kopijuojam krepselio poduktus ir pridedam nauja viena vieneta
        } else {
            alert(`Atsiprašome, daugiau prekių sandėlyje nėra.`);
        }
    }

    const onRemove = (book) => {
        const exist = cartItems.find((x) => x.id === book.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== book.id));
        } else {
            setCartItems(
                cartItems.map((x) => x.id === book.id ? {...exist, qty: exist.qty - 1} : x)
            )
        }
    }

    const onItemRemove = (deleteItem) =>{
        setCartItems(cartItems.filter((book) => book !== deleteItem));
    }

    useEffect(() => {
       localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/cart">
                        <Header countCartItems={cartItems.length}/>
                        <CartSeparate onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} onItemRemove={onItemRemove}/>
                    </Route>
                    <Route path="/">
                        <Header countCartItems={cartItems.length}/>
                        <div className="main-body">
                            <BooksList onAdd={onAdd} books={books}/>
                            <CartAsside onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} setCartItems={setCartItems} />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Main;
