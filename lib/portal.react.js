import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class Portal extends React.Component {


  static propTypes = {
    children:   PropTypes.element.isRequired,
    className:  PropTypes.string
  }


  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { className } = this.props;

    this.node = document.createElement('div');
    if (className) this.node.className = className;
    document.body.appendChild(this.node);

    this.renderPortal(this.props);
  }


  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps);
  }


  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  }


  Children = () => {
    return(this.props.children);
  }


  renderPortal() {
    const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;
    const Children = this.Children;

    this.portal = renderSubtreeIntoContainer(this, <Children />, this.node);
  }


  render() {
    return React.DOM.noscript();
  }


}
