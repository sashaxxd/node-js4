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
            </div>
        )



    }
}


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


class Footer extends React.Component{
    render(){
        return (
            <div id="wb_LayoutGrid8">
                <div id="LayoutGrid8">
                    <div className="row">
                        <div className="col-1">
                            <div id="wb_Text6">
                                <span id="wb_uid7">2018</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )



    }
}




ReactDOM.render(
    <MenWomen/>,

    document.getElementById('menu')
);


ReactDOM.render(
    <Footer/>,

    document.getElementById('footer')
);