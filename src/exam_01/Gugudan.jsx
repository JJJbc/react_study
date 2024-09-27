import React from "react";

const gugudanArr = [    
    1, 2, 3, 4, 5, 6, 7, 8, 9
]


function Gugudan(props){
    return(
            
        <table style={{border: "1px solid", borderCollapse: "collapse"}}>
            <tr style={{border: "1px solid"}}>
                <td style={{border: "1px solid"}} colSpan={5}>{props.dan}단</td>    
            </tr>    
        
            {gugudanArr.map((gugudanArr) => {
                return(                    
                    <tr style={{border: "1px solid"}}>
                        <td style={{border: "1px solid"}}>{props.dan}</td>
                        <td style={{border: "1px solid"}}>*</td>
                        <td style={{border: "1px solid"}}>{gugudanArr}</td>
                        <td style={{border: "1px solid"}}>=</td>
                        <td style={{border: "1px solid"}}>{props.dan * gugudanArr}</td>
                    </tr>
                );
            })}
        </table>        
    
    );
}

export default Gugudan;
