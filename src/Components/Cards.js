export default function Cards(props) {
    return <div className="card">
       <img src={props.img} alt="img" className="img"/>
        <div className="title">
        <p>{props.title}</p>
        <p><i class="fa-solid fa-star"></i> {props.review}</p>
        </div>
        <h4>{props.desc}</h4>
        <h4>{props.date}</h4>
        <p className="price">${props.price}</p>
    </div>
}