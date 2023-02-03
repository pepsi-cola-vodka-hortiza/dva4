module.exports = {
    Query: {
        users: async (parent, args, {models}) => models.User.find(),
        user: async (parent, {username}, {models}) => models.User.findOne({username}),
        me: async (parent, args, {models, user}) => models.User.findById(user.id),
        notes: async(parent, args, {models}) => models.Note.find(),
        note: async(parent, {id}, {models}) => models.Note.findById(id)
    }
}
