import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="centered">
                <input
                input="text"
                name="title"
                placeholder="Write a Task"
                onChange={this.onChange}
                value={this.state.title} />
                <br />
                <br />
                <textarea
                name="description"
                placeholder="Write a description"
                onChange={this.onChange}
                value={this.state.description} />
                <br />
                <button type="submit"> Save a task </button>
            </form>
        )
    }


}
