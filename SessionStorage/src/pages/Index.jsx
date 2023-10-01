// import React from "react";
import "./Index.css";
import { Result, Button, Breadcrumb, Layout, Menu } from "antd";
import { useSessionContext } from "../context/SessionContext";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
    const { userSigninDetails, userLoginDetails, onLogout } = useSessionContext();
    const userEmail = userLoginDetails.email;
    const deviceType = userSigninDetails.deviceType;
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`
                        };
                    })}
                />
            </Header>
            <Content
                style={{
                    padding: "0 50px"
                }}
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0"
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Result
                        status="success"
                        title={`Welcome back ${userEmail} !`}
                        subTitle={
                            <p>
                                Your device type is <strong>{deviceType}</strong>.
                            </p>
                        }
                        extra={[
                            <Button type="primary" key="console" onClick={onLogout}>
                                Log out
                            </Button>
                        ]}
                    />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center"
                }}
            >
                ©2023 Session Login Program
            </Footer>
        </Layout>
    );
};
export default HomePage;
