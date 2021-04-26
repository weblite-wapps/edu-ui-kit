import React from 'react'
import PropTypes from 'prop-types'

import { Button as MuiButton } from '@material-ui/core'
import useStyle from './button.style'

export const Button = ({ children, variant, ...props }) => {
  const classes = useStyle()
  return (
    <MuiButton classes={classes} variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
}

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
}
