import Banner from "./Components/Banner.tsx";
import {Outlet} from "react-router-dom";
import Navigation from "./Components/Navigation.tsx";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import FlyoutCart from "./Components/Overlays/FlyoutCart.tsx";


const App = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const handleCartClose = () => {
        setCartOpen(false)
    }

    const handleCartOpen = () => {
        setCartOpen(true);
    }


    return (
        <>
            <AnimatePresence>
                {
                    cartOpen &&
                    <FlyoutCart handleClose={handleCartClose}>
                        <FlyoutCart.Title>Cart</FlyoutCart.Title>
                    </FlyoutCart>
                }
            </AnimatePresence>
            <Banner />
            <Navigation openCart={handleCartOpen} />
            <main>
                <Outlet />
            </main>
        </>
    )
}



export default App;