import { forwardRef, useImperativeHandle, useRef } from 'react'

//know if the timer ran out.
//allow the user to stop the timer.
//know if the user stopped the timer on time.
const ResultModal = forwardRef(
    ({ target_time, on_close, time_remaining }, ref) => {
        //react values
        const dialog_ref = useRef()

        useImperativeHandle(ref, () => {
            return {
                open: () => dialog_ref?.current?.showModal(),
            }
        })

        //renderiing logic
        const time_in_seconds = (time_remaining / 1000).toFixed(2)
        const lost = time_remaining === 0
        const score = Math.round(
            (1 - time_remaining / (target_time * 1000)) * 100
        )
        return (
            <dialog
                className='result-modal'
                ref={dialog_ref}
                onClose={on_close}
            >
                <h2>You {lost ? 'Lost' : 'Won'}</h2>
                <p>The target time was {target_time} seconds</p>
                <p>Score: {score}</p>
                <p>
                    You stopped the timer with
                    <strong>{time_in_seconds} seconds left.</strong>
                </p>
                <form method='dialog'>
                    <button>Close</button>
                </form>
            </dialog>
        )
    }
)

export default ResultModal
