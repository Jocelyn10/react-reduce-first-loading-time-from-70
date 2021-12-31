const Sales = lazy(() => import('components/Sales'));
const Profit = lazy(() => import('components/Profit'));
const Chart = lazy(() => import('components/Chart'));
const Tiles = lazy(() => import('components/Tiles'));
const Trends = lazy(() => import('components/Trends'));

const { TabPane } = Tabs;

function Dashboard() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Sales" key="1">
        <Suspense fallback={<div>Loading...</div>}>
          <Sales/>
        </Suspense>
      </TabPane>
      <TabPane tab="Profit" key="2">
        <Suspense fallback={<div>Loading...</div>}>
          <Profit/>
        </Suspense>
      </TabPane>
      <TabPane tab="Chart" key="3">
        <Suspense fallback={<div>Loading...</div>}>
          <Chart/>
        </Suspense>
      </TabPane>
      <TabPane tab="Tiles" key="4">
        <Suspense fallback={<div>Loading...</div>}>
          <Tiles/>
        </Suspense>
      </TabPane>
      <TabPane tab="Trends" key="5">
        <Suspense fallback={<div>Loading...</div>}>
          <Trends/>
        </Suspense>
      </TabPane>
    </Tabs>
  );
}