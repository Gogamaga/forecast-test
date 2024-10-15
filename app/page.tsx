import Dashboard from "@/app/components/Dashboard";
import {Layout} from 'antd'
import {Content, Header} from "antd/es/layout/layout";
import SearchLocation from "@/app/components/SearchLocation";
import styles from './page.module.css'

export default function Home() {
  return (
    <div >
        <Layout>
            <Header className={styles.header}>
                <SearchLocation/>
            </Header>
            <Content>
                <Dashboard/>
            </Content>

        </Layout>
    </div>
  );
}
