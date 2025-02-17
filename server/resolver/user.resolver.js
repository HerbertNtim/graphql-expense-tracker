import {users} from '../dummyData/data.js'

const userResolvers = {
  Query: {
    users: () => {
      return users
    }
  },

  Mutation: {

  }
}


export default userResolvers
