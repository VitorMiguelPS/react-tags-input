import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  tagsBox: {
    marginTop: 30,
    border: '1px solid darkgray',
    borderRadius: 3,
    padding: 7,
    overflowY: 'auto',
    maxHeight: 275,

    '&::-webkit-scrollbar': {
      height: '0.9em',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgb(238, 238, 238)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'darkgray',
      borderRadius: 20,
      border: '3px solid rgb(238, 238, 238)',
    },
  },
  tagsItem: {
    margin: '3px 1px',
  },
}))

export default useStyles
