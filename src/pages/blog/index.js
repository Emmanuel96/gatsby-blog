// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import blogImage from '../assets/images/blog/770/blog-1.jpg'
import blogAvatar from "../assets/images/blog/blog-avatar.jpg"

// Step 2: Define your component
const IndexPage = ({data}) => {
  return (
    <main>
      <Layout pageTitle = "Home Page">
      <div className="section section-padding-bottom fix">
            <div className="container">
                <div className="row max-mb-n50">

                    <div className="col-lg-12 col-12 order-lg-2 max-mb-50">
                        <div className="row row-cols-1 no-gutters">
                            {
                                 data.allCockpitBlogs.nodes.map( node=>(
                                        <div className="blog-3 col" data-aos="fade-up">
                                            <div className="thumbnail">
                                                <Link to={`/blog/${node.cockpitId}`} className="image">
                                                    <img src={blogImage} alt="Blog"/>
                                                </Link>
                                            </div>
                                            <div className="info">
                                                <Link to={`/blog/${node.cockpitId}`} className="category">{}</Link>
                                                <h3 className="title"><Link to="/">{node.title.value}</Link></h3>
                                                <ul className="meta">
                                                    <li>
                                                        <Link to={`/blog/${node.cockpitId}`}><img src={blogAvatar} alt="" className="avatar" />{node.author.value}</Link>
                                                    </li>
                                                    <li><i className="far fa-calendar"></i>{node.cockpitCreated}</li>
                                                    <li><i className="far fa-eye"></i>70 views</li>
                                                </ul>
                                                <div className="desc">
                                                    <p>{node.title.value}..</p>
                                                </div>
                                                <div className="row justify-content-between max-mt-30">
                                                    <div className="col-auto">
                                                        <Link to={`/blog/${node.cockpitId}`} className="btn btn-primary btn-hover-secondary">
                                                            Read More
                                                        </Link>
                                                    </div>
                                                    {/* <div className="col-auto">
                                                        <div className="post-share">
                                                            <span className="label">Share this post</span>
                                                        
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                ))
                            }
                            {/* <div className="blog-3 col" data-aos="fade-up">
                                <div className="thumbnail">
                                    <Link to="/" className="image"><img src={blogImage} alt="Blog"/></Link>
                                </div>
                                <div className="info">
                                    <Link to="/" className="category">Gym Coaching</Link>
                                    <h3 className="title"><Link to="/">10 Essential Bodyweight Exercises</Link></h3>
                                    <ul className="meta">
                                        <li>
                                            <Link to="/"><img src={blogAvatar} alt="" className="avatar" />Owen Christ</Link>
                                        </li>
                                        <li><i className="far fa-calendar"></i>Apr 06, 2020</li>
                                        <li><i className="far fa-eye"></i>70 views</li>
                                    </ul>
                                    <div className="desc">
                                        <p>Essential bodyweight exercises are crucial to a well-rounded training routine because they’re versatile and can be done anywhere. …</p>
                                    </div>
                                    <div className="row justify-content-between max-mt-30">
                                        <div className="col-auto">
                                            <Link to="/" className="btn btn-primary btn-hover-secondary">Read More</Link>
                                        </div>
                                        <div className="col-auto">
                                            <div className="post-share">
                                                <span className="label">Share this post</span>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="row">
                            <div className="col">

                                <ul className="pagination center">
                                    <li><Link to="#" className="prev">PREV</Link></li>
                                    <li><Link to="#" className="active">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#" className="next">NEXT</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    </main>
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
        author{
            value
        }
        id
        cockpitCreated(formatString: "DD-MM-YYYY")
        cockpitId
      }
    }
  }
`
    
export default IndexPage