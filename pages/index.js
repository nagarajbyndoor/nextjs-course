import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/WikiConference_USA_2015_Group_Photo_32.JPG/1024px-WikiConference_USA_2015_Group_Photo_32.JPG",
    address: "Some Adress 3535 Bangalore",
    description: "This is First Meet Up",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2015_Art%2BFeminism_Wikipedia_Edit-a-thon_at_The_Museum_of_Modern_Art%2C_New_York.JPG/1024px-2015_Art%2BFeminism_Wikipedia_Edit-a-thon_at_The_Museum_of_Modern_Art%2C_New_York.JPG",
    address: "Some Adress 3535 Pune",
    description: "This is Second Meet Up",
  },
];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Raeact New Meetsup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//       props: {
//         meetups: DUMMY_MEETUPS
//       }
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
