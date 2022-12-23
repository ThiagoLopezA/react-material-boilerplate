import { useAxios } from "../hooks";
import { loadAbort } from "../utilities";

const request = useAxios();

export const exampleService = () =>{
    const controller = loadAbort()
    return {
        call: request.get('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal }),
        controller
    }
}