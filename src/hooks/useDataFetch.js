import { useState, useEffect } from 'react'

export const useDataFetch = (url) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url.length) return

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://www.potterapi.com/v1/${url}`)
                const json = await response.json()
                setData(json)
            } catch(error) {
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    return { isLoading, data, error }
}
