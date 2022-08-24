import React, { useEffect, useState } from "react";
import { getAllTheatres, updateTheatre } from "../../api/theatres";
import MaterialTable from "@material-table/core";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import TheatresEditModal from "../theatres-edit-modal/TheatresEditModal";

function TheatresList() {
  const [theatresList, setTheatresList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //api call tofetch theatre list
    // on success of data, set it to state --> setTheatresList
    fetchTheatres()
  }, []);

  const fetchTheatres = () => {
    getAllTheatres()
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          console.log(data);
          setTheatresList(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    const tempTheatre = { ...selectedTheatre };

    if (e.target.name === "name") {
      tempTheatre.name = e.target.value;
    } else if (e.target.name === "city") {
      tempTheatre.city = e.target.value;
    } else if (e.target.name === "description") {
      tempTheatre.description = e.target.value;
    } else if (e.target.name === "pinCode") {
      tempTheatre.pinCode = e.target.value;
    }
    setSelectedTheatre(tempTheatre);
  };

  const handleEditTheatreSubmit = (e) => {
    const id = selectedTheatre._id;

    try {
      updateTheatre(id, selectedTheatre)
        .then((response) => {
          const { message, status } = response;
          if (status === 200) {
            setSelectedTheatre({});
            setShowEditModal(false);
            setErrorMessage("");
            fetchTheatres();
          } else if (message) {
            setErrorMessage(message);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } catch (error) {
      setErrorMessage(error.message);
    }

    // api call to save the theatre data
    // send the id and the theatre data

    // on success of save, i will close the modal
    // and i will fetch the theatre list again

    // empty the selected theatre

    // on error, i will show the error
    e.preventDefault();
  };

  //return the material table withh all data in the list
  return (
    <div className="container">
      <MaterialTable
        data={theatresList}
        title="Theatres List"
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
        /* {
            icon: Delete,
            tooltip: "Delete Theater",
            onClick: (event, rowData) => deleteTheatre(rowData),
        }, */

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
      {showEditModal && (
        <TheatresEditModal
          selectedTheatre={selectedTheatre}
          setErrorMessage={setErrorMessage}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          handleEditTheatreSubmit={handleEditTheatreSubmit}
          handleTicketsChange={handleTicketsChange}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}

export default TheatresList;
