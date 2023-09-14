<template>
  <div id="app">
    <header>
      <h1>Welcome to the Community Event Scheduler</h1>
    </header>
    <main>
      <EventList :events="events" @selectEvent="selectEvent" />
      <EventDetails :selectedEvent="selectedEvent" v-if="selectedEvent" @goBack="goBack" />
    </main>
  </div>
</template>

<script>
import EventList from './components/EventList.vue';
import EventDetails from './components/EventDetails.vue';

export default {
  data() {
    return {
      events: [
        { id: 1, name: "Workshop on Web Development", date: "2023-09-15", time: "10:00 AM", location: "Community Center", description: "Learn the basics of web development!" },
        { id: 2, name: "Fundraising Gala", date: "2023-09-20", time: "6:30 PM", location: "Grand Ballroom", description: "Help support local charities and causes." },
      ],
      selectedEvent: null
    }
  },
  methods: {
    selectEvent(event) {
      this.selectedEvent = event;
    },
    goBack() {
      this.selectedEvent = null;
    }
  },
  components: {
    EventList,
    EventDetails
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background: linear-gradient(to bottom, #4a90e2, #36d1dc);
  color: #fff;
}

header {
  background-color: rgba(51, 51, 51, 0.8);
  color: #fff;
  padding: 20px;
}

h1 {
  margin: 0;
}
</style>
