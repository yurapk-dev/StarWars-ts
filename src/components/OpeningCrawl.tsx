import {useEffect, useState} from "react";
import {baseUrl} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState(() => sessionStorage.getItem('opening_crawl'));

    useEffect(() => {
        if(!openingCrawl){
            const episode = Math.floor(Math.random() * 6 + 1);
            fetch(`${baseUrl}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
                .catch(() => setOpeningCrawl('Error loading opening crawl'));
        }
    }, []);

    return <Text>{openingCrawl || 'Loading...'}</Text>

}

export default OpeningCrawl;