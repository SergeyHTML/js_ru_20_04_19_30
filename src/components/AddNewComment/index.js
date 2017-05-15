import React, { Component } from 'react'
import './style.css'

class AddNewComment extends Component {
    state = {
        user: '',
        text: '',
    }

    render() {
        //подсветку не сделал?
        return (
            <div>
                <p>
                    <label>User</label>:
                    <input ref="user" type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                </p>
                <p>
                    <label>Text comment</label>:
                    <textarea  value={this.state.text} onChange = {this.handleChange('text')}>

                    </textarea>
                </p>
            </div>
        )
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!maxValidators[field](value)) return

        if(!minValidators[field](value)){
        }

        this.setState({
            [field]: value
        })
    }

}
const minValidators = {
    user: (text) => text.length > 5,
    text: (text) => text.length > 5
}

const maxValidators = {
    user: (text) => text.length < 20,
    text: (text) => text.length < 20
}

export default AddNewComment
