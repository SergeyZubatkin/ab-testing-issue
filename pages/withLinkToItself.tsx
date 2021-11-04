import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <Link href="/">
          <a>Root</a>
        </Link>
      </div>
      <h1>AB testing</h1>
      <p>
        Demo
      </p>
      <ul>
        <li>
          <Link href="/withLinkToItself">
            <a>/withLinkToItself</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>/home</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export function getStaticProps() {
  return {
    props: { test: 'test content from getStaticProps' },
  }
}
