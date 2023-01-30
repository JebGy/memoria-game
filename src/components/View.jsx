import { useState } from 'react';
import Game from './Game.jsx';
import './style-components/reset.css';
import './style-components/style-view.css';
export default function View() {

    const [reload, setreload] = useState(false);
    

    return (
        <div>
            <div className="game-container">
                <div className='data'>
                    <h1>Memori - A</h1>
                    <h2>Match the pairs</h2>
                    <p>Created by Favio G. Munayco R.</p>
                </div>
                <Game reload={reload}/>
            </div>
        </div>
    );
}