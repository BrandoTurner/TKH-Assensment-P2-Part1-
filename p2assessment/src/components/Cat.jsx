import {useEffect, useState} from 'react';
import getCat from "../services/getCat";
const Cat = () => {
    const [ catUrl, setCatUrl] = useState("");
    const getKitty = async () => {
        const {data} = await getCat();
        console.log("tested")
        setCatUrl(data[0].url);
    };


    useEffect(() => {
        getKitty();

    }, []);
    return (
        <div>
            <img alt= "Kitty pic" src={catUrl} />
            <button onClick={getKitty}> Get a Cat</button>
        </div>
    );
    };

    export default Cat