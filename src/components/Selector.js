import React, { Component } from 'react';
import plugin from '../plugins/mobileselect';

type Props = {
    data: Object,
    title: String,
    onSelect: Function
}

class Selector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slotID: ''
    }
  }

  componentDidMount() {
    const self = this;
    const mobile = new MobileSelect({
      trigger: "#trigger",
      title: self.props.title,
      cancelBtnText: "Cancel",
      ensureBtnText: "Confirm date",
      position:[4, 1, 1],
      triggerDisplayData: false,
      wheels: [
          {data: this.props.data}
      ],
      callback:function(indexArr, data){
        const slotID = self.props.data[indexArr[0]].childs[indexArr[1]].childs[indexArr[2]].children[0];
        self.setState({slotID})
      }
    });
  }

  render() {
    return (
      <div className="slot-container">
        <h1 id="trigger"></h1>
      </div>
    );
  }
}

export default Selector;
