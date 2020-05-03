import React from 'react'
import {Link} from 'react-router-dom';

function Page404() {
    return (
        <div className='bg404'>
            <div className='c404-container'>
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link to='/'><div className='btn-404'>RETOUR</div></Link>
            </div>
        </div>
    )
}

export default Page404
