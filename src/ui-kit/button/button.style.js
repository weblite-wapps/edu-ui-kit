import { darken, makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: -0.08,
    fontSize: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5),
  },
}))
