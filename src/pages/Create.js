import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles} from '@mui/styles';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {FormLabel} from '@mui/material';
// import { FormControl } from '@mui/material';
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
    field: {
        marginTop: 25 ,
        marginBottom: 25,
        display: 'block'
    }
})

function Create() {
    const classes = useStyle()
    const history=useHistory()
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('todos');

    function handleSubmit(e) {
        e.preventDefault();
        if (title == '') {
            setTitleError(true)
        }
        if (details == '') {
            setDetailsError(true)
        }
        if (title && details) {
        fetch("  http://localhost:8000/notes",{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({title,details,category})
        }).then(()=>history.push('/'))
        }
    }

    return (
        <Container>
            <Typography
                // className={classes.title}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                Create a new Note
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    className={classes.field}
                    label="Not Title"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField
                    onChange={(e) => {
                        setDetails(e.target.value)
                    }}
                    className={classes.field}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />

                {/*<FormControl*/}
                {/*    // className={classes.field}*/}
                {/*>*/}
                <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        <FormControlLabel value='money' control={<Radio/>} label="Money"/>
                        <FormControlLabel value='todos' control={<Radio/>} label="Todos"/>
                        <FormControlLabel value='reminders' control={<Radio/>} label="Reminders"/>
                        <FormControlLabel value='work' control={<Radio/>} label="Work"/>
                    </RadioGroup>
                {/*</FormControl>*/}

                <Button
                    type='Submit'
                    color='secondary'
                    variant='contained'
                    endIcon={<KeyboardArrowRightIcon/>}
                >
                    Submit
                </Button>
            </form>

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