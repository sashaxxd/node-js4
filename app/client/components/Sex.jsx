import React from 'react';
import { hot } from 'react-hot-loader'

class Sex extends React.Component{

    render(){
        return (

            <div id="sex" >
                <div id="wb_LayoutGrid3" style={{display: this.props.men ? 'block' : 'none' }}>
                    <div id="LayoutGrid3">
                        <div className="row">
                            <div className="col-1">
                                <div id="wb_Image1">
                                    <img src="images/Man silhouette W.png" id="Image1" alt=""/>
                                </div>
                                <div id="wb_Text2">
                                    <span id="wb_uid1">Ваш рост</span>
                                </div>
                                <div id="wb_LayoutGrid4">
                                    <div id="LayoutGrid4">
                                        <div className="row">
                                            <div className="col-1">
                                                <div id="wb_Text3">
                                                    <span id="wb_uid2">Тут будет ползунок</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="wb_LayoutGrid6" style={{display: this.props.women ? 'block' : 'none' }}>
                    <div id="LayoutGrid6">
                        <div className="row">
                            <div className="col-1">
                                <div id="wb_Image3">
                                    <img src="images/black-148552_960_720.png" id="Image3" alt=""/>
                                </div>
                                <div id="wb_Text4">
                                    <span id="wb_uid3">Ваш рост</span>
                                </div>
                                <div id="wb_LayoutGrid7">
                                    <div id="LayoutGrid7">
                                        <div className="row">
                                            <div className="col-1">
                                                <div id="wb_Text5">
                                                    <span id="wb_uid4">Тут будет ползунок</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="wb_LayoutGrid9" style={{display: this.props.content ? 'block' : 'none' }}>
                    <div id="LayoutGrid9">
                        <div className="row">
                            <div className="col-1">
                                <div id="wb_Text7">
                                    <span id="wb_uid5">Одежда мужская на рост 180 см</span>
                                </div>
                                <div id="wb_LayoutGrid10">
                                    <div id="LayoutGrid10">
                                        <div className="row">
                                            <div className="col-1">
                                                <div id="wb_Text8">
                                                    <span id="wb_uid6">Штаны<br/>Носки<br/>Трусы</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}

export default hot(module)(Sex);

