
export default function BlogPost({ blogPost }){
    const { title, subTitle, author, date} = blogPost;

    return(
        <div className="post-container">
            <h2 className="post-title">
                {title}
            </h2>
            <h3 className="post-content">
                {subTitle}
            </h3>
            <p className="info">
                Posted by <span className="post-author">{author}</span> on {date}
            </p>
        </div>
    )
}