import { memo } from 'react'
import CharacterAnimation from './charactervalorant6.svg'

function CharacterAboutUs() {
    return (
        <object type="image/svg+xml" data={CharacterAnimation}>svg-animation</object>
    )
}

export default memo(CharacterAboutUs)
