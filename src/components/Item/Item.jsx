import React from "react";
import './Item.css';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.handleDestroyItem = this.handleDestroyItem.bind(this);
        this.handleToogleItem = this.handleToogleItem.bind(this);
        this.handleDblClickItem = this.handleDblClickItem.bind(this);
        this.handleOnBlurItem = this.handleOnBlurItem.bind(this);
    }

    componentDidUpdate() {
        const activeInput = document.querySelector('.item-input-phrase' && '.visibility-visible');

        if (activeInput) {
            activeInput.focus();
        }
    }

    handleToogleItem () {
        const items = this.props.items;

        for (let i = 0; i < items.length; i++) {
            const [id] = items[i];

            if (this.props.id === id) {
                items[i][1] = items[i][1] ? false : true;

                this.props.updateItems(items);

                break;
            }
        }
    }

    handleDblClickItem(id, value) {
        console.log(this.props);
        this.props.updateItemChangeId(id);
        this.props.updateItemChangeOldValue(value);
    }

    handleOnBlurItem(e) {
        if (e.target.value === '') {
            e.target.value = this.props.itemChangeOldValue;

            this.props.updateItemChangeId(0);

            return;
        }

        const items = this.props.items;
        const itemChangeId = this.props.itemChangeId;

        for (let i = 0; i < items.length; i++) {
            const [id] = items[i];

            if (itemChangeId === id) {
                items[i][2] = e.target.value;

                this.props.updateItems(items);

                break;
            }
        }

        this.props.updateItemChangeId(0);
    }

    handleDestroyItem () {
        const items = this.props.items;

        for (let i = 0; i < items.length; i++) {
            const [id] = items[i];

            if (this.props.id === id) {
                items.splice(i, 1);
                this.props.updateItems(items);

                break;
            }
        }
    }

    render() {
        const itemComplete = this.props.complete ? ' item-complete' : '';
        const classVisibilityVisible = this.props.id === this.props.itemChangeId ? ' visibility-visible' : '';

        return (
            <li className='item'>
                <div className="item-main-wrapper">
                    <span className={'item-toggle' + itemComplete}
                        onClick={this.handleToogleItem}
                    >&#10003;</span>

                    <label className='item-phrase'
                        onDoubleClick={this.handleDblClickItem.bind(this, this.props.id, this.props.value)}
                    >{this.props.value}</label>

                    <button className='item-destroy'
                        onClick={this.handleDestroyItem}
                    >X</button>
                </div>

                <input className={"item-input-phrase" + classVisibilityVisible}
                    defaultValue={this.props.value}
                    onBlur={this.handleOnBlurItem}
                />
            </li>
        );
    }
}

export default Item;
