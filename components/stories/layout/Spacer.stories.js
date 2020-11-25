import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Zero = () => <Spacer size="0" isVisible={true}></Spacer>
export const One = () => <Spacer size="px" isVisible={true}></Spacer>
export const extraSmall = () => <Spacer size="xs" isVisible={true}></Spacer>
export const Small = () => <Spacer size="sm" isVisible={true}></Spacer>
export const Medium = () => <Spacer size="md" isVisible={true}></Spacer>
export const Large = () => <Spacer size="lg" isVisible={true}></Spacer>
export const Horizontal = () => (
  <Spacer.Horizontal size={8} isVisible={true}></Spacer.Horizontal>
)
export const Vertical = () => (
  <Spacer.Vertical size={12} isVisible={true} maxHeight={200}></Spacer.Vertical>
)
