import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {

  class RequireAuth extends React.Component {

    constructor(props) {
      super(props);

      // 當使用者關閉 JS (SSR) 時，將驗證狀態傳到 server 端，讓 server 知道要不要跳頁
      const {staticContext = {}, auth} = this.props;
      staticContext.notAuth = auth ? false : true;
    }

    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(RequireAuth);
};
