import React from "react";

export const Member = (props)=>{
    return(
        <div>
            <h2>Xin chào, {props.name} | {props.age}</h2>
        </div>
    );
}


export const MemberList = (props)=>{
    return(
        <div>
            <Member name="Hùng" age="20" />
            <Member name="Dũng" age="22" />
            <Member name="Sang" age="24" />
            <Member name="Trọng" age="22" />
        </div>
    );
}