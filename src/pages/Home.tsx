import Container from "../Components/Container.tsx";
import {Helmet} from "react-helmet";
import Hero from "../Components/Features/Hero.tsx";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | 3legant</title>
            </Helmet>
            <Container>
                <Hero />
            </Container>
        </div>
    )
}


export default Home;