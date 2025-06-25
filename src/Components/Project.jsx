import React from "react";


export function Project({ contentName, contentBody }){
    return(
        <>
            <h2 className="modal-title">{contentName}</h2>
            <hr />
                {contentBody}
        </>
    )
}