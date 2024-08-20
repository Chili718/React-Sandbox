import { useState } from "react"

function useLocalStorage(key, initalValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initalValue))

    const setValue = (value) => {
        //check if function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        //set to state
        setLocalStorageValue(value)
        //set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }
    

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initalValue) {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initalValue
}

export default useLocalStorage
