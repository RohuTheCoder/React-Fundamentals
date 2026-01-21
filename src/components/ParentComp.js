import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
           name: 'Rohini' 
        }
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
            name: this.state.name === 'Rohini' ? 'Vishwas' : 'Rohini'
        })
      }, 2000)  
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    render() {
      console.log('*****************Parent Comp render*****************')
      return (
        <div>
            Parent Component
            <MemoComp name={this.state.name} />
            {/* <RegComp name={this.state.name} /> */}
            {/* <PureComp name={this.state.name} /> */}
        </div>
      )
    }
}

export default ParentComp