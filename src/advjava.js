import React, {useRef} from 'react'

export const Advjava = () => {

    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.click();
    };
    const questionImageChange = (e) => {
       console.log("e",e.target.files[0])
    };


    return (
        <>
            <input ref={inputEl} type="file"  onChange={(e) => questionImageChange(e)}/>
            <button onClick={onButtonClick}>Focus the input</button>
            
        </>
    )
}

export default Advjava
