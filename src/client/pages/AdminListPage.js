import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchAdmins } from '@/client/actions';
import requireAuth from '@/client/components/hocs/requireAuth';

class AdminList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.admins.length === 0) {
      this.props.fetchAdmins();
    }
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return (
        <li className="collection-item" key={admin.id}>
          {admin.name}
        </li>
      );
    });
  }

  renderHead() {
    return (
      <Helmet>
        <title>{ `Admin Apps(${this.props.admins.length})` }</title>
        <meta property="og:title" content="Admin Apps"/>
      </Helmet>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderHead()}
        <h5>
          Here is <span style={{ color: '#ef5350' }}>protected</span> list of
          Admins
        </h5>
        <ul className="collection">{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

// loadData 會透過 Routes.js 傳到 server side 執行
export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminList))
};
