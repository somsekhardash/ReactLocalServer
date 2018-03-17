webpackJsonp([6],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionTitle = function (_React$Component) {
    _inherits(SectionTitle, _React$Component);

    function SectionTitle(props) {
        _classCallCheck(this, SectionTitle);

        return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).call(this, props));
    }

    _createClass(SectionTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'section-title' },
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'divider dark' },
                    _react2.default.createElement('i', { className: 'icon-graduation' })
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.desc
                )
            );
        }
    }]);

    return SectionTitle;
}(_react2.default.Component);

exports.default = SectionTitle;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(14);

var _index3 = __webpack_require__(68);

var _index4 = _interopRequireDefault(_index3);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_React$Component) {
    _inherits(Services, _React$Component);

    function Services(props) {
        _classCallCheck(this, Services);

        var _this = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));

        _this.state = {
            serviceData: []
        };
        return _this;
    }

    _createClass(Services, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                serviceData: nextProps.serviceData.service.items
            });
        }
    }, {
        key: 'makeServiceData',
        value: function makeServiceData() {
            if (!!this.state.serviceData) {
                return this.state.serviceData.map(function (item, i) {
                    return _react2.default.createElement(_index4.default, { item: item });
                    // return  <ProtItem actions={this.props.actions} fullData={this.state.filterData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'services', 'class': 'services-section section-space-padding' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'container' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'row' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'col-sm-12' },
                            _react2.default.createElement(_index2.default, { title: 'My Services.', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' })
                        )
                    ),
                    this.makeServiceData()
                )
            );
        }
    }]);

    return Services;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        serviceData: state.serviceReducer
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Services);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceItem = function ServiceItem(_ref) {
    var item = _ref.item;

    return _react2.default.createElement(
        'div',
        { className: 'col-md-4 col-sm-6' },
        _react2.default.createElement(
            'div',
            { className: 'services-detail' },
            _react2.default.createElement('i', { className: 'icon-screen-' + item.logo + ' color-1' }),
            _react2.default.createElement(
                'h3',
                null,
                item.title
            )
        )
    );
};

ServiceItem.propTypes = {
    item: _react2.default.propTypes
};
exports.default = ServiceItem;

// import React from 'react';
// import { render } from 'react-dom';

// export default class SectionTitle extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return  <div className="section-title">
//             <h2>{this.props.title}</h2>
//             <div className="divider dark">
//             <i className="icon-graduation"></i>
//             </div>
//             <p>{this.props.desc}</p>
//         </div>

//     }
// }

/***/ })

},[123]);
//# sourceMappingURL=index.js.map