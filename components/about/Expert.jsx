import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './stylesheets/Expert.module.css';

const expertsData = [
  {
    name: 'Jack Simple',
    title: 'Lead Pastor',
    email: 'example@mail.com',
    phone: '+0123456789',
    profileImage: '/images/n3.jpg',
    width: 500,
    height: 500,
  },
  {
    name: 'Ann Smith',
    title: 'Associate Pastor',
    email: 'example@mail.com',
    phone: '+0123456789',
    profileImage: '/images/n4.jpg',
    width: 500, 
    height: 500,
  },
  {
    name: 'Philip Wilson',
    title: 'Youth Ministry Director',
    email: 'example@mail.com',
    phone: '+0123456789',
    profileImage: '/images/n3.jpg',
    width: 500, 
    height: 500,
  },
  {
    name: 'Amanda Rich',
    title: 'Community Outreach Coordinator',
    email: 'example@mail.com',
    phone: '+0123456789',
    profileImage: '/images/n3.jpg',
    width: 500, 
    height: 500,
  },
];

const ExperienceSection = () => {
  return (
    <div className={styles.experience}>
      <h2>Our Pastors</h2>
      <div className={styles.experts}>
        {expertsData.map((expert, index) => (
          <div key={index} className={styles.expert}>
            <Image
              className={styles.image}
              src={expert.profileImage}
              alt={`profile of ${expert.name}`}
              width={expert.width}
              height={expert.height}
            />
  
            <p className={styles.name}>{expert.name}</p>
            <p className={styles.title}>{expert.title}</p>
            <p className={styles.contact}>{expert.email}</p>
            <p className={styles.contact}>{expert.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
