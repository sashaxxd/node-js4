class MenWomen extends React.Component {
    constructor(props) {
        super(props);

        this.Gender2 = this.Gender2.bind(this);
        this.state = {
            showMen: false,
            showWomen: false,
            showContent: false,
            showHit: true,
            selectedOption: ''
        };
    }

    Gender2(e) {
        this.setState({ showHit: false });
        this.setState({ selectedOption: e.target.value });
        alert(e.target.value);
        if (e.target.value === 'menw') {
            this.setState({ showWomen: false });
            this.setState({ showMen: true });
            this.setState({ showContent: true });
        } else {
            this.setState({ showMen: false });
            this.setState({ showWomen: true });
            this.setState({ showContent: true });
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { id: 'wb_LayoutGrid1' },
                React.createElement(
                    'div',
                    { id: 'LayoutGrid1' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-1' },
                            React.createElement(
                                'div',
                                { id: 'wb_Text1' },
                                React.createElement(
                                    'span',
                                    { id: 'wb_uid0' },
                                    '\u0412\u044B\u0431\u0438\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u043E\u043B'
                                )
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_LayoutGrid2' },
                                React.createElement(
                                    'div',
                                    { id: 'LayoutGrid2' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'form',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'col-1' },
                                                React.createElement(
                                                    'div',
                                                    { id: 'wb_RadioButton1' },
                                                    React.createElement('input', { type: 'radio', id: 'RadioButton1', name: 'sex', value: 'men', onChange: this.Gender2, checked: this.state.selectedOption === "men" }),
                                                    React.createElement('label', { htmlFor: 'RadioButton1' })
                                                ),
                                                React.createElement(
                                                    'label',
                                                    { htmlFor: 'RadioButton1', id: 'Label1' },
                                                    '\u041C\u0443\u0436\u0441\u043A\u043E\u0439'
                                                )
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'col-2' },
                                                React.createElement(
                                                    'div',
                                                    { id: 'wb_RadioButton2' },
                                                    React.createElement('input', { type: 'radio', id: 'RadioButton2', name: 'sex', value: 'women', onChange: this.Gender2, checked: this.state.selectedOption === "women" }),
                                                    React.createElement('label', { htmlFor: 'RadioButton2' })
                                                ),
                                                React.createElement(
                                                    'label',
                                                    { htmlFor: 'RadioButton2', id: 'Label2' },
                                                    '\u0416\u0435\u043D\u0441\u043A\u0438\u0439'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(Hit, {
                hidden: this.state.showHit
            }),
            React.createElement(Sex, {
                men: this.state.showMen,
                women: this.state.showWomen,
                content: this.state.showContent
            })
        );
    }
}

class Hit extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'wb_LayoutGrid5', style: { display: this.props.hidden ? 'block' : 'none' } },
            React.createElement(
                'div',
                { id: 'LayoutGrid5' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement('div', { className: 'col-1' })
                )
            )
        );
    }
}

class Sex extends React.Component {

    render() {
        return React.createElement(
            'div',
            { id: 'sex' },
            React.createElement(
                'div',
                { id: 'wb_LayoutGrid3', style: { display: this.props.men ? 'block' : 'none' } },
                React.createElement(
                    'div',
                    { id: 'LayoutGrid3' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-1' },
                            React.createElement(
                                'div',
                                { id: 'wb_Image1' },
                                React.createElement('img', { src: 'images/Man silhouette W.png', id: 'Image1', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_Text2' },
                                React.createElement(
                                    'span',
                                    { id: 'wb_uid1' },
                                    '\u0412\u0430\u0448 \u0440\u043E\u0441\u0442'
                                )
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_LayoutGrid4' },
                                React.createElement(
                                    'div',
                                    { id: 'LayoutGrid4' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-1' },
                                            React.createElement(
                                                'div',
                                                { id: 'wb_Text3' },
                                                React.createElement(
                                                    'span',
                                                    { id: 'wb_uid2' },
                                                    '\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'wb_LayoutGrid6', style: { display: this.props.women ? 'block' : 'none' } },
                React.createElement(
                    'div',
                    { id: 'LayoutGrid6' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-1' },
                            React.createElement(
                                'div',
                                { id: 'wb_Image3' },
                                React.createElement('img', { src: 'images/black-148552_960_720.png', id: 'Image3', alt: '' })
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_Text4' },
                                React.createElement(
                                    'span',
                                    { id: 'wb_uid3' },
                                    '\u0412\u0430\u0448 \u0440\u043E\u0441\u0442'
                                )
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_LayoutGrid7' },
                                React.createElement(
                                    'div',
                                    { id: 'LayoutGrid7' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-1' },
                                            React.createElement(
                                                'div',
                                                { id: 'wb_Text5' },
                                                React.createElement(
                                                    'span',
                                                    { id: 'wb_uid4' },
                                                    '\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'wb_LayoutGrid9', style: { display: this.props.content ? 'block' : 'none' } },
                React.createElement(
                    'div',
                    { id: 'LayoutGrid9' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-1' },
                            React.createElement(
                                'div',
                                { id: 'wb_Text7' },
                                React.createElement(
                                    'span',
                                    { id: 'wb_uid5' },
                                    '\u041E\u0434\u0435\u0436\u0434\u0430 \u043C\u0443\u0436\u0441\u043A\u0430\u044F \u043D\u0430 \u0440\u043E\u0441\u0442 180 \u0441\u043C'
                                )
                            ),
                            React.createElement(
                                'div',
                                { id: 'wb_LayoutGrid10' },
                                React.createElement(
                                    'div',
                                    { id: 'LayoutGrid10' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-1' },
                                            React.createElement(
                                                'div',
                                                { id: 'wb_Text8' },
                                                React.createElement(
                                                    'span',
                                                    { id: 'wb_uid6' },
                                                    '\u0428\u0442\u0430\u043D\u044B',
                                                    React.createElement('br', null),
                                                    '\u041D\u043E\u0441\u043A\u0438',
                                                    React.createElement('br', null),
                                                    '\u0422\u0440\u0443\u0441\u044B'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

class Footer extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'wb_LayoutGrid8' },
            React.createElement(
                'div',
                { id: 'LayoutGrid8' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-1' },
                        React.createElement(
                            'div',
                            { id: 'wb_Text6' },
                            React.createElement(
                                'span',
                                { id: 'wb_uid7' },
                                '2018'
                            )
                        )
                    )
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(MenWomen, null), document.getElementById('menu'));

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));
