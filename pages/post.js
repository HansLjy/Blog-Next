import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Page from '../components/Page';

export default function Post() {
    const router = useRouter();
    return (
        <Layout>
            <Page>
                <h1>{router.query.title}</h1>
                <p> SomeThing </p>
            </Page>
        </Layout>
    )
}