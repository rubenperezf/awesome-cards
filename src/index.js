import React, { useEffect, useState } from 'react'
import classes from './styles.module.css'
import HelpIcon from '@material-ui/icons/Help'
import { makeStyles } from '@material-ui/core/styles'

import {
  Box,
  Button,
  CircularProgress,
  Fade,
  Grow,
  LinearProgress,
  Tooltip,
  Typography
} from '@material-ui/core'

const useStyles = (props) =>
  makeStyles((theme) => ({
    linear: {
      width: theme.spacing(props.units || 0)
    }
  }))
export const AwesomeCard = ({
  cardHeight,
  cardWidth,
  informationIcon,
  iconColor,
  tooltipText,
  avatarBackgroundColor,
  avatarImage,
  topImageSrc,
  title,
  subtitle,
  text,
  mainButtonText,
  buttonBacgroundColor,
  buttonTextColor,
  mainButtonFunc,
  mainButtonSpinner = false,
  mainButtonDisabled = false,
  mainButtonLinear = false,
  ...props
}) => {
  const [transition, setTransition] = useState(false)
  const { linear } = useStyles(props)()

  useEffect(() => {
    setTimeout(() => {
      setTransition(true)
    }, 200)
  })

  return (
    <Grow in={transition}>
      <Box
        className={classes.container}
        style={{
          height: cardHeight ? cardHeight : '500px',
          width: cardWidth ? cardWidth : '400px'
        }}
      >
        {informationIcon && (
          <Tooltip title={tooltipText ? tooltipText : ''}>
            <HelpIcon
              className={classes.informationIcon}
              style={{ color: iconColor ? iconColor : 'red' }}
            />
          </Tooltip>
        )}

        <Box className={classes.imageContainer}>
          {avatarImage ? (
            <Box
              className={classes.avatarContainer}
              display='flex'
              justifyContent='center'
              alignItems='center'
              style={{
                backgroundColor: avatarBackgroundColor
                  ? avatarBackgroundColor
                  : '#F5F5F5'
              }}
            >
              <img src={topImageSrc} className={classes.avatarImage} />
            </Box>
          ) : (
            <img src={topImageSrc} className={classes.topImage} />
          )}
        </Box>
        <Box className={classes.textContainer}>
          <Typography className={classes.mainTitle}>{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <Typography>
            {text && text.length > 200 ? text.substring(0, 200) + '...' : text}
          </Typography>
        </Box>
        <Box className={classes.mainButtonContainer}>
          <Button
            onClick={mainButtonFunc}
            variant='contained'
            style={{
              backgroundColor: buttonBackgroundColor
                ? buttonBackgroundColor
                : 'red'
            }}
            className={classes.mainButton}
            disabled={mainButtonSpinner || mainButtonLinear}
          >
            {mainButtonSpinner ? (
              <CircularProgress size={22} />
            ) : (
              <Typography
                style={{ color: buttonTextColor ? buttonTextColor : 'white' }}
                className={classes.labelButton}
              >
                {mainButtonText}
              </Typography>
            )}
          </Button>
        </Box>
        {mainButtonLinear ? (
          <LinearProgress className={classes.loadingBar} />
        ) : null}
      </Box>
    </Grow>
  )
}
