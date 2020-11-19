import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Default = () => <Spacer size={8} isVisible={true}></Spacer>
export const Horizontal = () => (
  <Spacer.Horizontal size={8} isVisible={true}></Spacer.Horizontal>
)
export const Vertical = () => (
  <Spacer.Vertical size={12} isVisible={true} maxHeight={200}></Spacer.Vertical>
)
