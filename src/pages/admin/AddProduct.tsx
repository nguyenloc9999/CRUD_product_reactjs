import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { IProduct } from '../../types/product';
import { useNavigate } from 'react-router-dom';
interface IProps {
    onAdd: (product: IProduct) => void
}

const AddProductPage = (props: IProps) => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
        alert('Them san pham thanh cong')
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
        <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: 'Please input product name!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Product Price"
            name="price"
            rules={[{ required: true, message: 'Please input product price!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Add New Product
            </Button>
        </Form.Item>
    </Form>
    </div>
  )
}

export default AddProductPage