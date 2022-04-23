import React from 'react';
import PropTypes from 'prop-types';

export default function AddTrackForm(props) {
    const { form, onChange, onSubmit } = props;

    return (
        <form className="AddTrackForm" onSubmit={onSubmit}>
            <div className="AddTrackForm-inputs-wrapper">
                <div className="AddTrackForm-input-wrapper date-wrapper">
                    <label className="AddTrackForm-label label-date" htmlFor="date">
                        Дата (ДД.М.ГГ)
                    </label>
                    <input
                        className="AddTrackForm-input input-date"
                        id="date"
                        name="date"
                        value={form.id}
                        type="date"
                        required
                        onChange={onChange}
                    />
                </div>

                <div className="AddTrackForm-input-wrapper distance-wrapper">
                    <label
                        className="AddTrackForm-label label-distance"
                        htmlFor="distance"
                    >
                        Пройдено км
                    </label>
                    <input
                        className="AddTrackForm-input input-distance"
                        id="distance"
                        name="distance"
                        value={form.distance}
                        type="number"
                        step="any"
                        required
                        onChange={onChange}
                    />
                </div>

                <button className="AddTrackForm-submit" type="submit">
                    Ок
                </button>
            </div>
        </form>
    );
}

AddTrackForm.propTypes = {
    form: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        distance: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};