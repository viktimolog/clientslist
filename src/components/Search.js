import React from 'react'
import {Input} from 'semantic-ui-react'

export default class Search extends React.Component {
    state = {text: ''}

    handleTextChange = event => {
        this.setState({
            text: event.target.value.trim()
        })
        this.props.findItems(event.target.value.trim());
    }

    render() {
        return (
            <Input
                icon='search'
                value = {this.state.text}
                onChange={this.handleTextChange}

            />
        )
    }
}