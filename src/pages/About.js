import React, {useState} from "react";
//import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom';



function About(){

    const optionsCellar = [
        { label: "Aboveground" },
        { label: "Semi-Buried" },
        { label: "Buried" },
    ];
    const optionsTemp = [
        { label: "12 C°" },
        { label: "13 C°" },
        { label: "14 C°" },
        { label: "15 C°" },
        { label: "16 C°" },
    ];
    const optionsFloor = [
        { label: "Expanded polystyrene" },
        { label: "Extruded polystyrene" },
        { label: "Polyurethane" },
        { label: "Concrete only" },
        { label: "Brick only" },
        { label: "Clay" },
    ];
    const optionsCeiling = [
        { label: "Expanded polystyrene" },
        { label: "Extruded polystyrene" },
        { label: "Polyurethane" },
        { label: "Concrete only" },
        { label: "Brick only" },
        { label: "Clay" },
    ];
    
    function Dropdown({ name, text, options, CN, value, handleChange }) {
        return (
            <div className={CN}>
                <div className={" grid grid-rows border-2 dark:border-darkDivi"}>
                    <div className="flex flex-wrap divide-x-2 dark:divide-darkDivi ">
                        <p className=" w-1/3 py-1.5">{text}</p>
                        <select
                            className=" w-2/3 text-black"
                            placeholder={"test"}

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
        Cellar: "Aboveground",
        Temp:"12 C°",

        FloorMaterial:"Polyurethane",
        FloorThick:"1",

        CeilingMaterial:"Polyurethane",
        CeilingThick:"1",

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

                <br/>

                <div className={"bg-blue-300 w-1/3"}>
                    <div className=" grid gird-cols mx-2 my-2 ">
                        <span className={"h-2.5"}></span>

                        <Dropdown
                            name={"Cellar"}
                            options={optionsCellar}
                            value={details.Cellar}
                            text={"Your cellar is"}
                            CN={""}
                            handleChange={handleChange}
                        />
                        <br/>
                        <Dropdown
                            name={"Temp"}
                            options={optionsTemp}
                            value={details.Temp}
                            text={"Temp"}
                            CN={""}
                            handleChange={handleChange}
                        />

                        <div>
                            <h3 className={""}>Your floor settings</h3>
                            <hr className={"my-2.5"}/>
                            <Dropdown
                                name={"FloorMaterial"}
                                options={optionsFloor}
                                value={details.FloorMaterial}
                                text={"Material"}
                                CN={""}
                                handleChange={handleChange}
                            />

                            {/*TODO Problem here with input*/}
                            <div className={"my-1.5   text-black "}>
                                <label className={" grid grid-cols-7 divide-x-2  border-2 border-darkDivi divide-darkDivi"}>
                                    <a className={" col-span-3"}>Thickness</a>
                                    <input
                                        className={"col-span-3 "}
                                        type="number"
                                        name="FloorThick"
                                        value={details.FloorThick}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                    <a>cm</a>
                                </label>
                            </div>
                        </div>


                        {/*Your ceiling settings*/}
                        <div>
                            <h3 className={""}>Your ceiling settings</h3>
                            <hr className={"my-2.5"}/>
                            <Dropdown
                                name={"CeilingMaterial"}
                                options={optionsCeiling}
                                value={details.CeilingMaterial}
                                text={"Material"}
                                CN={""}
                                handleChange={handleChange}
                            />

                            <div className={"my-1.5   text-black "}>
                                <label className={" grid grid-cols-7 divide-x-2  border-2 border-darkDivi divide-darkDivi"}>
                                    <a className={" col-span-3"}>Thickness</a>
                                    <input
                                        className={"col-span-3 "}
                                        type="number"
                                        name="CeilingThick"
                                        value={details.CeilingThick}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                    <a>cm</a>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>


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


