import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
function Create() {
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
                onClick={()=>{
                    console.log("you clicked me")
                }}
                type='Submit'
                color='secondary'
                variant='contained'
            >
                Submit
            </Button>
        </Container>
    )
}

export default Create;