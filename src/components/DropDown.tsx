import React, { useState } from "react";
import { CaretDown } from "phosphor-react";

const DropDown = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div>
    <button onClick={() => setIsExpanded(true)}
    className="font-mathias text-center  text-black rounded-md w-auto hover:opacity-50">
        Metadata <CaretDown />
    </button>
    {/* {isExpanded &&


    } */}
    </div>
  )
}

export default DropDown;
