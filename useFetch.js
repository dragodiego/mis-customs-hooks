import React, { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading:true, error:null });
    
    useEffect(() => {
        
        return () =>{
            isMounted.current = false;
        } 
    }, [])

    //QUIERO QUE SE EJECUTE ESTO CUANDO LA URL CAMBIA
    useEffect(() => {
        setstate({
            loading: true,
            error: null,
            data:null
        });

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                if(isMounted.cuurent){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    }, [url])
    return state;
}
