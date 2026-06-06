import {baseUrl, periodMonth} from "../utils/constants.ts";
import {useEffect, useState} from "react";

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < periodMonth)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${baseUrl}/v1/planets`);
            const data: {name:string}[] = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1) {
            getPlanets().then(() => console.log('Planets were loaded'));
        }
        return () => console.log('Contact component unmounted');
    }, [])

    return (
        <form className="rounded-[5px] bg-[#f2f2f2] p-5"
              onSubmit={e => {
                  e.preventDefault();
              }}>
            <label>First Name
                <input
                    type="text" name="firstname" placeholder="Your name.."
                    className="w-full p-3 border border-[#ccc] rounded box-border mt-1.5 mb-4 resize-y"
                />
            </label>
            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."
                       className="w-full p-3 border border-[#ccc] rounded box-border mt-1.5 mb-4 resize-y"
                />
            </label>
            <label>Planet
                <select name="planet"
                        className="w-full p-3 border border-[#ccc] rounded box-border mt-1.5 mb-4"
                >
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.."
                          className="w-full h-50 p-3 border border-[#ccc] rounded box-border mt-1.5 mb-4 resize-y"
                ></textarea>
            </label>
            <button type="submit"
                    className="bg-[#04AA6D] text-white py-3 px-5 border-0 rounded cursor-pointer hover:bg-[#45a049]"
            >Submit
            </button>
        </form>
    )
}

export default Contact;