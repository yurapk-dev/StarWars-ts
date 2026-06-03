import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";

const StarWars = () => {
    return <Text>{starWarsInfo}</Text>
}

export default StarWars;