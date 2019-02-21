import React, { Component } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

// //增加redux
// import { connect } from "react-redux";
// import TodoActions from "@/store/actions/todo";
// //

import TodoList from "./TodoList";
import todoCss from "./todo.module.scss";

class Todo extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      list: []
    };

    this.inputRef = React.createRef();
  }

  handlePressEnter = e => {
    this.setState({
      list: [...this.state.list, { id: this.state.list.length + 1, name: e.target.value }]
    });
    this.inputRef.current.state.value = "";

    // this.props.onSaveTodoItem({ id: this.props.list.length + 1, name: e.target.value });
  };

  handleDeleteItem = id => {
    let list = this.state.list.filter(item => item.id != id);
    this.setState({
      list: list
    });
    // this.props.onDeleteTodoItem(id);
  };

  render() {
    let { list } = this.state;
    // let { list } = this.props;

    return (
      <div className={todoCss.content}>
        <div>
          <Input onPressEnter={this.handlePressEnter} ref={this.inputRef}/>
        </div>

        <div className={todoCss.todoList}>
          <TodoList list={list} onDelete={this.handleDeleteItem} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // // this.props.onAsyncGetTodoList();
  }
}

// //为属性指定类型检查
// Todo.propTypes = {
//   list: PropTypes.array,
//   onSaveTodoItem: PropTypes.func,
//   onDeleteTodoItem: PropTypes.func,
//   // onAsyncGetTodoList: PropTypes.func
// };


export default Todo;

// export default connect(
//   state => ({
//     list: state.Todo.list
//   }),
//   dispatch => ({
//     onSaveTodoItem: item => {
//       dispatch(TodoActions.saveTodoItem(item));
//     },
//     onDeleteTodoItem: id => {
//       dispatch(TodoActions.deleteTodoItem(id));
//     },
//     // onAsyncGetTodoList: param => {
//     //   dispatch(TodoActions.asyncGetTodoList(param));
//     // }
//   })
// )(Todo);
