import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({ title, target_time }) => {
    // react values
    const [time_remaining, update_time_remaining] = useState(
        target_time * 1000
    )
    const dialog_ref = useRef()
    const timer = useRef()

    //methods
    const start_time = () => {
        timer.current = setInterval(() => {
            update_time_remaining((prev_time) => prev_time - 10)
        }, 10)
    }

    const stop_time = () => {
        clearInterval(timer.current)
        dialog_ref.current.open()
    }

    const on_modal_close = () => {
        update_time_remaining(target_time_in_milli)
        alert('closed')
    }

    //rendering logic
    const target_time_in_milli = target_time * 1000
    const timer_expired = time_remaining <= 0
    const timer_is_active =
        time_remaining < target_time_in_milli && time_remaining > 0

    if (timer_expired) {
        clearInterval(timer.current)
        dialog_ref.current.open()
    }

    const button_on_click =
        time_remaining < target_time_in_milli ? stop_time : start_time
    return (
        <>
            <ResultModal
                result={'Lost'}
                target_time={target_time}
                time_remaining={time_remaining}
                ref={dialog_ref}
                on_close={on_modal_close}
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
                        {timer_is_active
                            ? 'Stop Challenge'
                            : 'Start Challenge'}
                    </button>
                </p>
                <p>
                    {timer_is_active
                        ? 'Timer is running...'
                        : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
