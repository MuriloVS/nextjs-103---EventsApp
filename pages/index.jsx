import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <ul>
          <li>
            <Link href="./events">Events Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
