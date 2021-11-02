import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles}  from '@mui/styles';

const useStyle=makeStyles({
    btn:{
        fontsize:60,
        backgroundColor:'violet'
    }
})
function Create() {
    const classes = useStyle()
    return (
        <Container>
            <Typography
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                Create a new Note
            </Typography>
            <Button
                className={classes.btn}
                onClick={() => {
                    console.log("you clicked me")
                }}
                type='Submit'
                color='secondary'
                variant='contained'
                // startIcon={<SendIcon/>}
                endIcon={<KeyboardArrowRightIcon/>}
            >
                Submit
            </Button>
            <br/>
            {/*{icons}*/}
            {/*<AcUnitIcon/>*/}
            {/*<AcUnitIcon*/}
            {/*    color='secondary'*/}
            {/*    fontSize='large'/>*/}
        </Container>
    )
}

export default Create;