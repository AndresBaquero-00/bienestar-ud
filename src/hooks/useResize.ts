import { useEffect, useState } from "react";

export const useResize = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const onChangeDimensions = () => setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        window.addEventListener('resize', onChangeDimensions);        
        return () => {
            window.removeEventListener('resize', onChangeDimensions);
        }
    }, []);
    
    return dimensions;
}