import {Route, Routes, Link} from 'react-router-dom'
import PostHome from './PostHome';
import PostUser from './PostUser';
function PostWebpages(){
    return(
        <>
        <Routes>
            <Route path="/" element={<PostHome />} />
            <Route path="/Post/:id" element={<PostUser />} />
        </Routes>
        </>
    )
}

export default PostWebpages;