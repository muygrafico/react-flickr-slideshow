import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'
import SearchBox from './components/SearchBox.js'
import { SearchImagesByName } from './actions/SearchImagesByName'

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => ({
 SearchImagesByName: () => dispatch(SearchImagesByName())
})

class App extends Component {
  SearchImagesByName (event) {
    console.log(this.props)
    this.props.SearchImagesByName()
  }

  render () {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo}
                  className='App-logo' alt='logo'
          />
              <SearchBox />
                  <h1 className='App-title'>Welcome to React</h1>
            </header>
                <p className='App-intro'>
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
                  <button onClick={(e) => this.SearchImagesByName(e)}>Test redux action</button>
        </div>
    )
  }
}

App.propTypes = {
  SearchImagesByName: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
