import { useRef, useState } from 'react'

export default function Player() {
    const [player_name, set_player_name] = useState()
    const player_input_el = useRef()

    const handle_submit = (e) => {
        set_player_name(player_input_el?.current?.value)
    }

    console.log({
        ref_val: player_input_el?.current?.value,
        out: player_input_el?.current?.value || 'unknown',
    })
    return (
        <section id='player'>
            <h2>Welcome {player_name ?? 'unknown entity'}</h2>
            <p>
                <input type='text' ref={player_input_el} />
                <button onClick={handle_submit}>Set Name</button>
            </p>
        </section>
    )
}
