import {useContext, useEffect, useState} from "react";
import {characters, defaultHero, periodMonth} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {SWContext} from "../utils/context.ts";

const AboutMe = () => {
    const {changeHero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if(hero && (Date.now() - hero.timestamp < periodMonth)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!(heroId in characters)) {return;}
        changeHero(heroId);
        if (!hero) {
            fetch(characters[heroId as keyof typeof characters].url)
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
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, []);

    return (heroId in characters) ?  (
        <>
            {(!!hero) &&
                <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => (
                        <p key={key}>{key}: {hero[key]}</p>
                    ))}
                </div>
            }
        </>
    ): <ErrorPage/>;
}

export default AboutMe;