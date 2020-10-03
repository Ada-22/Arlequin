import React  from 'react'
import ListItems from './ListItems'
import { useParams } from 'react-router-dom'

function CategoryHelper() {      
    const { categoryId } = useParams();
    return (
        <>
            <ListItems category={categoryId}/>
        </>
    )
}

export default CategoryHelper;


