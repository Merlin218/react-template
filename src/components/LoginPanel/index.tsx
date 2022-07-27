import { Button, Card, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import Logo from '../Logo';
import './index.less'
const LoginPanel = ()=>{

  const {Item} = Form
  const {Password} = Input

  const itemOptions = [
    {
      child: <Input />,
      props:{
        label:'用户名',
        name:'username',
        rules:[{ required: true, message: '请输入用户名！' }]
      }
    },
    {
      child:<Password />,
      props:{
        label:'密码',
        name:'password',
        rules:[{ required: true, message: '请输入密码！' }]
      }
    },
    {
      child:<Checkbox>记住密码</Checkbox>,
      props:{
        name:'remember',
        valuePropName:'checked',
        wrapperCol:{ offset: 8, span: 16 }
      }
    },
    {
      child:<Button type="primary" htmlType="submit">提交</Button>,
      props:{
        wrapperCol:{ offset: 8, span: 16 }
      }
    }
  ]

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const navigate = useNavigate();
    navigate('/')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="登录" style={{ width: 400}} extra={<Logo width={100} color="#aaaaaa"/>}>
          <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {
          itemOptions.map(({child,props})=>(
            <Item {...props}>
              {child}
            </Item>
          ))
        }
      </Form>
    </Card>
  )
}
export default LoginPanel
