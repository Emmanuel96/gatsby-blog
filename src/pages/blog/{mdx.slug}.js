import * as React from 'react'
import Layout from '../../components/layout.js'

const BlogPost = ()=>{
    return (
        <Layout>
        </Layout>
        // <Layout pageTitle={data.mdx.frontmatter.title}>
        //     <p>{data.mdx.frontmatter.date}</p>
        //     <MDXRenderer>
        //         {data.mdx.body}
        //     </MDXRenderer>
        // </Layout>
    )
}

// // highlight-start
// export const query = graphql`
//   query MyQuery($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//       body
//     }
//   }
// `
// highlight-end

export default BlogPost