import React from "react";


export function Project({ contentName, contentBody }){
    return(
        <>
            <h2>{contentName}</h2>
                {contentBody}
        </>
    )
}