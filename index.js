// @ post sobre como iniciar en Apollo GraphQL Server ( Dblog )

import { ApolloServer, gql } from 'apollo-server'


/* 
    cada servidor utiliza un esquema para definir un esquema con 
    las operaciones que puede realizar
*/
const typeDefs = gql`
    type Task {
        _uid: ID 
        title : String 
        cratedAt : String 
        finishedAt : String 
        description : String 
        status : String 
        priority : String
    }

    type Query {
        tasks : [Task]
    }
`

// conjunto de datos que se pueden consultar en la aplicacion
// deben de conicidir con el esquema definido
const DataTaskInitial = [
    {
        _uid: '1',
        title: 'Task 1',
        createdAt: '2020-01-01',
        finishedAt: '2020-01-01',
        description: 'Description 1',
        status: 'Pending',
        priority: 'Low'
    },
    {
        _uid: '2',
        title: 'Task 2',
        createdAt: '2020-01-01',
        finishedAt: '2020-01-01',
        description: 'Description 2',
        status: 'In Progress',
        priority: 'High'
    }
]

// utilizamos los resolver para indicarle al servidor
// que operaciones puede realizar y como se debe realizar
const resolvers = {
    Query: {
        tasks: () => DataTaskInitial
    }
}

// instancia del servidor Apollo que se va a utilizar
// para realizar las operaciones
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
})


// servidor que se va a ejecutar
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})