 module.exports = {
    Note: {
        author: async (note, args, {models}) => {
            return models.User.findById(note.author);
        },
        favoritedBy: async (note, args, {models}) => {
            return models.User.find({_id: {$in: note.favoritedBy}})
        }
    }
 }
