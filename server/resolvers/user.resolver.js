import {users} from '../dummyData/data.js'

const userResolvers = {
  Query: {
    users: () => {
      return users
    },
    user(_, { userId }) {
      return users.find((user) => user._id === userId)
    }
  },

  Mutation: {

  }
}


export default userResolvers
