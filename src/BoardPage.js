import React, { Component } from 'react';
import Page from './Components/Page';
import BoardEntry from './Components/BoardEntry';


class BoardPage extends Component {
    render() {
        return <Page child={BoardEntry} boardMenu={true} />;
    }
}

export default BoardPage;