export default function Post({post}){
    return (
        <div className="card" style={{width: "18rem", margin: "1%"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                <p className="card-text">{post.text}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div> 
    )

}