import Link from 'next/link'
import Layout from '../../components/layout'
import Products from '../../components/products'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export async function getStaticProps () {
  return {
    props: {
      launches: data.launchesPast
    }
  }
}
const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

const { data } = await client.query({
  query: gql`
    query GetLaunches {
        launchesPast {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
})

export default function FirstPost ({ launches }) {
  return (

<div>
<Layout >
{launches.map(launch => {
  return (

         <Products key={launch.id}
         image= {launch.links.mission_patch}
         title={ launch.mission_name }
         desc= {launch.launch_site.site_name_long}
                />

  )
})}

         </Layout>
   </div>

  )
}
