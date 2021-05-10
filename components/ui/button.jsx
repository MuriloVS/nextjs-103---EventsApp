import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {
  return (
    // apesar de Link usar <a> por baixo dos panos, para estilizar foi necessário acrescentar manualmente a tag
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
