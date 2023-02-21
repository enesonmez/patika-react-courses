import React from 'react'
import './index.css'

import { Button } from 'entekui'
import 'entekui/dist/index.css'

const App = () => {
  return (
    <div style={{margin:50}}>
      <Button type='primary' onClick={() => alert('hello')}>
        Primary Button
      </Button>
      <br/> <br/>
      <Button type='default-primary' onClick={() => alert('hello')}>
        Default Button
      </Button>
      <br/> <br/>
      <Button type='dashed-primary' onClick={() => alert('hello')}>
        Dashed Button
      </Button>
      <br/> <br/>
      <Button type='link-primary' onClick={() => alert('hello')}>
        Link Button
      </Button>
      <br/> <br/>
      <Button type='text' onClick={() => alert('hello')}>
        Text Button
      </Button>
    </div>
  )
}

export default App
