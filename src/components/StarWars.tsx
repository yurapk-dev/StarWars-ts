import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        <div className={'text-justify text-3xl leading-normal tracking-widest'}>
            {starWarsInfo}
        </div>
    )
}

export default StarWars;