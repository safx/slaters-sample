import React from 'react'
import styles from './App.css'
import { Editor, Raw } from 'slate'

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, { terse: true })

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            state: initialState
        }
    }

    onChange(state) {
        console.log(state)
        this.setState({ state })
    }

    render() {
        return (<Editor
                state={this.state.state}
                onChange={this.onChange.bind(this)}
                />
               )
    }
}

export default App
