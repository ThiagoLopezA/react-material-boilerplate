import { useAxios } from "../hooks";
import { loadAbort } from "../utilities";

const request = useAxios();

const signin = (email:string, password:string) => {
    // request.post()
}

export default {signin}