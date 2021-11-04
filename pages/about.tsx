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
        ABOUT PAGE
      </p>
    </>
  )
}
