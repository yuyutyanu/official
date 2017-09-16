import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'
import moment from 'moment'

export const uri = 'https://us-west-2.api.scaphold.io/graphql/pixelgram'

export const networkInterface = createNetworkInterface({uri})

export const client = new ApolloClient({networkInterface})

export const queryAllNews = gql`query {
  viewer {
    allNews {
      edges {
        node {
          id
          title
          content
          date
        }
      }
    }
  }
}`

export const state = () => ({
  allNews: null
})

export const mutations = {
  setAllNews (state, data) {
    state.allNews = data
  }
}

export const actions = {
  async queryAllNews ({commit}) {
    const res = await client.query({query: queryAllNews})
    const allNews = res.data.viewer.allNews.edges.map(item => item.node).map(item => {
      const dateYYYYMMDD = moment(item.date).format('YYYY年MM月DD日')
      return {...item, dateYYYYMMDD}
    })
    commit('setAllNews', allNews)
  }
}
