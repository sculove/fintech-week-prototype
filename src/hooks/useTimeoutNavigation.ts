import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useTimeoutNavigation(to:string, timeout:number) {
    const navigate = useNavigate();
    const ref = useRef<NodeJS.Timeout>()
    useEffect(() => {
        if(ref) {
            ref.current = setTimeout(() => {
                navigate(to)
            }, timeout)
        }
        return () => {
            ref && ref.current && clearTimeout(ref.current)
        }
    },[])
}