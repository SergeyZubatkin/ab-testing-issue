import Link from 'next/link'
export default function Home({ test }: any) {
  return (<div>
    <div>
      <Link href="/">
        <a>Root</a>
      </Link>
    </div>
    <Link href="/withLinkToItself">
      <a>/withLinkToItself</a>
    </Link>
    <h1>Home A</h1>
    <Link href="/home">
      <a>Home Page</a>
    </Link>
    <p>{test}</p>
  </div>)
}

export function getStaticProps() {
  return {
    props: { test: 'test content from getStaticProps' }, // will be passed to the page component as props
  }
}