import React from 'react';
import PropTypes from 'prop-types';

export default function TrackTable(props) {
    const { table, onEdit, onRemove } = props;
    const tableItems = table.map((item) => (
        <tr key={item.id} align="center">
            <td>{item.date}</td>
            <td>{item.distance}</td>
            <td>
                <button
                    onClick={() => onEdit(item.id)}
                    className="TrackTable-button button-edit"
                >
                    &#9998;
                </button>
                <button
                    onClick={() => onRemove(item.id)}
                    className="TrackTable-button button-remove"
                >
                    &#10008;
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <table className="TrackTable-header">
                <thead>
                <tr align="center">
                    <th>Дата (ДД.М.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
                </thead>
            </table>
            <table className="TrackTable-body">
                <tbody>{tableItems}</tbody>
            </table>
        </>
    );
}

TrackTable.propTypes = {
    table: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            distance: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};