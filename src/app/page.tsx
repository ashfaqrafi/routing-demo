import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <nav>
        <Link href="/about">About</Link>
        <br />
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/products">Products</Link>
        <br />
      </nav>
    </>
  );
}
