import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTrackForm from './AddTrackForm';
import TrackTable from './TrackTable';

export default function Tracker(props) {
    const { initTable, initForm } = props;
    const [table, setTable] = useState(initTable);
    const [form, setForm] = useState(initForm);
    const sortFn = (newTableArr) => {
        const newTableArrSorted = newTableArr.sort(function (a, b) {
            if (a.id === b.id) return 0;
            return a.id < b.id ? 1 : -1;
        });
        return newTableArrSorted;
    };

    const handleChange = ({ target }) => {
        setForm((prevForm) => {
            if (target.name === 'date') {
                const newDate = target.value.split('-');
                const date = [newDate[2], newDate[1], newDate[0]].join('.');
                return { ...prevForm, id: target.value, date };
            }
            return { ...prevForm, distance: target.value };
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTable((prevTable) => {
            const existDateSubmit = prevTable.find((exist) => exist.id === form.id);
            if (existDateSubmit)
                return prevTable.map((item) =>
                    item.id === form.id
                        ? {
                            ...item,
                            distance: (
                                Number(item.distance) + Number(form.distance)
                            ).toString(),
                        }
                        : item
                );
            const newTableArr = [...prevTable, form];
            return sortFn(newTableArr);
        });

        setForm({
            id: '',
            date: '',
            distance: '',
        });
    };

    const handleEdit = (itemId) => {
        const { id, date, distance } = table.find((item) => item.id === itemId);
        setForm(() => ({ id, date, distance }));
    };

    const handleRemove = (itemId) => {
        setTable((prevTable) => prevTable.filter((item) => item.id !== itemId));
    };

    return (
        <>
            <AddTrackForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <TrackTable table={table} onEdit={handleEdit} onRemove={handleRemove} />
        </>
    );
}

Tracker.propTypes = {
    initTable: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            distance: PropTypes.string.isRequired,
        })
    ).isRequired,
    initForm: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        distance: PropTypes.string.isRequired,
    }).isRequired,
};