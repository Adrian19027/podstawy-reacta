import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store.js';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(inputValue));
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput
                placeholder="Search..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;