import React from 'react'

class SearchBar extends React.Component {

    state = {term : '' }

    onChangeInput = event => {
        this.setState( {term : event.target.value } )
    }

    onSubmitInput = event => {
        event.preventDefault() ;

        this.props.onSearchSubmit(this.state.term)

    }

    render() {
        return (
            <div className='ui segment' >
                <form className='ui form' onSubmit={this.onSubmitInput}>
                    <label>Viideo Search</label>
                    <input type="text" onChange = {this.onChangeInput} value={this.state.term}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;