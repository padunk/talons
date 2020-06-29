import * as React from 'react'
import { Navigation } from '../Navigation/Navigation'

export function Layout(props: any) {
  return (
    <React.Fragment>
      <Navigation />
      {props.children}
    </React.Fragment>
  )
}
