import { useEffect } from "react"
import MoleHill from './molehill.png'
//can use same logic from mole.jsx
const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 6969)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot