import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <img src="/static/batman.jpeg" width="200" />
        <h1>NextJS</h1>
        <Link href="/users">
            <a>Usuários</a>
        </Link>
    </div>
);

export default withAnalytics()(Home);