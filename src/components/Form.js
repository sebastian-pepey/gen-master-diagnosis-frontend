import React, { useRef } from 'react';

export default function FileInput() {

    const fileToParse = useRef(null);

    function handleSubmit(e){
        // e.preventDefault();
        // console.dir(fileToParse.current.files[0]);
        fetch(``)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Ingrese el archivo</label>
                <input type="file" ref={fileToParse} className="form-control" name='fileToUpload' accept='.csv' />
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}