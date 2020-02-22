
import Menu from "./Menu";
import Bottom from "./Bottom";
export default function Layout(props) {
    return (
        <body>
            {props.children}
            <Menu></Menu>
            <Bottom></Bottom>
            <style jsx>{`
                body {
                    padding: 0px;
                    margin: 0px;
                    background-color: rgba(255, 255, 255);
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
                }
            `}</style>
        </body>
    )
}