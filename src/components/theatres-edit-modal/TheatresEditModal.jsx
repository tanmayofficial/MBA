import { Modal } from '@coreui/coreui';
import React from 'react'

function TheatresEditModal(props) {
    const {
        selectedTheatre,
        setErrorMessage,
        showEditModal,
        setShowEditModal,
        handleEditTheatreSubmit,
        handleTicketsChange,
        errorMessage,
    } = props;


    return (
        <Modal
            show={showEditModal}
            onHide={() => {
                setErrorMessage('')
                setShowEditModal(false);
            }}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>EDIT THEATRE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>TheatreId: {selectedTheatre._id}</h4>
                </div>

                <hr />

                <form onSubmit={handleEditTheatreSubmit}>
                    <div>
                        <label>
                            Theatre Name:
                            <input
                                type="text"
                                value={selectedTheatre.name}
                                name="name"
                                onChange={handleTicketsChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Theatre City:
                            <input
                                type="text"
                                value={selectedTheatre.city}
                                name="city"
                                onChange={handleTicketsChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Theatre Pincode:
                            <input
                                type="text"
                                value={selectedTheatre.pinCode}
                                name="pinCode"
                                onChange={handleTicketsChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Theatre Description:
                            <textarea name="description" onChange={handleTicketsChange}>
                                {selectedTheatre.description}
                            </textarea>
                        </label>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                                setShowEditModal(false);
                            }}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>

                {errorMessage && <div className="text-danger">{errorMessage}</div>}
            </Modal.Body>
        </Modal>
    )
}

export default TheatresEditModal