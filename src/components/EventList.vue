<template>
  <section class="event-list">
    <div v-for="event in events" :key="event.id" class="event-card">
      <h2 :class="eventClass(event.name)">{{ event.name }}</h2>
      <div class="event-details">
        <p class="event-info">Date: {{ event.date }}</p>
        <p class="event-info">Time: {{ event.time }}</p>
        <p class="event-info">Location: {{ event.location }}</p>
        <button @click="selectEvent(event)">RSVP</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    events: Array
  },
  methods: {
    selectEvent(event) {
      this.$emit('selectEvent', event);
    },
    eventClass(name) {
      return name === 'Fundraising Gala' ? 'fundraising-gala' : 'web-development-workshop';
    }
  }
}
</script>

<style scoped>
.event-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.event-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 300px; /* Set a fixed width for all cards */
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: scale(1.05);
}

.event-details {
  margin-top: 20px;
}

.event-info {
  font-size: 14px;
  margin: 8px 0;
  color: #555;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.fundraising-gala {
  color: #FF5733;
}

.web-development-workshop {
  color: #36D1DC;
}
</style>
