import React from 'react'
import './css_files/Queue.scss';
import { thoughtType } from './Mixbot';
import { v4 as uuidv4 } from 'uuid';

export default function Brain({ decisions, mixType }) {

    const entryColor = type => {
        let color = '#7f7b80';
        switch (type) {
            case thoughtType.SUCCESS:
                color = '#48e26f';
                break;
            case thoughtType.FAILURE:
                color = '#e24848';
                break;
            case thoughtType.MIX:
                color = 'tomato';
                break;
            default:
                break;
        }
        
        return color;
    }

    return (
        <div className="queue-header" style={{ flexGrow: 1 }}>
            <h2>MIXBOT BRAIN // {mixType && mixType}</h2>
            <div className="queue">
                {decisions.map(thought => (
                    <div key={uuidv4()}>
                        {thought.display && <div className={"entry"}>
                            <p style={{ color: `${entryColor(thought.type)}` }}>{thought.body}</p>
                        </div>}
                </div>))}
            </div>
        </div>
    )
}
