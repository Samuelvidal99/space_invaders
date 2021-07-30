import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import space_ship from './teste.gif'

class Player extends React.Component {
    handleKeyPress = (event) => {
        const valor = document.getElementById("spaceShip").style.getPropertyValue("left");
        var aux = valor.slice(0,3);
        aux = parseInt(aux);

        if(event.key === "d" || event.key === "ArrowRight") {  
            aux = aux + 20;
            aux = aux.toString()
            document.getElementById("spaceShip").style.left = aux + 'px';
        }
        if(event.key === "a" || event.key === "ArrowLeft") {  
            aux = aux - 8;
            aux = aux.toString()
            document.getElementById("spaceShip").style.left = aux + 'px';
        }
    }

    handleOnClick = (event) => {
        alert('aaaa');
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentDidUnmount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }
    
    render() {
        return(
            <img style={{position:'relative',top:250,left:620}} id="spaceShip" className="space-ship" alt="space_ship" src={space_ship} onClick={this.handleOnClick}></img>
        );
    }
}

class Game extends React.Component {
    /*handleKeyDown = (event) => {
        if(event.key === "Enter") {
            alert("aaa");
        }
    }*/
    
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <h1 className="titulo">Space Invaders</h1>
                    <Player/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);