import {FC} from 'react';
import RouteConfig from './routes';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
const App: FC = () => (
  <ConfigProvider locale={zhCN}>
  <div className='App'>
    <RouteConfig />
  </div>
  </ConfigProvider>
);

export default App;
