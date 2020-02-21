
/*
    main: the main page to place post summarys
    front: the front page(which is the first thing ou see when you visit the website)
*/
export default function Page(props) {
    return (
        <>
            <div className="page" id={props.id}>
                {props.children}
            </div>
            <style global jsx>{`
                .page {
                    position: relative;
                    min-width: 100vw;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                #front {
                    background-image: url("../static/cosmos.js");
                    background-size: cover;
                }

                #main {
                    background-color: rgba(255, 255, 255, 1);
                }
    
                #main h1 {
                    display: block;
                    margin-left: 20%;
                    margin-top: 10px;
                    margin-bottom: 0px;
                    font-size: 64px;
                }
            `}</style>
        </>
    )
}