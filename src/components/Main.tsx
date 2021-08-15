import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  makeStyles,
  Theme,
  createStyles,
  CardHeader,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    cardsContainer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    twoCardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > *': {
        width: '100%',
      },
    },
    card: {
      height: '100%',
    },
    mainCardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)

export default function Main() {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.root}>
      <Grid
        container
        component='main'
        spacing={2}
        justifyContent='center'
        className={classes.cardsContainer}
      >
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardHeader title='London' subheader='Shower rain' />
            <CardContent className={classes.mainCardContent}>
              <img
                alt='Shower rain'
                src='http://openweathermap.org/img/wn/09d@4x.png'
                width={64}
                height={64}
              />
              <Typography variant='h2'>18°</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          container
          spacing={2}
          justifyContent='center'
          alignItems='center'
          className={classes.cardsContainer}
        >
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title='Feels like' subheader='17°' />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title='Humidity' subheader='30%' />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title='Wind speed' subheader='7 kph' />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader title='Wind degree' subheader='130°' />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
