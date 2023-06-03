import  {useEffect, useState} from 'react';



const useDebounce = (value:string, delay:number = 500):string => {
    const [debounced, setDebounced] = useState('')

    useEffect(()=> {

        const handler = setTimeout(()=> setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced

};

export default useDebounce;