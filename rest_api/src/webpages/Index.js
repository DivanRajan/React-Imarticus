import {Route, Routes, Link} from 'react-router-dom'
import Home from './Home';
import User from './User';
function Webpages(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/User/:id" element={<User />} />
        </Routes>
        </>
    )
}

export default Webpages;