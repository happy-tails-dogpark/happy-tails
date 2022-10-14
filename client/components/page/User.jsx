import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../state/UserContext.jsx';
import styles from './Users.css';

export default function User(){
  const user = useUser();
  const [isOpen, setIsOpen] = 
}
