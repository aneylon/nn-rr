import React from "react";
import styles from "./EventList.module.css";

export const EventList = ({ events, deleteEvent }) => {
  return (
    <>
      {events.map((item, index) => {
        return (
          <div key={item.id} className={styles.card}>
            <h2>
              {index + 1} : {item.title}
            </h2>
            <button
              onClick={() => {
                deleteEvent(item.id);
              }}
            >
              delete event
            </button>
          </div>
        );
      })}
    </>
  );
};
