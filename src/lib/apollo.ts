import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri:"https://api-sa-east-1.graphcms.com/v2/cl4u45gsr0hef01tadn1l2msr/master",
  cache: new InMemoryCache()
})