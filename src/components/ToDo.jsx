import {useState, useEffect, useRef} from 'react'

function ToDo() {

    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if(isMounted.current){
                        setTodo(data)
                        setLoading(false)
                    }
                }, 3000)
            });
        //runs when the component is unmounted
        return () => {
            isMounted.current = false
        }
    }, [])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default ToDo
