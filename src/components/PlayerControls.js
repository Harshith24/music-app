import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward, faPlaceOfWorship} from '@fortawesome/free-solid-svg-icons';

function PlayerControls(props){
    return (
        <React.Fragment>
            <div className="c-player--controls">
                <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                </button>
                <button className="skip-btn" onClick={() => props.SkipSong()}>
                    <FontAwesomeIcon icon={faForward} />
                </button> <br />              
            </div>
            <div className="volume-slider">
                <input
                    type="range"
                    min={0}
                    step={0.02}
                    max={1}
                    //value={props.volume}
                    onChange={event => {
                        // setVolume(event.target.valueAsNumber)
                        props.setV(event.target.valueAsNumber)                        
                        //console.log(event.target.valueAsNumber);
                    }}
                />        
            </div>
        </React.Fragment>
        
    )
}

export default PlayerControls