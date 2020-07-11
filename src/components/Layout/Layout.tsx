import * as React from 'react'
import { Navigation } from '../Navigation/Navigation'

export function Layout(props: any) {
  return (
    <React.Fragment>
      <Navigation authUser={props.authUser} />
      {props.children}
    </React.Fragment>
  )
}
