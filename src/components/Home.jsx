import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h1>What`s up Bro: {authInfo.name}</h1>
        </div>
    );
};

export default Home;