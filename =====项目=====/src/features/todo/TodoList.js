import React, { Component } from "react";
import PropTypes from "prop-types";

const todoItem = {
  width: "100%",
  border: "1px solid #c7c7c7",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "4px",
  padding: "0 20px",
  textAlign: "left"
};

class TodoList extends Component {
  constructor(props, context) {
    super(props);
  }

  handleDeleteItem = id => {
    this.props.onDelete(id);
  };

  render() {
    let { list } = this.props;
    return (
      <div>
        {list.map(item => (
          <TodoItem key={item.id} onDeleteItem={() => this.handleDeleteItem(item.id)}>
            {item.name}
          </TodoItem>
        ))}
      </div>
    );
  }

  componentDidMount() {}
}

let TodoItem = props => {
  return (
    <div onClick={props.onDeleteItem} style={todoItem}>
      {props.children}
    </div>
  );
};

//为属性指定类型检查
TodoList.propTypes = {
  list: PropTypes.array,
  onDelete: PropTypes.func
};

TodoList.defaultProps = {
  list: []
};

export default TodoList;
