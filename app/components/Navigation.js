import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/cabins">About</Link>
      </li>
      <li>
        <Link href="/cabins">Your account</Link>
      </li>
    </ul>
  );
}
