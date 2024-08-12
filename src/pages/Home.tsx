import Container from "../Components/Container.tsx";
import {Helmet} from "react-helmet";
import Hero from "../Components/Features/Hero.tsx";
import Categories from "../Components/Features/Categories.tsx";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | 3legant</title>
            </Helmet>
            <Container>
                <Hero />
                <Categories />
            </Container>
        </div>
    )
}


export default Home;