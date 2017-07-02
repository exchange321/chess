

const Room = ({ id, name, numPlayer, status, onClick }) => (
    <button type="button" className="list-group-item list-group-item-action" 
        onClick={onClick}>
        <div>
            {name} - (Status: {status}) 
        </div>
        <i key="icon_1" className="fa fa-user-circle" aria-hidden="true"></i>
        <i key="icon_2" className="fa fa-user-circle" aria-hidden="true"></i>
    </button>
) 

