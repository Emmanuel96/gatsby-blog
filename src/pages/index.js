// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle = "Home Page">
        <p>Welcome to the Procause Blog</p>
        <StaticImage
          alt="animation of image showing support for women"
          src="../images/women.png"
        />
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage