import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increse } from './CounterSlice';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 30,
    padding: '0 30px',
    marginLeft: '10px',
  },
});

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const classes = useStyles();

  const handleIncreseClick = () => {
    const action = increse();
    dispatch(action);
  };
  const handleDecreseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div className={styles.counter}>
      Count : {count}
      <Button className={classes.root} onClick={handleIncreseClick}>
        Increase
      </Button>
      <Button className={classes.root} onClick={handleDecreseClick}>
        Decrease
      </Button>
    </div>
  );
}

export default CounterFeature;
