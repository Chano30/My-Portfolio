import React from "react";

const Dropdown = ({ data, active, setActive }) => {


return (
<div
    className={`
    ${active ? 'max-h-[500px] opacity-100': 'opacity-0 max-h-0'}
    sm:hidden shadow-2xl
    transition-all overflow-hidden ease-in-out duration-500
    `
    }
    id="collapsible"
>
    <div className="space-y-1 px-2 pb-3 pt-2">
    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

    {data?.map((value, index) => (
        <a
        onClick={() => setActive(!active)}
        key={index}
        href="#"
        className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-950 transition-colors ease delay-75"
        >
        {value}
        </a>
    ))}
    </div>
</div>
);
};

export default Dropdown;
