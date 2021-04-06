import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../actions/getItems";
import { bindActionCreators } from "redux";
import Item from "./Item";

import "../App.css";
// const phone3initalText = "our new component";

class Phone3 extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div className="phone-block">
        <div className="android">
          <div className="small">
            {this.props.items &&
              this.props.items.map((item) => {
                return <Item key={item.id} item={item}></Item>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getItems }, dispatch);

const mapStateToProps = (state) => {
  const { itemsReducer } = state;
  return { items: itemsReducer };
};
export default connect(mapStateToProps, mapDispatchToProps)(Phone3);
