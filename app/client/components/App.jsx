import React from 'react';
import { hot } from 'react-hot-loader'

import  Hit from './Hit.jsx';
import  Sex from './Sex.jsx';
import Footer from  './Footer.jsx';

class MenWomen extends React.Component{
    constructor(props){
        super(props);

        this.Gender2 = this.Gender2.bind(this);
        this.state = {
            showMen: false,
            showWomen: false,
            showContent: false,
            showHit: true,
            selectedOption: ''
        }



    }


    Gender2(e) {
        this.setState({showHit: false});
        this.setState({ selectedOption: e.target.value });
        alert(e.target.value);
        if(e.target.value === 'men'){
            this.setState({showWomen: false});
            this.setState({showMen: true});
            this.setState({showContent: true});
        }
        else {
            this.setState({showMen: false});
            this.setState({showWomen: true});
            this.setState({showContent: true});
        }




    }


    render(){
        return (
            <div>
                <div id="wb_LayoutGrid1">
                    <div id="LayoutGrid1">
                        <div className="row">
                            <div className="col-1">
                                <div id="wb_Text1">
                                    <span id="wb_uid0">Выбирите ваш пол</span>
                                </div>
                                <div id="wb_LayoutGrid2">
                                    <div id="LayoutGrid2">
                                        <div className="row">
                                            <form>
                                                <div className="col-1">
                                                    <div id="wb_RadioButton1">
                                                        <input type="radio" id="RadioButton1" name="sex" value="men"  onChange={this.Gender2} checked={this.state.selectedOption === "men"}/><label  htmlFor="RadioButton1" />
                                                    </div>
                                                    <label htmlFor="RadioButton1" id="Label1">Мужской</label>
                                                </div>
                                                <div className="col-2">
                                                    <div id="wb_RadioButton2">
                                                        <input type="radio" id="RadioButton2" name="sex" value="women" onChange={this.Gender2} checked={this.state.selectedOption === "women"}/><label htmlFor="RadioButton2" />
                                                    </div>
                                                    <label htmlFor="RadioButton2" id="Label2">Женский</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Hit
                    hidden = {this.state.showHit}
                />

                <Sex
                    men = {this.state.showMen}
                    women = {this.state.showWomen}
                    content = {this.state.showContent}
                />
                <Footer/>
            </div>
        )



    }
}


export default hot(module)(MenWomen);
