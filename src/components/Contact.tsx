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
            const data: { name: string }[] = await res.json();
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
        <form className="w-4/5 rounded-[5px] bg-[#f2f2f2] mx-auto p-5 my-2" onSubmit={e => {
            e.preventDefault();
        }}>
            <label className={'w-full text-danger'}>First Name
                <input className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                       type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label className={'w-full text-danger'}>Last Name
                <input className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                       type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label className={'w-full text-danger'}>Planet
                <select className={'w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                        name="planet">
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label className={'w-full text-danger'}>Subject
                <textarea className={'h-50 w-full p-3 border border-[#ccc] rounded-sm mt-1.5 mb-4 resize-y text-black'}
                          name="subject" placeholder="Write something.."></textarea>
            </label>
            <button
                className={'bg-[#04AA6D] text-white py-3 px-5 border-none rounded-sm cursor-pointer hover:bg-[#45a049]'}
                type="submit">Submit
            </button>
        </form>
    )
}

export default Contact;