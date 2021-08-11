import * as React from 'react'
import Layout from '../../components/layout.js'

const BlogPost = ({data})=>{
    console.log(data.cockpitBlogs.title)
    return (
        <Layout pageTitle={data.cockpitBlogs.title.value}>
            <p>{data.cockpitBlogs.cockpitCreated}</p>
            {data.cockpitBlogs.title.value}
            <div>
                {data.cockpitBlogs.text.value}
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($id: String) {
    cockpitBlogs(id: {eq:$id}) {
      cockpitId
      cockpitCreated(formatString: "DD-MM-YYYY")
      id
      text {
        value
      }
      title {
        value
      }
    }
  }
  
  
`

  

export default BlogPost