import Head from "next/head";
import { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetupDetail";
//our-domain.com/meetupId
function MeetUpDetails() {
  return (
    <Fragment>
      <Head>
        <title>A First Meet up page</title>
        <meta name="Description" content="Result of first meetup" />
      </Head>
      <MeetUpDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/WikiConference_USA_2015_Group_Photo_32.JPG/1024px-WikiConference_USA_2015_Group_Photo_32.JPG"
        title="A First Meetup"
        address="Adsress 233 bangalore"
        description="This is first meetup"
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/WikiConference_USA_2015_Group_Photo_32.JPG/1024px-WikiConference_USA_2015_Group_Photo_32.JPG",
      id: meetupId,
      title: "A First Meetup",
      address: "Adsress 233 bangalore",
      description: "This is first meetup",
    },
  };
}

export default MeetUpDetails;
