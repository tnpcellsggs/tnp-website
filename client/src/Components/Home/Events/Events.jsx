import React, { useState, useEffect } from "react";
import EUpcoming from "./EUpcoming";
import EPast from "./EPast";
import axios from "axios";

function Events() {
  const [eventsList, setEventsList] = useState([
    { uid: "-", recipent: "-", issued: 0, created: 0 },
  ]);

  useEffect(() => {
    document.title = "Events | SGGS Training & Placement";

    const fetchEventList = async () => {
      try {
        let res = await axios.get(
          `${process.env.REACT_APP_REQURL}/admin/events/getall/`
        );
        let templist = res.data;
        templist.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
        setEventsList(templist);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventList();
    console.log(eventsList);
  }, []);

  return (
    <>
      <h1 className="homepage-headings">Events</h1>
      <h3
        className="homepage-headings"
        style={{ color: "var(--primary-blue)" }}
      >
        Upcoming Events
      </h3>
      <div style={{ textAlign: "center" }}>Nothing to show</div>
      <h3
        className="homepage-headings"
        style={{ color: "var(--primary-blue)" }}
      >
        Past Events
      </h3>
      <div>
        {eventsList.map((i) => {
          return (
            <>
              <EPast
                name={i.eventName}
                org={i.eventOrg}
                desc={i.eventDesc}
                type={i.eventType}
                date={
                  i.eventDate
                    ? new Date(i.eventDate).toLocaleDateString("en-gb", {
                        weekday: "long",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                    : "-"
                }
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Events;
