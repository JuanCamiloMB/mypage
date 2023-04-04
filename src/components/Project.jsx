import psychology from '../assets/psychology.jpg'
import './Project.css'

function Project(){
    return(
        <div className='container'>
            <img src={psychology}/>
            <div className='ProjectTitle'>PhD</div>
            <div className='DiscoverTxt'>Discover</div>
        </div>

    )
}
export default Project