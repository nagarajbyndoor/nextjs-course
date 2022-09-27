//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUp() {
  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "appication/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default NewMeetUp;
