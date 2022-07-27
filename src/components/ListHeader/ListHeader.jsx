import React from "react";
import "./ListHeader.css"

class ListHeader extends React.Component {
    constructor(props) {
        super(props);

        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.handleAddNewItem = this.handleAddNewItem.bind(this);
    }

    handleAddNewItem(e) {
        if (['Enter', 'NumpadEnter'].includes(e.code)) {
            if (e.target.value) {
                const items = this.props.items;

                items.push([Date.now(), false, e.target.value]);

                this.props.updateItems(items);
                e.target.value = '';
            }
        }
    }

    handleArrowClick() {
        const items = this.props.items;

        let flagCompleteItem = true;

        for (let i = 0; i < items.length; i++) {
            const [, complete] = items[i];

            if (complete === false) {
                flagCompleteItem = false;

                break;
            }
        }

        if (flagCompleteItem) {
            items.forEach((value, i) => items[i][1] = false)
        } else {
            items.forEach((value, i) => items[i][1] = true)
        }

        this.props.updateItems(items);
    }

    render() {
        const itemsLeft = this.props.items.reduce((previousValue, [, complete]) => previousValue + complete, 0);
        const itemsAll = this.props.items.length;
        const arrowSymbol = itemsLeft !== itemsAll ? ' list-header-arrow-down' : ' list-header-arrow-up';

        return (
            <div className='list-header'>
                <label className={"list-header-arrow" + arrowSymbol}
                    onClick = {this.handleArrowClick}
                ></label>

                <input className="list-header-input"
                    onKeyPress = {this.handleAddNewItem}
                ></input>
            </div>
        )
    }
}

export default ListHeader;
