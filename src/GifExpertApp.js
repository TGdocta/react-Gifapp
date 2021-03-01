import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch'])

    // const handledAdd = (e) =>{
    //     setCategories( ['Shingeki no Kyojin',... categories] )
    //     setCategories( [... categories,'Shingeki no Kyojin'] )
    //     setCategories( cat =>  [... cat,'Shingeki no Kyojin'] )
    // }
 
    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories ={ setCategories }/>
            <hr />

      
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                        key={ category}
                        category= {category} />
                    ))
                }
                
            </ol>
        </>
    )
    


}

export default GifExpertApp