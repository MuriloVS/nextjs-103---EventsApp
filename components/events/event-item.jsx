import Button from '../ui/button';
import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem(props) {
  const { image, title, date, location, id } = props;

  const betterDate = new Date(date).toLocaleDateString('pt-BR');
  const betterAddress = location.replace(', ', '\n');
  const link = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{betterDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{betterAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={link}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
