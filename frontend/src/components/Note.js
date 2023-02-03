

const Note = ({note}) => {
    return (
        <>
            <div>
                {note.content}
            </div>
            <div>
                {note.author.username}
            </div>
            <div>
                {note.createdAt}
            </div>
            <div>
                {note.favoriteCount}
            </div>
        </>
    )
}

export default Note;
