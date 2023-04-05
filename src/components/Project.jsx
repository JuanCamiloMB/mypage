import './Project.css'

function Project(props){
    return(
        <div className='container'>
            <img src={props.image}/>
            <div className='ProjectTitle'>{props.title}</div>
            <div className='DiscoverTxt'>Discover</div>
        </div>

    )
}
export default Project