import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {IconButton} from "@material-ui/core";
import {DeleteOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";


function NoteCard({note, handleDelete}) {

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard;