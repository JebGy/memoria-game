import './style-components/reset.css';
import './style-components/style-view.css';
export default function Reload(props) {
    if(props.reload){
        return (
            <button onClick={() => window.location.reload()} className="can-reload">Play Again!</button>
        );
    }else{
        return (
            <button onClick={() => window.location.reload()} className="reload">Play Again!</button>
        );
    }
}