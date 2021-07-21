import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  appMainContainer: {
    padding: '0 60px',
    background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
    height: '100vh',
  },
  appMainPaper: {
    width: '35%',
    height: 550,
    padding: '0 30px',
  },
  titlePage: {
    paddingTop: 50,
    textAlign: 'center',
    marginBottom: 30,
  },
}))

export default useStyles
