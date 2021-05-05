// GraphQL resolvers server definition

const resolvers = {
    Query: {
        async books (root, { id }, { models }) {
            return models.Book.findByPk(id)
        },
        async authors (root, { id }, { models }) {
            return models.Author.findByPk(id)
        }
    },
    Mutation: {
        async createBook (root, { title, authorName }, { models }) {
            let author = await models.Author.findOrCreate({
                where: {
                    name: authorName
                }
            });
            return models.Book.create({
                title,
                author
            })
        }
    },
    Book: {
        async author (books) {
            return book.getAuthor()
        }
    },
    Author: {
        async books (author) {
            return authors.getBooks()
        }
    }
}

module.exports = resolvers;