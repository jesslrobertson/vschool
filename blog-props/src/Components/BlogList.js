import BlogPost from './BlogPost.js';
import data from './data.js';

export default function BlogList() {
    
    return (
        <div className="main">
            <div className="list-container">
                {data.map(blogPost => <BlogPost blogPost={blogPost} key={blogPost.id} />)}
                <button className="list-button">
                    Older Posts →
                </button>
            </div>
        </div>
    )
}