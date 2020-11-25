import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Spacer.module.css'

// FIXME: Use tokens.css intead
import { choices } from '../../tokens'
// TODO: Move to helpers.js
const getSize = (size) => choices.spacing[size]

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      width: getSize(size),
      maxHeight,
      height: '100vh',
    }}
  ></div>
)

Vertical.defaultProps = {
  maxHeight: '100%',
}

Vertical.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
}

export default Vertical
