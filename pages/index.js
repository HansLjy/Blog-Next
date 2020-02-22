import GithubIcon from "../components/GithubIcon"
import Page from "../components/Page"
import Post from "../components/Post"
import Scroll from "../components/Scroll"
import Layout from "../components/Layout"
import Link from "next/link"
import contents from "../content.json"
export default function Index() {
    return (
        <Layout>
            <Page id="front">
                <div className="middle">
                    <h1> {`Hans &`} </h1>
                    <h2> All His Friends </h2>
                </div>
                <Scroll></Scroll>
            </Page>
            <Page id="main">
                <h1> Recent Posts </h1>
                {contents.posts.map((post, index) => (
                    <Link href={`/post?title=${post.title}`} key={index} passHref>
                        <Post title={post.title} summary={post.summary}></Post>
                    </Link>
                ))}
            </Page>
            <style jsx>{`
                body {
                    padding: 0px;
                    margin: 0px;
                    background-color: rgba(127, 127, 127);
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
                }
                .middle {
                    width: 40%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
    
                    display: flex;
                    flex-direction: column;
                    transform: translate(-50%, -50%);
                }
    
                .middle h1 {
                    display: flex;
                    margin: 0px auto auto 0px;
    
                    font-family: "Source Han Serif SC";
                    color: rgba(255, 255, 255, 1);
                    font-size: 108px;
                }
    
                .middle h2 {
                    display: flex;
                    margin: auto 0px 0px auto;
                    font-family: "Source Han Serif SC";
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 72px;
                }
            `}</style>
            <GithubIcon></GithubIcon>
        </Layout>
    )
}