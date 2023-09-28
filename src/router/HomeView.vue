<template>
  <div>
    <header class="header">
      <h1 class="title">Welcome to the Community Event Scheduler</h1>
    </header>
    <main>
      <EventList :events="events" @selectEvent="selectEvent" />
    </main>
  </div>
</template>

<script>
import EventList from '../components/EventList.vue';

export default {
  components: {
    EventList
  },
  data() {
    return {
      events: [
        { id: 1, name: "Workshop on Web Development", date: "2023-09-15", time: "10:00 AM", location: "Community Center", description: "Learn the basics of web development!" },
        { id: 2, name: "Fundraising Gala", date: "2023-09-20", time: "6:30 PM", location: "Grand Ballroom", description: "Help support local charities and causes." },
      ]
    }
  },
  methods: {
    selectEvent(event) {
      this.$router.push({ name: 'event-details', params: { id: event.id } });
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.title {
  margin: 0;
}

.main {
  text-align: center;
}
</style>
