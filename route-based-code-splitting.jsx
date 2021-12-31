const Dashboard = lazy(() => import('components/Dashboard'));
const Settings = lazy(() => import('components/Settings'));
const Configurations = lazy(() => import('components/Configurations'));

function App() {
  return (
    <Router>
      <Layout>
        <SideBar/>
        <Layout>
          <AppHeader/>
          <Content style={{padding: '20px'}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
                <Route path="/settings">
                  <Settings/>
                </Route>
                <Route path="/configuration">
                  <Configurations/>
                </Route>
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}