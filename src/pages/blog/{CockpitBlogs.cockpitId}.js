import * as React from 'react'
import Layout from '../../components/layout.js'
import blogImage from '../../assets/images/blog/770/blog-1.jpg'
import blogAvatar from "../../assets/images/blog/blog-avatar.jpg"
import { graphql} from 'gatsby'


const BlogPost = ({data})=>{
    console.log(data.cockpitBlogs.title)
    return (
        <Layout pageTitle={data.cockpitBlogs.title.value}>
            <h5>{data.cockpitBlogs.title.value}</h5>
            <div className="thumbnail">
              <img src={blogImage} alt="Blog"/>
            </div>
            {/* <p>{data.cockpitBlogs.cockpitCreated}</p> */}
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
      author{
        value
      }
      title {
        value
      }
    }
  }
`

  

export default BlogPost