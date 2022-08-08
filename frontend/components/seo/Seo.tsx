import Head from 'next/head';
import React from 'react';
import { SeoI } from './Seo.types';

const Seo = ({metaTitle, metaDescription, isPost}: SeoI) => {
    return(
        <Head>
            {metaTitle && (
                <>
                    <title>{metaTitle}</title>
                    <meta property='og:title' content={metaTitle} />
                    <meta name="twitter:title" content={metaTitle} />
                </>
            )}

            {metaDescription && (
                <>
                    <meta name="description" content={metaDescription} />
                    <meta property="og:description" content={metaDescription} />
                    <meta name="twitter:description" content={metaDescription} />
                </>
            )}

            {isPost && <meta property="og:type" content="article" />}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}

export default Seo;