import Link from 'next/link'
export default function Home({ test }: any) {
  return (<div>
    <div>
      <Link href="/ssr">
        <a>Root SSR</a>
      </Link>
    </div>
    <Link href="/withLinkToItself">
      <a>/withLinkToItself</a>
    </Link>
    <h1>Home A</h1>
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