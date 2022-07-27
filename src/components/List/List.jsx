import React from 'react';
import Item from "../Item/Item";
import './List.css';

class List extends React.Component {
    render() {
        return (
            <ul className='list'>
                {
                    this.props.items
                    .filter(([, complete])=>{
                        return (
                            (this.props.filterItems !== 'Active') && (complete === true)) ||
                                ((this.props.filterItems !== 'Completed') && (complete !== true)
                        )
                    }, this)
                    .map(([id, complete, value], index)=>{
                        return <Item
                            key={id + index + value}
                            items={this.props.items}
                            id={id}
                            complete={complete}
                            value={value}
                            updateItems={this.props.updateItems}
                            itemChangeId={this.props.itemChangeId}
                            updateItemChangeId={this.props.updateItemChangeId}
                            updateItemChangeOldValue={this.props.updateItemChangeOldValue}
                        />
                    }, this)
                }
            </ul>
        );
    }

}

export default List;
