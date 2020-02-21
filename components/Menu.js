import styled from 'styled-components'
import content from '../content.json';

const SideBar = styled.div `
    background-color: #212121;
    position: fixed;
    right: 0px;
    height: 100vh;
    width: 20%;
    transform: translateX(${props => props.showMenu ? '0px' : '100%'});
    transition: transform 0.5s ease;
`;

const CloseButton = styled.div `
    position: absolute;
    right: 20px;
    top: 20px;
    margin: 0px;
    padding: 0px;
`;

function Column(props) {
    return (
        <>
            <div> {props.name} </div>
            <style jsx>{`
                div {
                    padding: 5px;
                    font-size: 28px;
                    border-color: rgb(0, 0, 0);
                    background-color: rgba(255, 255, 255, 0.3);
                    height: 40px;
                    width: 100%;
                    transition: background-color 0.5s ease;
                }
                div:hover {
                    background-color: rgba(255, 255, 255, 1);
                    transition: background-color 0.5s ease;
                }
            `}</style>
        </>
    )
}

class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu() {
        this.setState({
            showMenu: true
        });
    }

    closeMenu() {
        this.setState({
            showMenu: false
        })
    }
    render() {
        return (
            <>
                <a className="menu" onClick={this.openMenu}>III MENU</a>
                <SideBar showMenu={this.state.showMenu}>
                    <CloseButton onClick={this.closeMenu}><img src="../static/close.svg"></img></CloseButton>
                    <h1>Menu</h1>
                    <Column name="About"></Column>
                    <Column name="Contact"></Column>
                    {content.catalogues.map(name => (
                        <Column name={name}></Column>
                    ))}
                </SideBar>
                <style jsx>{`
                    h1 {
                        display: inline-block;
                        margin: 0px;
                        padding: 10px;
                        color: rgba(255, 255, 255, 1);
                        font-size: 40px;
                    }
                    img {
                        width: 30px;
                    }
                    .menu {
                        display: inline-block;
                        background-color: rgba(0, 0, 0, 0.5);
                        border-color: rgba(255, 255, 255, 0.5);
                        border-radius: 10%;
    
                        padding: 10px;
                        
                        position: fixed;
                        right: 40px;
                        top: 40px;
    
                        color: rgba(255, 255, 255, 0.8);
                        text-decoration: none;
                        font-family: 'Open Sans',sans-serif;
    
                        transition: all ease 0.5s;
                    }
    
                    .menu:hover {
                        color: rgba(0, 0, 0, 0.8);
                        background-color: rgba(255, 255, 255, 0.5);
                        border-color: rgba(0, 0, 0, 0.5);
    
                        transition: all ease 0.5s;
                    }`
                }</style>
            </>
        );
    }
}

export default Menu;