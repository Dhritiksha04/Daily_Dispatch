import image from '../assets/image.jpg'
import './style.css'

export default function NewsItem({title, description, src, url }) {
  return (
<div className="main">
    <div className="card bg-light text-dark" style={{width:"25rem"}}>
        <img src={src ? src:image} className="card-img-top" alt="..." style={{width:"25rem", maxHeight:"200px"}} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description ? description : "This News is a report of current event. It is information of something that has just happened."}
          </p>
          <a href={url} className="btn btn-primary card-button">Read more</a>
        </div>
    </div>
  </div>
  )
}

