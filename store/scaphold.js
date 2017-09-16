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
      const day = moment(new Date()).diff(moment(item.date), 'days')
      const dateYYYYMMDD = moment(item.date).format('YYYY[.]MM[.]DD')
      const dateDisplay = dateYYYYMMDD + ' ( ' + day + 'd ago' + ' )'
      return {...item, dateDisplay}
    })
    commit('setAllNews', allNews)
  }
}
