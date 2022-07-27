import React from "react";
import "./ListFooter.css"

class ListFooter extends React.Component {
    constructor(props) {
        super(props);

        this.handleClearCompleteItems = this.handleClearCompleteItems.bind(this);
    }

    handleClearCompleteItems () {
        let items = this.props.items;

        items = items.filter(([, complete]) => complete === false);

        this.props.updateItems(items);
    }

    render() {
        const itemsLeft = this.props.items.reduce((previousValue, [, complete]) => previousValue + !complete, 0);
        const itemsRight = this.props.items.length - itemsLeft;
        const classVisibilityHidden = itemsRight ? '' : ' visibility-hidden';

        const filterItems = this.props.filterItems;
        const filterAll = filterItems === 'All' ? ' filter-selected' : '';
        const filterActive = filterItems === 'Active' ? ' filter-selected' : '';
        const filterCompleted = filterItems === 'Completed' ? ' filter-selected' : '';

        return (
            <div className='list-footer'>
                <span className="list-footer-counter">{itemsLeft} items left</span>
                <ul className="list-footer-filters">
                    <li
                        onClick={() => this.props.updateFiltr('All')}
                        className={"list-footer-filters-content" + filterAll}
                    >All</li>
                    <li
                        onClick={() => this.props.updateFiltr('Active')}
                        className={"list-footer-filters-content" + filterActive}
                    >Active</li>
                    <li
                        onClick={() => this.props.updateFiltr('Completed')}
                        className={"list-footer-filters-content" + filterCompleted}
                    >Completed</li>
                </ul>

                <button className={'list-footer-item-completed-destroy' + classVisibilityHidden}
                    onClick={this.handleClearCompleteItems}
                >Clear completed</button>
            </div>
        );
    }
}

export default ListFooter;
