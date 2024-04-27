import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({ title, target_time }) => {
    const [time_remaining, update_time_remaining] = useState(
        target_time * 1000
    )
    const dialog_ref = useRef()
    const timer = useRef()

    const start_time = () => {
        timer.current = setInterval(() => {
            update_time_remaining((prev_time) => prev_time - 10)
        }, 10)
    }

    const stop_time = () => {
        clearInterval(timer.current)
    }

    const timer_expired = time_remaining <= 0
    const timer_started =
        time_remaining > 0 && time_remaining < target_time * 1000
    if (time_remaining <= 0) {
        clearInterval(timer.current)
        dialog_ref.current.open()
    } else if (!timer && time_remaining < target_time * 1000) {
        dialog_ref.current.open()
    }

    const button_on_click =
        time_remaining < target_time * 1000 ? stop_time : start_time
    return (
        <>
            <ResultModal
                result={'Lost'}
                target_time={target_time}
                ref={dialog_ref}
            />
            <section className='challenge'>
                <h2>{title}</h2>
                {timer_expired ? 'You Lost' : undefined}
                <p className='challenge-time'>
                    {target_time} second{' '}
                    {target_time > 1 ? 's' : undefined}
                </p>
                <p>
                    <button onClick={button_on_click}>
                        {timer_started
                            ? 'Stop Challenge'
                            : 'Start Challenge'}
                    </button>
                </p>
                <p>
                    {timer_started
                        ? 'Timer is running...'
                        : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
