import React from 'react';
import { hot } from 'react-hot-loader'

class Hit extends React.Component{
    render(){
        return (
            <div id="wb_LayoutGrid5" style={{display: this.props.hidden ? 'block' : 'none' }}>
                <div id="LayoutGrid5">
                    <div className="row">
                        <div className="col-1">
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}

export default hot(module)(Hit);