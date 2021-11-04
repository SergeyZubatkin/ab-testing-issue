import Link from 'next/link'
export default function Home({ test } : any) {
  return (<div>
    <Link href="/ssr">
      <a>Root SSR</a>
    </Link>
    <h1>Home B</h1>
    <Link href="/ssr/home">
      <a>Home Page SSR</a>
    </Link>
    <p>{test}</p>
  </div>)
}

export function getServerSideProps() {
  return {
    props: { test: 'test content from getStaticProps' }, // will be passed to the page component as props
  }
}