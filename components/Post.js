
/*
    show posts on the index page
    props = {
        title = "the title of the post"
        summary = "the summary of the post"
    }
*/
export default function Post(props) {
    const title = props.title;
    const summary = props.summary;
    return (
        <>
            <div className="post">
                <h2> {title} </h2>
                <p> {summary} </p>
                <hr></hr>
                <style jsx>{`
                    .post {
                        margin-left: 22%;
                        margin-right: 22%;
                        margin-top: 10px;
                    }
                `}</style>
            </div>
        </>
    )
}