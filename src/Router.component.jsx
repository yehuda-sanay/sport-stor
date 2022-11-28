import {Route, Routes} from 'react-router-dom'
import {Home} from './component/pages/index'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}