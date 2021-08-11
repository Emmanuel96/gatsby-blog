
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

// import { graphql, Link } from 'gatsby'
const BlogPage = ({data}) =>{
    console.log(data)
    return(
        <Layout pageTitle = "Blog Page">
            {
                data.allCockpitBlogs.nodes.map( node=>(
                    <article key = {node.id} style={{marginBottom: 10 + 'px'}} >
                            <Link to={`/blog/${node.cockpitId}`}>
                                {node.title.value}
                            </Link>
                            {/* {node.cockpitCreated} */}
                    </article>   
                ))
            }             
        </Layout>
    )

}

// step 2: Export a page query 
export const query = graphql `
query {
    allCockpitBlogs {
      nodes {
        title {
          value
        }
        text {
          value
        }
        published {
          value
        }
        slug{
          value
        }
        id
        cockpitCreated(formatString: "DD-MM-YYYY")
        cockpitId
      }
    }
  }
  
        `
export default BlogPage