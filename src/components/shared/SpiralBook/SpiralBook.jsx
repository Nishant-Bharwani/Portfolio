import React from 'react';
import Spiral from './Spiral';
import styles from './SpiralBook.module.css';

const SpiralBook = ({ title }) => {
    return (
        <div className={styles.spiralBook}>
            <div className={styles.spiralWinding}>
                {Array.from({ length: 8 }, (_, idx) => (
                    <Spiral key={idx} />
                ))}

            </div>
            <div className={styles.bookTitleWrapper}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default SpiralBook