import React from "react";
import ListHeader from "./ListHeader/ListHeader";
import List from "./List/List";
import ListFooter from "./ListFooter/ListFooter";
import {getStorage, setStorage} from "../utils/storageUtils.js"

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: getStorage(),
            filterItems: 'All',
            itemChangeId: 0,
            itemChangeOldValue: '',
        };

        this.updateItems = this.updateItems.bind(this);
        this.updateFiltr = this.updateFiltr.bind(this);
        this.updateItemChangeId = this.updateItemChangeId.bind(this);
        this.updateItemChangeOldValue = this.updateItemChangeOldValue.bind(this);
    }

    componentDidUpdate() {
        setStorage(this.state.items);
    }

    updateItems(items) {
        this.setState({ items: items });
    }

    updateFiltr(valueFiltr) {
        this.setState({ filterItems: valueFiltr });
    }

    updateItemChangeId(id) {
        this.setState({ itemChangeId: id });
    }

    updateItemChangeOldValue(oldValue) {
        this.setState({ itemChangeOldValue: oldValue });
    }

    render() {
        return (
            <>
                <ListHeader
                    items={this.state.items}
                    updateItems={this.updateItems}
                />
                <List
                    items={this.state.items}
                    updateItems={this.updateItems}
                    filterItems={this.state.filterItems}
                    itemChangeId={this.state.itemChangeId}
                    updateItemChangeId={this.updateItemChangeId}
                    updateItemChangeOldValue={this.updateItemChangeOldValue}
                />
                <ListFooter
                    items={this.state.items}
                    updateItems={this.updateItems}
                    filterItems={this.state.filterItems}
                    updateFiltr={this.updateFiltr}

                />
            </>
        );
    }
}

export default ToDoList;
