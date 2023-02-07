import React, { Component } from "react";
import "./Todo.scss";
import { GoTrashcan } from "react-icons/go";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: {
        title: "",
        status: "pending",
      },
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...res.data],
        }));
      })
      .catch();
  };

  //for change
  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      input: {
        ...prevState.input,
        [e.target.name]: e.target.value,
      },
    }));
  };

  //submit from form
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/todos", this.state.input)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...prevState.todos, this.state.input],
          input: {
            title: "",
            status: "",
          },
        }));
      })
      .catch();
  };

  //deltate
  handleDelate = (id) => {
    axios
      .delete(`http://localhost:5050/todos/${id}`)
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          todos: [...prevState.todos.filter((data) => data.id !== id)],
        }));
      })
      .catch();
  };

  render() {
    const { todos, input } = this.state;
    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <h1>Todo app</h1>
                  <hr />
                  <form
                    onSubmit={this.handleSubmit}
                    action=""
                    className="d-flex"
                  >
                    <input
                      onChange={this.handleChange}
                      name="title"
                      value={input.title}
                      className="form-control"
                      type="text"
                    />
                    &nbsp;
                    <select
                      onChange={this.handleChange}
                      name="status"
                      value={input.status}
                      id=""
                      className="form-control"
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="cancel">Cancel</option>
                    </select>{" "}
                    &nbsp;
                    <button className="btn btn-primary">Done</button>
                  </form>
                  <hr />
                  <ul className="list-group">
                    {todos.map(({ title, status, id }, index) => {
                      let bgColor = "blue";

                      switch (status) {
                        case "pending":
                          bgColor = "yellow";
                          break;

                        case "completed":
                          bgColor = "green";
                          break;

                        case "cancel":
                          bgColor = "red";
                          break;

                        default:
                          bgColor = "white";
                      }
                      return (
                        <li
                          style={{ backgroundColor: bgColor }}
                          key={index}
                          className=" list-group-item d-flex align-items-center justify-content-between"
                        >
                          <div className=" d-flex align-items-center justify-content-between">
                            <span>{title}</span>
                          </div>
                          <button
                            onClick={() => this.handleDelate(id)}
                            className="icon"
                          >
                            <GoTrashcan />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
