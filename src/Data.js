import React from 'react';
var FontAwesome = require('react-fontawesome');

export class Date extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                <FontAwesome name='calendar' />{this.state.date}
            </div>
        );
    }
}