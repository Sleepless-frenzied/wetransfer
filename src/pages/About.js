import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom';



function About(){

    const options = [
        { label: "dsf" },
        { label: "blablablabla" }
    ];
    function Dropdown({ name, text, options, CN, value, handleChange }) {
        return (
            <div className={CN}>
                <div className={" grid grid-rows border-2 dark:border-darkDivi"}>
                    <div className="flex flex-wrap divide-x-2 divide-darkDivi ">
                        <p className=" w-1/3 py-1.5">{text}</p>
                        <select
                            className=" w-2/3 text-black"
                            placeholder={"test"}
                            aria-placeholder={"fdsa"}
                            name={name}
                            value={value}
                            onChange={handleChange}
                        >
                            {options.map((item) => {
                                return (
                                    <option key={item.index} name={name} value={item.label}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    const [details, setDetails] = useState({
        name: "",
        Thickness: "dsf"
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };


    console.log(details);


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        navigate('/contacts', {
            state : {details: details}
        });
    };


    const isEnabled = Object.values(details).every(Boolean);

    return (
        <div>

            <form onSubmit={handleSubmit}>


                <Dropdown
                    name={"Thickness"}
                    options={options}
                    value={details.Thickness}
                    text={"Thickness"}
                    CN={"w-1/3"}
                    handleChange={handleChange}
                />

                <label>
                    Enter your name:
                    <input
                        className={"text-black"}
                        type="text"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Enter your test:
                    <input
                        className={"text-black"}
                        type="text"
                        name="test"
                        value={details.test}
                        onChange={handleChange}
                    />
                </label>
                <button
                    type="submit"
                    disabled={!isEnabled}
                    className={"bg-blue-500 disabled:bg-red-600"}
                >
                    {" "}
                    sub
                </button>
            </form>
        </div>
    );



}


export default About;


