import React, { useEffect, useState } from "react";
import { getAllTheatres } from "../../api/theatres";
import MaterialTable from "@material-table/core";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Modal } from "react-bootstrap";

function Theatres() {
  const [theatresList, setTheatresList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAllTheatres()
      .then((response) => {
        const { data, status, message } = response;
        if (status === 200) {
          console.log(data);
          setTheatresList(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //api call tofetch theatre list
    // on success of data, set it to state --> setTheatresList
  }, []);

  const editTheatre = (rowData) => {
    setSelectedTheatre({ ...rowData });
    setShowEditModal(true);
  };

  const deleteTheatre = (rowData) => {
    const theatreId = rowData._id;
    const theatresListUpdated = theatresList.filter((theatre) => {
      const { _id } = theatre;
      return _id !== theatreId;
    });
    setTheatresList(theatresListUpdated);
  };

  const handleTicketsChange = (e) => {
   
  };

  const handleEditTheatreSubmit = (e) => {
    
    
    // api call to save the theatre data
    // send the id and the theatre data

    // on success of save, i will close the modal
    // and i will fetch the theatre list again

    // empty the selected theatre

    // on error, i will show the error

  }

  //return the material table withh all data in the list
  return (
    <div className="container">
      <MaterialTable
        data={theatresList}
        columns={[
          {
            title: "Theater Name",
            field: "name",
          },
          {
            title: "Theater ID",
            field: "_id",
          },
          {
            title: "Description",
            field: "description",
          },
          {
            title: "Pin code",
            field: "pinCode",
          },
          {
            title: "City",
            field: "city",
          },
        ]}
        actions={[
          {
            icon: Edit,
            tooltip: "Edit Theater",
            onClick: (event, rowData) => editTheatre(rowData),
          },
          {
            icon: Delete,
            tooltip: "Delete Theater",
            onClick: (event, rowData) => deleteTheatre(rowData),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          sorting: true,
          filtering: true,
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "Theater Records"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "Theater Records"),
            },
          ],

          headerStyle: {
            backgroundColor: "#202429",
            color: "#fff",
          },
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
      />
      <Modal
        show={showEditModal}
        onHide={() => {
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
    </div>
  );
}

export default Theatres;
