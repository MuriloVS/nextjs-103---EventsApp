import Link from "next/link";

function AllEventsHomePage() {
  const events = [
    { id: "1", name: "FAIQ" },
    { id: "2", name: "SAEQA" },
    { id: "3", name: "LASEAQ" },
  ];

  return (
    <div>
      <h1>The Events Home Page</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <Link href={`/${e.id}`}>{e.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEventsHomePage;
