
/*
    show posts on the index page
    props = {
        title = "the title of the post"
        summary = "the summary of the post"
    }
*/

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const title = this.props.title;
        const summary = this.props.summary;
        return (
            <>
                <div className="post">
                    <h2 > {title} </h2>
                    <p> {summary} <a href={this.props.href}>...Read More</a></p>
                    <hr></hr>
                </div>
                <style jsx>{`
                    .post {
                        margin-left: 22%;
                        margin-right: 22%;
                        margin-top: 10px;
                    }
                `}</style>
            </>
        );
    }
}

export default Post;