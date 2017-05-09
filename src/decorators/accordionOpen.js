import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleArticle={this.toggleArticle}/>
    }

    toggleArticle = id => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        if(id == this.state.openArticleId) {
            this.setState({
                openArticleId: null
            })
        } else {
            this.setState({
                openArticleId: id
            })
        }

    }

}