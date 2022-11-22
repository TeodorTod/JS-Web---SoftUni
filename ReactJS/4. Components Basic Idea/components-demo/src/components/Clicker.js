import { useState } from "react"

export default function Clicker() {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(oldClicks => oldClicks + 1);
    };

  const dangerClicks = clicks > 0;

    return (
        <div>
            <h3>{clicks  < 10 ? 'Normal click' : 'Extra click'}</h3>
            <button onClick={clickHandler}>{clicks}</button>
        </div>
        
    );
}