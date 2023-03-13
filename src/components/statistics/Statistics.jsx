import styleSec from '../styleSection.module.css';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/getRandomColor';

export const Statistics = ({title, stats}) => {
    const getBackgroundColor = getRandomColor;
    return <section className={styleSec.section}>
                <div className={styleSec.container}>
                    {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

                    <ul className={css['stat-list']}>
                        {stats.map(({id, label, percentage}) => 
                            <li className={css.item} key={id} style={{backgroundColor: getBackgroundColor()}}>
                                <span className={css.label}>{label}</span>
                                <span className={css.percentage}>{percentage}%</span>
                            </li>
                            )}       
                    </ul>
                </div>
            </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),  
}