import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
// import Link from 'next/link';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function detailHandler() {
    router.push('/' + props.id);
  };
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={detailHandler}>Show Details</button>          
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;


//We could have used '<Link>'instead of 'useRouter'
//for the 'Show Details' button:

{/* <Link href={'./' + props.id}>
<button>Show Details</button>          
</Link> */}

//'useRouter' allows programmatic navigation