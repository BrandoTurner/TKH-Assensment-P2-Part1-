import {useEffect, useState} from 'react';
import getDog from "../services/getDog";
const Dog = () => {
    const [ dogUrl, setDogUrl] = useState("");
    const getDoggy = async () => {
        const {data} = await getDog();
        console.log("tested")
        setCatUrl(data.message);
    };


    useEffect(() => {
        getDoggy();

    }, []);
    return (
        <div>
            <img alt= "Doggy pic" src={catUrl} />
            <button onClick={getKitty}> Get a Cat</button>
        </div>
    );
    };

    export default Dog