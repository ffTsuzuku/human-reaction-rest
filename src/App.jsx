import { useState } from 'react'
import Player from './components/Player.jsx'
import TimerChallenge from './components/TimerChallenge.jsx'

function App() {
    return (
        <>
            <Player />
            <div id='challenges'>
                <TimerChallenge title={'Easy'} target_time={1} />
                <TimerChallenge title={'Not Easy'} target_time={5} />
                <TimerChallenge
                    title={'Getting Tough'}
                    target_time={10}
                />
                <TimerChallenge
                    title={'Pros Only'}
                    target_time={15}
                />
            </div>
        </>
    )
}

export default App
