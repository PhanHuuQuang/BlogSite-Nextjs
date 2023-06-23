import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rights}>©2023 Quang Phan. All rights reserved.</div>
            <div className={styles.social}>
                <Link href="https://www.facebook.com/quang.phan.756859" target='_blank'>
                    <Image src="/1.png" width={15} height={15} className={styles.icon} alt='Facebook' />
                </Link>
                <Link href="https://www.instagram.com/" target='_blank'>
                    <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Instagram' />
                </Link>
                <Link href="https://twitter.com/?lang=vi" target='_blank'>
                    <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Twitter' />
                </Link>
                <Link href="https://www.youtube.com/" target='_blank'>
                    <Image src="/4.png" width={15} height={15} className={styles.icon} alt='Youtube' />
                </Link>
            </div>
        </div>
    )
}

export default Footer;