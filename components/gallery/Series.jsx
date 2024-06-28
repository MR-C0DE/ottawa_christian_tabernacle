import React from "react";
import styles from "./stylesheets/Series.module.css";

const data = [
  {
    memories_id: 1,
    title: "Youth Meeting",
    location: "Ottawa",
    content: [
      {
        series_id: 1,
        cover_photo:
          "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Oct 03, 2020",
        subject: "Introduction to Youth Activities",
      },
      {
        series_id: 2,
        cover_photo:
          "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 15, 2021",
        subject: "Christmas Carols Preparation",
      },
      {
        series_id: 3,
        cover_photo:
          "https://images.unsplash.com/photo-1594000033519-314fe07aabc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 12, 2020",
        subject: "Helping the Homeless",
      },
    ],
  },
  {
    memories_id: 2,
    title: "Bible Study",
    location: "Toronto",
    content: [
      {
        series_id: 1,
        cover_photo:
          "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Nov 05, 2020",
        subject: "Understanding the Old Testament",
      },
      {
        series_id: 2,
        cover_photo:
          "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Feb 20, 2021",
        subject: "Spiritual Renewal",
      },
    ],
  },
];

const Series = ({ setIsOpenSeries, setSeries }) => {
  const openSeries = (series) => {
    setSeries(series);
    setIsOpenSeries(true);
  };
  return (
    <div className={styles.container}>
      {data.map((memory) => (
        <div key={memory.memories_id} className={styles.memory}>
          <h2 className={styles.memory_title}>{memory.title}</h2>
          <p className={styles.memory_location}>{memory.location}</p>
          {memory.content.map((series) => (
            <div
              key={series.series_id}
              className={styles.series}
              onClick={() => {
                openSeries({
                  series,
                  memory: { title: memory.title, location: memory.location },
                });
              }}
            >
              <div className={styles.series_content}>
                <div>
                  {series.cover_photo && (
                    <img width={50} src={series.cover_photo} alt="Cover" />
                  )}
                  {series.subject}
                </div>
                <span>{series.date}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Series;
