import React from 'react';

import { MainPage } from '@/components/pages';
import { Route, Switch } from 'react-router';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}></Route>
    </Switch>
  );
};

export default Router;
