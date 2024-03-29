import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows} from "../../datatablesource.js"
import { useState } from "react";
import { Link } from "react-router-dom";

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter( item => item.id !== id))
	}

	const actionColumn = [{ field: "action", headerName: "Action", width: 200, renderCell: (params) => {
		return (
			<div className="cellAction">
				<div className="viewButton">View</div>
				<div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
			</div>
		)
	}}];
	return (
		<div className="datatable">
			<div className="datatableTitle">
				Add New User
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
				className="grid"
			/>
		</div>
	)
}

export default Datatable