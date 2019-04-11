import React from 'react'

import styled from 'styled-components'

export default friend = props => {
  return (
    <div>
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
      {/* <p>{props.friend.hometown}</p> */}
    </div>
  )
}