const { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLBoolean
} = require('graphql');

// launch type
const launchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number : { type: GraphQLInt},
        mission_name : { type: GraphQLString},
        launch_year : { type: GraphQLString},
        launch_date_local : { type: GraphQLString},
        launch_success: { type: GraphQLBoolean},
        rocket : { type: GraphQLInt}
    })
})

//Rocket type
const launchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        rocket_id : { type: GraphQLString},
        rocket_name : { type: GraphQLString},
        rocket_type : { type: GraphQLString},
    })
})

