import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux.js';

const SearchForm = () => {

    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchString)
    const [inputValue, setInputValue] = useState(searchValue);

    useEffect(() => {
        setInputValue(searchValue);

    }, [searchValue]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(inputValue));
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