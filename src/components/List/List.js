import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsRedux.js';
import {getListById} from '../../redux/listsRedux.js'
import { Navigate, useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm.js';

const List = () => {
    
    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId));
    
    if (!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column key={column.id} {...column}></Column>
                )}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    );
};

export default List;