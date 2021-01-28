import React from 'react'

const Messagebox = (props) => {
  return (
<div className={`alert alert-${props.variant}||info`}>
{props.children}
</div>
  )
}

export default Messagebox
