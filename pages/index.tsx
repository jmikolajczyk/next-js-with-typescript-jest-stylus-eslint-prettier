import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import css from '../styles/global.styl'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className={css.example}> ABC </div>
      <span role="img" aria-label="hand">
        Hello Next.js 👋
      </span>
    </Layout>
  )
}

export default IndexPage
