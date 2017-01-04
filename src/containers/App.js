import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { selectFilter, fetchData } from '../actions';
import formatChartData from '../util/formatChartData.js';


class App extends Component {
  static propTypes = {
    selectedAPI: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedAPI } = this.props
    dispatch(fetchData(selectedAPI))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedAPI !== this.props.selectedAPI) {
      const { dispatch, selectedAPI } = nextProps
      dispatch(fetchData(selectedAPI))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(selectFilter(nextReddit))
  }

  render() {
    const { selectedAPI, data, isFetching } = this.props;
    const chartData = data.length && formatChartData(data);
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedAPI, myIndiaReport } = state;
  const {
    isFetching,
    data: data
  } = myIndiaReport[selectedAPI] || {
    isFetching: true,
    data: []
  }

  return {
    selectedAPI,
    data,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
