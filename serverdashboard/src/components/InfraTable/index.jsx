import React from "react";
import Header from "../Header";
import MaterialTable from "material-table";
import tableIcons from "../MaterialTableIcons";
import { client } from "../AxiosInstance";

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
  },
];
const InfraTable = () => {
  const [servers, setServers] = React.useState([]);
  React.useEffect(() => {
    client.get("/server").then((response) => {
      setServers(response.data.servers);
    });
  }, []);
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
