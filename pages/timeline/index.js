import { useEffect } from "react"

const Timeline = ({setTitlePage, setMetaDescription}) => {

    useEffect(() => {
        setTitlePage("Devtime")
        setMetaDescription("Lugar donde los devtits se comparten.")
    }, [])

    return (
        <div>
            <h1>Esto es el timeline</h1>
        </div>
    )
}

export default Timeline