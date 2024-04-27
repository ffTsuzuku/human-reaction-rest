import { forwardRef, useImperativeHandle, useRef } from 'react'

//know if the timer ran out.
//allow the user to stop the timer.
//know if the user stopped the timer on time.
const ResultModal = forwardRef(({ result, target_time }, ref) => {
    const dialog_ref = useRef()

    useImperativeHandle(ref, () => {
        return {
            open: () => dialog_ref?.current?.showModal(),
        }
    })
    return (
        <dialog className='result-modal' ref={dialog_ref}>
            <h2>You {result}</h2>
            <p>The target time was {target_time} seconds</p>
            <p>
                You stopped the timer with
                <strong>X seconds left.</strong>
            </p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal
