import React from 'react';
import styles from './SpiralBook.module.css';

const SpiralBook = () => {
    return (
        <div className={styles.spiralBook}>
            <div className={styles.spiralWinding}>
                <div className='spiral'>
                    <div className={styles.hole}>
                        <svg width="auto" height="auto" style={{ color: 'var(--text-color) !important' }}>
                            <path d="M 100 0 A 100 100 0 0 1 200 100" fill="var(--text-color)" stroke="var(--text-color)" stroke-width="1" />
                        </svg>
                    </div>


                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
                <div className='spiral'>
                    <div className={styles.hole}></div>
                    {/* <div className={styles.wire}></div> */}
                </div>
            </div>
        </div>
    )
}

export default SpiralBook