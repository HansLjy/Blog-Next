export default function Scroll() {
    const scroll = () => {
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <img src="../static/scroll-down.svg" className="scroll" onClick={scroll} id="scroll"></img>
            <style jsx>{`
                #scroll {
                    position: absolute;
                    height: 50px;
                    bottom: 10px;
                    left: 50%;
                    transform: translate(-50%, 0);
                }
            `}</style>
        </>
    )
}