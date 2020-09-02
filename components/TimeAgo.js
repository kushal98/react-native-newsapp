import React from 'react'
import {Text} from 'native-base'
import moment from 'moment'

const TimeAgo = (props) => {

    const time = moment( props.time || moment.now() ).fromNow();

    return(
        <Text>{time}</Text>
    );
}

export default TimeAgo;