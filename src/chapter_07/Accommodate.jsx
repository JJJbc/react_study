import React, { useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){    
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16}}>
            <p>{`총 ${count}명 수용했습니다`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount} disabled={count === 0? true : false}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다</p>}
            {count === 0 && <p style={{ color: "red" }}>퇴장할 수 있는 인원이 없습니다</p>}
        </div>
    )
}

export default Accommodate;