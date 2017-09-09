import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'
import moment from 'moment'

export const uri = 'https://api.graphcms.com/simple/v1/pixelgram'

export const networkInterface = createNetworkInterface({uri})

export const client = new ApolloClient({networkInterface})

export const queryAllNews = gql`query {
  allNews {
    id
    content
    date
  }
}`

export const state = () => ({
  allNews: []
})

export const mutations = {
  setAllNews (state, data) {
    state.allNews = data
  }
}

export const actions = {
  async queryAllNews ({commit}) {
    const res = await client.query({query: queryAllNews})
    const allNews = res.data.allNews.map(item => {
      console.log(item.content)
      const dateYYYYMMDD = moment(item.date).format('YYYY年MM月DD日')
      return {...item, dateYYYYMMDD}
    })
    commit('setAllNews', allNews)
  }
}
