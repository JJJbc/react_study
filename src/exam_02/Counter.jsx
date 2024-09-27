import React, { useState } from "react";

function Counter(props){
    let count = 0;

    return (
        <div>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={() => count++}>클릭해줘</button>
        </div>
    );

}

export default Counter;