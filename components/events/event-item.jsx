import Link from "next/link";

function EventItem(props) {
  const { image, title, date, location, id } = props;

  const betterDate = new Date(date).toLocaleDateString("pt-BR");
  const betterAddress = location.replace(", ", "\n");
  const link = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{betterDate}</time>
        </div>
        <div>
          <address>{betterAddress}</address>
        </div>
      </div>
      <div>
        <Link href={link}>Explore event</Link>
      </div>
    </li>
  );
}

export default EventItem;
