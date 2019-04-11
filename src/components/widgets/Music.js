import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import './music.css';

class Music extends Component {
  render() {
    let { music } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Card.Title>音乐</Card.Title>
        <div className="table-responsive">
          <Table
            hover
            className="music-table"
            style={{ minWidth: 600 }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>音乐标题</th>
                <th>歌手</th>
                <th>传记</th>
              </tr>
            </thead>
            <tbody>
              {music.result[0].content.map((i, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{i.title}</td>
                  <td>{i.author}</td>
                  <td>{i.album_title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Music;
