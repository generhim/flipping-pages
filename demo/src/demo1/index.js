import React from 'react'
import {render} from 'react-dom'

import '../style.css'
import './style.css'
import App from './app'

document.title = 'flipping-pages - Demo 1'

render(<App></App>, document.querySelector('#root'))