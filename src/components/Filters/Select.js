import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../AC/index'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const {articles, selection} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {selection}
                    onChange = {this.handleSelectionChange}
                    multi = {true}
            />
        )
    }

    handleSelectionChange = (selection) => {
        const {changeSelection} = this.props
        changeSelection(selection.map(option => option.value))
    }
}

export default connect((state) => ({
    articles: state.articles,
    selection: state.filters.selection
}), {changeSelection})(SelectFilter)