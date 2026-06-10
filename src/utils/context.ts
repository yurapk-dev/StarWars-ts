import {createContext} from "react";
import {defaultHero} from "./constants.ts";
import type {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero:(hero:string) => console.log(hero)

});