import Head from 'next/head'
import Layout from '../components/layout'
import GuestBook from '../components/guestBook'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="row text-center p-25">
        <div className="col-2">Logo</div>
        <div className="col-10">Header</div>
      </header>
      <section className="row text-center">
        <div className="col-3">Filter</div>
        <div className="col-9">
          <GuestBook />
        </div>
      </section>
      <footer className="text-center row a b-0">
        <div className="col-10">Footer</div>
        <div className="col-2 p-15">
          <button>BackToTop</button>
        </div>
      </footer>
    </Layout>
  )
}
