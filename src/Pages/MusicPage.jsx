import React from "react";
import { observer } from "mobx-react-lite";
import TabWindow from "../Components/TabWindow";

function GameDevPage()
{

    return (
        <section className='music-page'>
           <TabWindow />
        </section>
    )
}

export default observer(GameDevPage);