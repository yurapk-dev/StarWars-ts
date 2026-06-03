import {useEffect, useState} from "react";
import {baseUrl, periodMonth} from "../utils/constants.ts";

const AboutMe = () => {
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem('hero')!);
        if(hero && (Date.now() - hero.timestamp < periodMonth)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!hero) {
            fetch(`${baseUrl}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        Name: data.name,
                        Gender: data.gender,
                        'Birth year': data.birth_year,
                        Height: data.height,
                        Mass: data.mass,
                        'Hair color': data.hair_color,
                        'Eye color': data.eye_color,
                        'Skin color': data.skin_color,
                    };
                    setHero(info);
                    localStorage.setItem('hero', JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, []);

    return (
        <>
            {(!!hero) &&
                <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => (
                        <p key={key}>{key}: {hero[key]}</p>
                    ))}
                </div>
            }
        </>
    )
}

export default AboutMe;