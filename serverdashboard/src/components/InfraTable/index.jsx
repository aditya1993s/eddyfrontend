import React from "react";
import Header from "../Header";
import MaterialTable from "material-table";
import tableIcons from "../MaterialTableIcons";
import { client } from "../AxiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { getAllServer } from "../../redux/actions/servers";

const columns = [
  {
    title: "SERVER NAME",
    field: "name",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
  },
  {
    title: "HARDWARE CONFIG",
    field: "config",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
  },
  {
    title: "ALLOCATED FROM",
    field: "assigned_from",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
  },
  {
    title: "ALLOCATED TO",
    field: "assigned_till",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
  },
  {
    title: "ASSIGNED TO",
    field: "assigned_to",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
  },
  {
    title: "STATUS",
    field: "status",
    align: "center",
    headerStyle: {
      backgroundColor: "#039be5",
      color: "white",
      fontweight: 600,
      border: "1px solid",
    },
    render: (rowData) => (
      <p>
        {new Date(rowData.assigned_till) > new Date() ? (
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Allocated
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Expired
          </div>
        )}
      </p>
    ),
  },
];
const InfraTable = () => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dispatch = useDispatch();
  const servers = useSelector((state) => state.servers.servers);
  React.useEffect(() => {
    client.get("/server").then((response) => {
      dispatch(getAllServer(response.data));
    });
  }, []);
  servers?.map((server) => {
    server.assigned_from = new Date(server.assigned_from).toLocaleDateString(
      "en-US",
      options
    );
    server.assigned_till = new Date(server.assigned_till).toLocaleDateString(
      "en-US",
      options
    );
  });
  return (
    <>
      <Header />
      <MaterialTable
        icons={tableIcons}
        title=""
        columns={columns}
        data={servers}
        options={{
          exportButton: true,
          rowStyle: { border: "1px solid #404040", textAlign: "center" },
          cellStyle: { border: "1px solid #404040", textAlign: "center" },
        }}
      />
    </>
  );
};

export default InfraTable;
