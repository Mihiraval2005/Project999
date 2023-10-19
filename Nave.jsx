import React from 'react'

import './Nave.css'
import { Link } from 'react-router-dom'

function Nave() {
    return (
        <div className='main'>
            
            <div className='Continer'>
                <ul>
                    <li><Link to={'/'} className='link'><span class="material-symbols-outlined">
                        home
                    </span> </Link></li>
                    <li>
                        
                        <Link to={'/Services'} className='link' ><span class="material-symbols-outlined">
                        info
                    </span>  
                    </Link></li>
                    <li><Link to={'/Contect'} className='link'>  <span class="material-symbols-outlined">
trending_up
</span></Link></li>
                    <li><Link to={'/Login'} className='link'><span class="material-symbols-outlined">
                        login
                    </span></Link></li>
                    <input type=" search" placeholder='search' className='search' />
                    <Link ti={'/#'}>
                        <button className='btn'>Search</button></Link>

                </ul>
            </div>

        </div>

    )
}

export default Nave
