import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";

function Helper() {      
    const { id } = useParams();
    return (
        <>
        <ItemDetailContainer id={id} />
        </>
    )
}

export default Helper;