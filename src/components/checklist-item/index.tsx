import react from 'react';

function CheckListItem() {
    return (
        <div className="item-container">
            <div className="item-name">
                <input type="checkbox" />
                <p>Martelo</p>
            </div>
            <div className="item-quantity">
                <p>12x</p>
            </div>
            <div className="item-place-in-storage">
                <p>P/Ce/A/2</p>
            </div>
        </div>
    )
}

export default CheckListItem;