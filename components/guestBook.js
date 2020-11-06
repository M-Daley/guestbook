import data from '../test/data.json'

export default function GuestBook() {
    return <div
        style={{ height: 800, position: "relative" }}
        className="h-fill container--fluid m-25 overflow"
    >
        {data.map(guest => (
            <div className="row m-auto">
                    <div className="col-1">
                        <div className={`a l-50 t-5 ${guest.checked
                        ? "checked"
                        : "checkedout"}`} />
                    </div>
                    <div className="col-1 p-5">{guest.name}</div>
                    <div className="col-2 p-5">{guest.contact}</div>
                    <div className="col-2 p-5">{guest.address}</div>
                    <div className="col-1 p-5">Rm: #{guest.room}</div>
                    <div className="col-1 p-5"><button>Check In</button></div>
                    <div className="col-2 p-5">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
        ))}
    </div>
}